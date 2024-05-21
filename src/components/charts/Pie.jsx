import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import { pieChartData } from '../../data/wastedata'

ChartJS.register(Tooltip, Legend, ArcElement)

export const PieGraph = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
                position: 'top',
                text: 'Waste Disposal',
                font: {
                    size: 20
                }
            }
        }
    }
 
  return (
      <Pie options={options} data={pieChartData}/>
  )
}