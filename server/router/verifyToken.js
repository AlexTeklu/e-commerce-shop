//  const jwt = require("jsonwebtoken");


// const verifyToken = (req, res, next) => {
//     const authHeader = req.header.token
//     if (authHeader){
//         // const token = authHeader.split(" ")[1]

//        jwt.verify(token, proccess.env.JWT_SEC,
//         (err, user) =>{
           
//             if(err) res.status(403).json("Token is not valid!");
//             req.user = user;
//             next();
//         });
//     }else{
//         return res.status(401).json("your are not auhtenticated");
//     }
// };

// const verifyTokenAndAuthorization = (req, res, next) =>{
//     verifyToken(req, res, ()=>{
//         if(req.user.id === req.params.id || req.user.isAdmin){
//         next()
//     }else {

//         res.status(403).json("your not allowed to do that!");
//     }
//     })
// }

// const verifyTokenAndAdmin= (req, res, next) =>{
//     verifyToken(req, res, ()=>{
//         if(req.user.isAdmin){
//         next()
//     }else{
//         res.status(403).json("your not allowed to do that!");
//     }
//     })
// }


// module.exports ={verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}

// export default { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }