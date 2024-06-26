import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Loader from '../components/Loader'
import TrashBins from '../models/TrashBins'
import HomeInfo from '../components/HomeInfo'
import Sky from '../models/Sky'
import TrashItems from '../models/TrashItems'
const Home = () => {
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1);

    const adjustTrashBinsForScreenSize = () => {
        let screenScale = null, screenPosition = [0, -6.5, -43], rotation = [0, 0, 0];
        if(window.innerWidth < 768) {
            screenScale = 0.9;      
        } else {
            screenScale = 5;
        }

        return [screenScale, screenPosition, rotation]
    }

    const [screenScale, screenPosition, rotation] = adjustTrashBinsForScreenSize();
  return (
    <section className="w-full h-screen relative">
          <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
          <Canvas
              className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
              camera={{near: 0.1, far: 1000}}
          >
              <Suspense fallback={<Loader />}>
                  <directionalLight position={[1,1,1]} intensity={3}/>
                  <ambientLight intensity={0.5}/>
                  <pointLight />
                  <spotLight />
                  <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                  <TrashItems isRotating={isRotating}/>
                  <Sky isRotating={isRotating}/>
                  <TrashBins isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} position={screenPosition} scale={screenScale} rotation={rotation}  />
           </Suspense>   
          </Canvas>
    </section>
  )
}

export default Home
