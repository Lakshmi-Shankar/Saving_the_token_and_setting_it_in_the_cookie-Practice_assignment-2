const jwt = require("jsonwebtoken");

payload = {
  id: 1,
  userName: "S.Lakshmi Shankar"
};
SECRET_KEY = "luckyCat"

const encrypt = (payload, secret) => {
  // your code here and return token
  const token = jwt.sign(payload,secret,{expiresIn: "1h"});
  console.log(token)
  return token;
};

// const verify = (token, secret,req, res, next) => {
//   try{
//     const decode = jwt.verify(token, secret);
//     // req.user = decode;
//     // next();
//   }
//   catch(err){
//     console.log(err.message)
//     console.log("Token expired or invalid token")
//   }
// }

encrypt(payload, SECRET_KEY);

// verify(token, SECRET_KEY)

module.exports = encrypt;
