const msrpBtn = document.getElementById('msrp-btn')
const thirtySixBtn = document.getElementById('thirtySix-btn')
const fortyEightBtn = document.getElementById('fortyEight-btn')
const sixtyBtn = document.getElementById('sixty-btn')

msrpBtn.addEventListener('click', function() {
    goToPage3()
    let payment_method = 'msrp'
})

thirtySixBtn.addEventListener('click', function() {
    goToPage3()
    let payment_method = '36_month'
})

fortyEightBtn.addEventListener('click', function() {
    goToPage3()
    let payment_method = '48_month'
})

sixtyBtn.addEventListener('click', function() {
    goToPage3()
    let payment_method = '60_month'
})

function goToPage3() {
    window.location.href = 'index3.html'
    // myLeads.push(inputEl.value)  // add the new lead
    // inputEl.value = null
}