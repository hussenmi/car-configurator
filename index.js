

const inputMinMsrp = document.getElementById('input-min-msrp')
const inputMaxMsrp = document.getElementById('input-max-msrp')

const inputMinMonthly = document.getElementById('input-min-monthly')
const inputMaxMonthly = document.getElementById('input-max-monthly')
const inputDownpayment = document.getElementById('input-downpayment')

const inputEnvironment = document.getElementById('environment')

const inputAverageDrive = document.getElementById('average-drive')

const inputCruiseControl = document.getElementById('dessert-1')
const inputLaneKeeping = document.getElementById('dessert-2')
const inputSmartphone = document.getElementById('dessert-3')
const inputSeatCooling = document.getElementById('dessert-4')
const inputHeatedWheel = document.getElementById('dessert-5')



function doStuff(preference) {
    localStorage.setItem("preference", preference)
    window.location.href = 'index2.html'  // go to page 2
}

function doStuff2(method) {
    localStorage.setItem("method", method)
    if (method === 'MSRP') {
        window.location.href = 'index3_msrp.html'
    } else {
        window.location.href = 'index3_monthly.html'
    }
}

function doStuff3_msrp() {
    localStorage.setItem("min_msrp", inputMinMsrp.value)
    inputMinMsrp.value = null
    localStorage.setItem("max_msrp", inputMaxMsrp.value)
    inputMaxMsrp.value = null
    window.location.href = 'index4.html'  // go to page 4
}

function doStuff3_monthly() {
    localStorage.setItem("min_monthly", inputMinMonthly.value)
    inputMinMonthly.value = null  
    localStorage.setItem("max_monthly", inputMaxMonthly.value)
    inputMaxMonthly.value = null
    localStorage.setItem("downpayment", inputDownpayment.value)
    inputDownpayment.value = null
    window.location.href = 'index4.html'  // go to page 4
}

function doStuff4(size) {
    localStorage.setItem("size", size)
    window.location.href = 'index5.html'  // go to page 5
}

function doStuff5(fuel_type) {
    localStorage.setItem("fuel_type", fuel_type)
    window.location.href = 'index6.html'  // go to page 6
}

function doStuff6() {
    localStorage.setItem("environment", inputEnvironment.value)
    inputEnvironment.value = null
    window.location.href = 'index7.html'  // go to page 7
}

function doStuff7() {
    localStorage.setItem("average_drive", inputAverageDrive.value)
    inputAverageDrive.value = null
    window.location.href = 'index8.html'  // go to page 8
}

function doStuff8() {
    trims = []
    if (inputCruiseControl.checked) {
        trims.push('cruise_control')
    }
    inputCruiseControl.checked = false
    if (inputLaneKeeping.checked) {
        trims.push('lane_keeping')
    }
    inputLaneKeeping.checked = false
    if (inputSmartphone.checked) {
        trims.push('smartphone')
    }
    inputSmartphone.checked = false
    if (inputSeatCooling.checked) {
        trims.push('seat_cooling')
    }
    inputSeatCooling.checked = false
    if (inputHeatedWheel.checked) {
        trims.push('heated_wheel')
    }
    inputHeatedWheel.checked = false

    localStorage.setItem("trims", trims)

    // module.exports = {get_responses, trims}

    window.location.href = 'index10.html'  // go to page 9
}

function doStuff9() {
    window.location.href = 'index10.html'  // go to page 10
}


    
