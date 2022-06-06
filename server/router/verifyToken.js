 import jwt from 'jsonwebtoken';


const verifyToken = (req, res, next) =>{
    const authHeader = req.header.token
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (error, user) =>{
            if(error) res.status(403).json("Wrong Token!");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("your not authorized")
    }
};

const verifyTokenAndAuthorization = (req, res, next) =>{
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
        next();
    }else {

        res.status(403).json("your not allowed to do that!");
    }
    })
}



export default { verifyToken, verifyTokenAndAuthorization };

