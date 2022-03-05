import { payment_method } from './index2.js';

import { preference } from './index1.js';

const inputMin = document.getElementById('input-min')
const inputMax = document.getElementById('input-max')
const inputDownpayment = document.getElementById('input-downpayment')



if (payment_method === 'msrp') {
    window.location.href = 'index3_msrp.html';
} else {
    window.location.href = 'index3_monthly.html'
}