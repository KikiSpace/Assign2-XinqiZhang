import { PieGraph } from "./charts/Pie"
import {buildingCorrectioness, indexBuildingMatch} from '../data/wastedata'

const Card = ({ currentIndex }) => {
    const building = indexBuildingMatch[currentIndex]
    const corrections = buildingCorrectioness[building]
    return (
        <div>
            
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                🏫{ building}🏫
                Note: {corrections.note}
                <br />
                Waste Sorted Corrections:
            <br/>
                💚Compost: {corrections.Compost}% 🖤Landfill: {corrections.Landfill}% 💙Recycling:{corrections.Recycling}%
                
      </h1>
        </div>
      
  )
}

export default Card
