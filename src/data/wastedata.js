export const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: "Steps by Xinqi",
            data: [3000, 4000, 5000, 6000, 7000, 8000, 9000],
            borderColor: "rgb(75, 192, 192)",
        },
        {
            label: "Steps by Jazz",
            data: [2000, 7000, 4000, 1000, 7700, 8000, 5000],
            borderColor: "violet",
        }

    ]
}

export const barChartData = {
    labels: ["Benson Center","facilities", "Graham", "Learning Commons", "Malley", "Swig", "University Villas", "Vari Hall and Lucas Hall"],
    datasets: [
        {
            label: "Total Weight of Waste (lbs)",
            data: [1230, 239, 233, 98, 677, 313, 310, 380],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: "rgba(255, 99, 132, 1)",
            borderwidth: 1
        }
    ]
}

export const pieChartData = {
    labels: ["Compost", "Landfill", "Recycling"],
    datasets: [
        {
            label: "Benson Center",
            data: [636.6, 85.7, 475],
            backgroundColor: ["#4AAD52", "#BBBBB4", "#47A8BD"],
            hoverOffset: 4
        },
        {
            label: "Facilities",
            data: [80.1, 30, 128.5],
            backgroundColor: ["#4AAD52", "#BBBBB4", "#47A8BD"],
            hoverOffset: 4
        },

        {
            label: "Graham",
            data: [93.4, 28.1, 95.9],
            backgroundColor: ["#4AAD52", "#BBBBB4", "#47A8BD"],
            hoverOffset: 4
        },
        {
            label: "Learning Commons",
            data: [15.8, 14.2, 59.4],
            backgroundColor: ["#4AAD52", "#BBBBB4", "#47A8BD"],
            hoverOffset: 4
        },
         {
            label: "Malley",
            data: [222.2, 73.9, 332],
            backgroundColor: ["#4AAD52", "#BBBBB4", "#47A8BD"],
            hoverOffset: 4
        },
         {
            label: "Swig",
            data: [105, 62.5, 137.8],
            backgroundColor: ["#4AAD52", "#BBBBB4", "#47A8BD"],
            hoverOffset: 4
        },
         
         {
            label: "University Villas",
            data: [170.3, 19.3, 109.6],
            backgroundColor: ["#4AAD52", "#BBBBB4", "#47A8BD"],
            hoverOffset: 4
        },
         {
            label: "Vari Hall and Lucas Hall",
            data: [208.1, 66.1, 91.9],
            backgroundColor: ["#4AAD52", "#BBBBB4", "#47A8BD"],
            hoverOffset: 4
        }


    ]
}

export const buildingCorrectioness = {
    "Benson Center": {
        "Compost": 2,
        "Landfill": 95,
        "Recycling": 34,
        "note": "The Benson Center has a high landfill percentage. Please be more careful when disposing of waste."
    },

    "Graham": {
        "Compost": 0,
        "Landfill": 100,
        "Recycling": 0,
        "note": "Almost all the Compost and Recycling is going to the landfill. Please be more careful when disposing of waste."
    },
    "Facilities": {
        "Compost": 46,
        "Landfill": 63,
        "Recycling": 57,
        "note":"The Facilities compost percentage is low. Please be more careful when disposing of waste."
    },
    "Learning Commons": {
        "Compost": 0,
        "Landfill": 77,
        "Recycling": 82,
        "note": "The Learning Common has a low compost percentage. Please be more careful when disposing of waste."
    },
    "Malley": {
        "Compost": 35,
        "Landfill": 74,
        "Recycling": 74,
        "note": "The Malley building has a low compost percentage. Please be more careful when disposing of waste."
    },
    "Swig": {
        "Compost": 0,
        "Landfill": 100,
        "Recycling": 0,
        "note": "Almost all the Compost and Recycling is going to the landfill. Please be more careful when disposing of waste."
    },
    "University Villas": {
        "Compost": 0,
        "Landfill": 100,
        "Recycling": 0,
        "note": "Almost all the Compost and Recycling is going to the landfill. Please be more careful when disposing of waste."
    },
    "Vari Hall and Lucas Hall": {
        "Compost": 0,
        "Landfill": 100,
        "Recycling": 0,
        "note": "Almost all the Compost and Recycling is going to the landfill. Please be more careful when disposing of waste."
    }

}

export const indexBuildingMatch = {
    0: "Benson Center",
    1: "Facilities",
    2: "Graham",
    3: "Learning Commons",
    4: "Malley",
    5: "Swig",
    6: "University Villas",
    7: "Vari Hall and Lucas Hall"
}