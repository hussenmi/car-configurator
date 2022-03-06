// let myLeads = []

// const index = document.querySelector('.index')
// index.getElementsById('suv-btn').addEventListener('click', function () {
//     console.log('hey')
// })
// const suvBtn = document.getElementById('suv-btn')
// const sedanBtn = document.getElementById('sedan-btn')
// const crossoverBtn = document.getElementById('crossover-btn')
// const wagonBtn = document.getElementById('wagon-btn')
// const hatchbackBtn = document.getElementById('hatchback-btn')

const msrpBtn = document.getElementById('msrp-btn')
// const thirtySixBtn = document.getElementById('thirtySix-btn')
// const fortyEightBtn = document.getElementById('fortyEight-btn')
// const sixtyBtn = document.getElementById('sixty-btn')

const inputMinMsrp = document.getElementById('input-min-msrp')
const inputMaxMsrp = document.getElementById('input-max-msrp')

const inputMinMonthly = document.getElementById('input-min-monthly')
const inputMaxMonthly = document.getElementById('input-max-monthly')
const inputDownpayment = document.getElementById('input-downpayment')

const inputEnvironment = document.getElementById('environment')

// const ulEl = document.getElementById('ul-el')

// var dict = {}

// function addPreference(preference) {
//     dict['preference'] = preference
//     localStorage.setItem("dict", JSON.stringify(dict))
//     // console.log('hey')
// }

// function howToPay(method) {
//     let dictFromLocalStorage = JSON.parse(localStorage.getItem("dict"))
//     dict['how_to_pay'] = method
//     localStorage.setItem("dict", JSON.stringify(dict))
//     // console.log('hey')
// }


// function goToPage2() {
//     window.location.href = 'index2.html'
//     // myLeads.push(inputEl.value)  // add the new lead
//     // inputEl.value = null
// }

// function goToPage3_monthly() {
//     window.location.href = 'index3_monthly.html'
//     // myLeads.push(inputEl.value)  // add the new lead
//     // inputEl.value = null
// }

// function goToPage4() {
//     window.location.href = 'index4.html'
//     // myLeads.push(inputEl.value)  // add the new lead
//     // inputEl.value = null
// }

// function doStuff(preference) {
//     localStorage.setItem("preference", preference)
//     window.location.href = 'index2.html'  // go to page 2
// }

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

// suvBtn.addEventListener('click', function() {
//     addPreference('suv')
//     console.log('hey')
//     goToPage2()
//     // dict['preference'] = preference
//     // console.log('hey')
// })

// sedanBtn.addEventListener('click', function() {
//     goToPage2()
//     console.log('hey')
// })

// crossoverBtn.addEventListener('click', function() {
//     goToPage2()
//     // let preference = 'crossover'
// })

// wagonBtn.addEventListener('click', function() {
//     goToPage2()
//     // let preference = 'wagon'
// })

// hatchbackBtn.addEventListener('click', function() {
//     goToPage2()
//     // let preference = 'hatchback'
// })


// msrpBtn.addEventListener('click', function() {
//     goToPage3()
//     let payment_method = 'msrp'
// })

// thirtySixBtn.addEventListener('click', function() {
//     goToPage3()
//     let payment_method = '36_month'
// })

// fortyEightBtn.addEventListener('click', function() {
//     goToPage3()
//     let payment_method = '48_month'
// })

// sixtyBtn.addEventListener('click', function() {
//     goToPage3()
//     let payment_method = '60_month'
// })

// function goToPage3() {
//     window.location.href = 'index3.html'
//     // myLeads.push(inputEl.value)  // add the new lead
//     // inputEl.value = null
// }

// suvBtn.addEventListener('click', function(){
//     // console.log(tabs[0]['url'])
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         myLeads.push(tabs[0]['url'])
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         renderLeads(myLeads)
//     })
// })

// sedanBtn.addEventListener('click', function() {
//     localStorage.clear()
//     myLeads = []
//     renderLeads(myLeads) // DOM will display nothing because we've cleared everything

// })

// let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // recreate myLeads array from localStorage

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     renderLeads(myLeads)
// }

// inputBtn.addEventListener('click', function() {
//    pushLeads()
//    saveLeads()
// })

// function pushLeads() {
//     myLeads.push(inputEl.value)  // add the new lead
//     inputEl.value = null
// }

// function saveLeads() {
//     // myLeads = JSON.stringify(myLeads)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))  // save the whole array to localStorage
//     renderLeads(myLeads)
// }

// function renderLeads(leads) {
//     let listItems = ''

//     for (let i=0; i<leads.length; i++) {
//         listItems += `
//             <li>
//                 <a href='${leads[i]}' target='_blank'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `

//         // ulEl.innerHTML = '<li>' + myLeads[i] + '</li>'
//     }
//     // console.log(myLeads)
//     ulEl.innerHTML = listItems
// }

// // let myLeads = []
// // const inputEl = document.getElementById("input-el")
// // const inputBtn = document.getElementById("input-btn")
// // const ulEl = document.getElementById("ul-el")

// // let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// // // 1. Check if leadsFromLocalStorage is truthy
// // // 2. If so, set myLeads to its value and call renderLeads()

// // if (leadsFromLocalStorage) {
// //     myLeads = leadsFromLocalStorage
// //     renderLeads()
// // }

// // inputBtn.addEventListener("click", function() {
// //     myLeads.push(inputEl.value)
// //     inputEl.value = ""
// //     localStorage.setItem("myLeads", JSON.stringify(myLeads) )
// //     renderLeads()
// // })

// // function renderLeads() {
// //     let listItems = ""
// //     for (let i = 0; i < myLeads.length; i++) {
// //         listItems += `
// //             <li>
// //                 <a target='_blank' href='${myLeads[i]}'>
// //                     ${myLeads[i]}
// //                 </a>
// //             </li>
// //         `
// //     }
// //     ulEl.innerHTML = listItems  
// // }

    
