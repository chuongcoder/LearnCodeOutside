const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    // in ra data product dau tien 
//    console.log(xhr.response);
});
// supersimplebackend.dev/documentation -> list of which URL paths that are suported === Backend API
// URL path : https://supersimplebackend.dev/products/first 
// The backend can respond with different types of data
// Using the browser = making a GET request
// request data product dau tien 
xhr.open('GET','https://supersimplebackend.dev/products/first');
xhr.send();