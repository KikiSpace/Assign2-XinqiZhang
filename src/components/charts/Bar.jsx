import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { barChartData } from '../../data/wastedata'
import { useRef } from 'react'
import { getElementsAtEvent } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarGraph = ({setCurrentIndex}) => {
  const barChartRef = useRef();
  
    const onClick = (event) => {
        if (getElementsAtEvent(barChartRef.current, event).length > 0) {
            // console.log(getElementsAtEvent(barChartRef.current, event)[0])
            const datasetIndexNum = getElementsAtEvent(barChartRef.current, event)[0].datasetIndex
          const dataPointIndex = getElementsAtEvent(barChartRef.current, event)[0].index
          setCurrentIndex(dataPointIndex)
            console.log(`Dataset Index: ${datasetIndexNum}, Data Point Index: ${dataPointIndex}`)
        }
      }
    const options = {}
 
  return (
      <Bar ref={barChartRef} options={options} data={barChartData} onClick={onClick}/>
  )
}