const express=require("express");
const childcategory_route=express();

const bodyParser=require("body-parser");

childcategory_route.use(bodyParser.json());
childcategory_route.use(bodyParser.urlencoded({extended:true}));


 const auth=require("../middleware/auth");

const childcategory_controller=require("../controllers/childCategoryController");

childcategory_route.post('/add-child-category',childcategory_controller.create_childcategory);

module.exports=childcategory_route;