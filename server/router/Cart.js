import express from 'express';
import Cart from '../models/Cart.js';

//import { verifyToken, verifyTokenAndAuthorization, verifyTokenAdmin } from './VerifyToken.js';
const cartRoutes = express.Router();




// // CREATE CART

cartRoutes.post("/",  async (req, res) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   //UPDATE
//   cartRoutes.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//     try {
//       const updatedCart = await Cart.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );
//       res.status(200).json(updatedCart);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   //DELETE
//   cartRoutes.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//     try {
//       await Cart.findByIdAndDelete(req.params.id);
//       res.status(200).json("Cart has been deleted...");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   //GET USER CART
//   cartRoutes.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
//     try {
//       const cart = await Cart.findOne({ userId: req.params.userId });
//       res.status(200).json(cart);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   // //GET ALL Cart
  
//   cartRoutes.get("/", verifyTokenAdmin, async (req, res) => {
//     try {
//       const carts = await Cart.find();
//       res.status(200).json(carts);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// async function createProduct(req, res) {
//     try {
//         const newProduct = await Product.create({
//             title: req.body.title,
//             desc: req.body.desc,
//             img: req.body.img,
//             cat: req.body.cat,
//             price: req.body.price,
//         });

//         res.status(200).json({
//             status: 'success',
//             data: {
//                 product: newProduct,
//             },
//         });
//     } catch (err) {
//         console.log('Something went wrong creating a product', err.message);
//         res.status(420).json(err);
//     }
// }

//GET PRODUCT
// async function getProduct(req, res) {
//     try {
//         const product = await Product.findById(req.params.id);
//         res.status(200).json(product);
//         console.log(product);
//     } catch (err) {
//         console.log('Something went wrong fetching the product', err.message);
//         res.status(500).json(err);
//     }
// }

// // // GET ALL PRODUCTS

// // //TODO Add filter function

// async function getAllProducts(req, res) {
//     const qNew = req.query.new;
//     const qCatagory = req.query.category;
//     try {
//         let products;
//         if(qNew){
//             products = await Product.find().sort({createdAt: -1}).limit(1);
//         }else if(qCatagory){
//             products = await Product.find({catagories: {
//                 $in: [qCatagory]
//             }})
//         }else{
//             products = await Product.find();
//         }

//         res.status(200).json(products);
//     } catch (err) {
//         console.log('Something went wrong fetching all products', err.message);
//         res.status(500).json(err);
//     }
// }


// // Product routes to create

//cartRoutes.post('/', createProduct);

 //productRoutes.get('/:id', getProduct);

  //productRoutes.get('/', getAllProducts);

// Additional and optional for admin panel

// productRoutes.delete('/:id', deleteProducts);

 export default cartRoutes;
