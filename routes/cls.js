const express =require('express');
const router= express.Router();
const Cls = require("../model/cls");



router.get('/', (req, res, next) => {

 Cls.find().then(
 	(cls)=>{res.status(200).json(cls); }
 	).catch(
 	(err)=>{res.status(200).json({err:err}); }
 	);

 	});


// router.post("/product", (req, res, next) => {
// 	console.log(req.body)
// Product.create({name:req.body.name
// 	,price:req.body.price}).then(
// (product)=> {console.log(product);
//  res.status(200).json({"message":"created"});}
// ).catch(
// (err)=> {console.log(err);
// res.status(200).json({"message":"err"});
// })
// });



// router.put("/product/:id", (req, res, next) => {

//  Product.update({ _id: req.params.id }, { $set: {name:"zaid bin junaid"} }).then(
//  (product)=>{
//  res.status(200).json({"message":"updated"});
//  }).catch(
// (err)=> {console.log(err);
// res.status(200).json({"message":"err"});
// })
// });



// router.get("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   Product.findById(id)
//     .exec()
//     .then(doc => {
//       console.log("From database", doc);
//       if (doc) {
//         res.status(200).json(doc);
//       } else {
//         res
//           .status(404)
//           .json({ message: "No valid entry found for provided ID" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });


router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});



module.exports = router;