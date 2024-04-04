const fetchProduct = async () => {
    let res = await fetch('https://course-api.com/javascript-store-products');
    console.log(res);
    let data = await res.json();
    console.log(data);
}

fetchProduct();