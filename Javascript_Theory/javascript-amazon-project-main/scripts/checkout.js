import { loadProducts, loadProductsFetch } from '../data/products.js';
import { renderOrderSummary } from './checkout/oderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

// sau khi nhan duoc data backend -> goi ham loadProducts -> 2 ham ben trong moi chay 
// do tinh chat ko dong bo trong thoi gian tai data tu backend -> 2 ham render van chay -> chua co data -> page empty 


// *Promise -> giup run code tuan tu -> giai quyet van de bat dong bo 
// -> ngay sau khi resolve() run -> then() sau no run 
// loadProducts -> loadCart -> render ... 
// let myPromise = new Promise((resolve) => {
//     loadProducts(() => {
//         resolve();
//     })
// })

// myPromise
//     .then(() => {
//         let promise = new Promise((resolve) => {
//             loadCart(() => {
//                 resolve();
//             })
//         })

//         promise
//             .then(() => {
//                 renderOrderSummary();
//                 renderPaymentSummary();
//             })
//     })

// * Sorthand code
// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     })
// ]).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// })


// * Clean code : Async wait is a shortcut promise 
// - async : make a function return promise 
// - await: wait for a promise to finish 

// Ex: 
// async function loadPage() {
//     // return new Promise((resolve) => {
//         // console.log('load page');
//         // resolve();
//     // })
//     console.log('load page');

//     // .then(() => {
//         // return loadProductsFetch();
//     // })
//     await loadProductsFetch();


//     // .then(() => {
//         // return new Promise((resolve) => {
//             // resolve('resolve2...');
//         // });
//     // });
//     return 'value2';
// }

async function loadPage() {
    try {
        await loadProductsFetch();
     const value = await new Promise((resolve,reject) => {
        // throw 'error 2';
            loadCart(() => {
                reject('error3')
                // resolve('value 3');
            });
        });
    }

    catch (error) {
        console.log('Unexpected error. Please try again later.');
    }

    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();


// loadProducts(() => {
//     loadCart(() => {
//         renderPaymentSummary();
//         renderOrderSummary();
//     });
// });