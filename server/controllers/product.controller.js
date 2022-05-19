const Product = require("../models/product.model")

module.exports.test = (req, res) => {
    res.json("HELLO WORLD")
}


// CREATE
module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct)) // successful creation
        .catch(err => {
            // console.log(err)
            res.status(400).json(err)
        }) // unsuccessful creation
}

// READ
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.product_id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.status(400).json(err));
};

// UPDATE
module.exports.updateProduct = (req, res) => {
    // findOneAndUpdate takes three arguments, query, payload, boolean
    Product.findOneAndUpdate({ _id: req.params.product_id }, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err));
};

// DELETE

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.product_id })
        .then(result => res.json({ result }))
        .catch(err => res.status(400).json({ err }));
};