const express = require('express');
const app = express();
const {products, people} = require('./data.js');

app.get('/', (req, res) => {
    // res.json([
    //     {
    //         name: "Min thet khaing",
    //         nickname: "MC",
    //         age: 22,
    //         isEmployed: "true",
    //         hobbies: [
    //             "Reading",
    //             "Writing",
    //             "Learning"
    //         ]
    //     },
    //     {
    //         name: "Aung Zay Phyo",
    //         nickname: "nyi lay",
    //         age: 21,
    //         isEmployed: "false",
    //         hobbies: ["Mobile Legend Bang Bang", "Playing", "Perverting"]
    //     }
    // ]);
    res.send("<h1>Home Page</h1><a href='/api/products' target='_blank'>Products</a>");
    res.status(500).json({error: "Json could not fetch api"});
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product, index) => {
        const {id, image, price} = product;
        return {id, image, price};
    });
    res.json(newProducts);
})

app.get('/api/products/:productId', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const {productId} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));
    if(!singleProduct){
        res.status(404).send("<h1>RESOURCE IS NOT FOUND!</h1>")
    }
    res.json(singleProduct);;
});
app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    const {productId, reviewId} = req.params;
    res.send(`${productId} ${reviewId}`)
});

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const {search, limit} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length < 1){
        // res.status(200).send("THERE IS NOT THAT MATCH WITH YOUR SEARCH");
        return res.status(200).json({success: true, data: []});
    }
    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log("running: http://localhost:5000");
})