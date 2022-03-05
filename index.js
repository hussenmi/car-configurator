let myLeads = []

const suvBtn = document.getElementById('suv-btn')
const sedanBtn = document.getElementById('sedan-btn')
const crossoverBtn = document.getElementById('crossover-btn')
const wagonBtn = document.getElementById('wagon-btn')
const hatchbackBtn = document.getElementById('hatchback-btn')

// const msrpBtn = document.getElementById('msrp-btn')
// const thirtySixBtn = document.getElementById('thirtySix-btn')
// const fortyEightBtn = document.getElementById('fortyEight-btn')
// const sixtyBtn = document.getElementById('sixty-btn')

const inputEl = document.getElementById('input-el')

const ulEl = document.getElementById('ul-el')

var dict = {}

function addPreference(preference) {
    dict['preference'] = preference
    console.log(dict)
}

// function goToPage2() {
//     window.location.href = 'index2.html'
//     // myLeads.push(inputEl.value)  // add the new lead
//     // inputEl.value = null
// }

// suvBtn.addEventListener('click', function() {
    // goToPage2()
//     let preference = 'suv'
// })

// sedanBtn.addEventListener('click', function() {
//     goToPage2()
//     let preference = 'sedan'
// })

// crossoverBtn.addEventListener('click', function() {
//     goToPage2()
//     let preference = 'crossover'
// })

// wagonBtn.addEventListener('click', function() {
//     goToPage2()
//     let preference = 'wagon'
// })

// hatchbackBtn.addEventListener('click', function() {
//     goToPage2()
//     let preference = 'hatchback'
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

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // recreate myLeads array from localStorage

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

inputBtn.addEventListener('click', function() {
   pushLeads()
   saveLeads()
})

function pushLeads() {
    myLeads.push(inputEl.value)  // add the new lead
    inputEl.value = null
}

function saveLeads() {
    // myLeads = JSON.stringify(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))  // save the whole array to localStorage
    renderLeads(myLeads)
}

function renderLeads(leads) {
    let listItems = ''

    for (let i=0; i<leads.length; i++) {
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `

        // ulEl.innerHTML = '<li>' + myLeads[i] + '</li>'
    }
    // console.log(myLeads)
    ulEl.innerHTML = listItems
}

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// // 1. Check if leadsFromLocalStorage is truthy
// // 2. If so, set myLeads to its value and call renderLeads()

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     renderLeads()
// }

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//     renderLeads()
// })

// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[i]}'>
//                     ${myLeads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems  
// }

    
