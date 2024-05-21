import React from 'react'
import TrashItemsScene from '../assets/3d/trashItems.glb'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from "react";

const TrashItems = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(TrashItemsScene)
    const { actions } = useAnimations(animations, ref);
  return (
      <mesh {...props} ref={ref} position={[3, 1, 1] } scale={[0.003, 0.003, 0.003]} rotation={[0.5,0.2, 0.3]} >
      <primitive object={scene} />
    </mesh>
  )
}

export default TrashItems
