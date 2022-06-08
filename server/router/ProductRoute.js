import express from 'express';
import Product from '../models/product.js';
const productRoutes = express.Router();

// CREATE PRODUCT

async function createProduct(req, res) {
    try {
        const newProduct = await Product.create({
            title: req.body.title,
            desc: req.body.desc,
            img: req.body.img,
            cat: req.body.cat,
            price: req.body.price,
        });

        res.status(200).json({
            status: 'success',
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        console.log('Something went wrong creating a product', err.message);
        res.status(420).json(err);
    }
}

//GET PRODUCT
async function getProduct(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
        console.log(product);
    } catch (err) {
        console.log('Something went wrong fetching the product', err.message);
        res.status(500).json(err);
    }
}

// // GET ALL PRODUCTS

// //TODO Add filter function

async function getAllProducts(req, res) {
    const qNew = req.query.new;
    const qCatagory = req.query.category;
    try {
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(1);
        }else if(qCatagory){
            products = await Product.find({catagories: {
                $in: [qCatagory]
            }})
        }else{
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        console.log('Something went wrong fetching all products', err.message);
        res.status(500).json(err);
    }
}


// // Product routes to create

 productRoutes.post('/', createProduct);

 productRoutes.get('/:id', getProduct);

  productRoutes.get('/', getAllProducts);

// Additional and optional for admin panel

// productRoutes.delete('/:id', deleteProducts);

export default productRoutes;
