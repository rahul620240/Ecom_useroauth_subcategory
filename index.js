const express=require("express");
const app=express();

const mongoose=require ("mongoose");


mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/ECOM",{




});


//user routes
const user_routes=require("./routes/userRoute");


app.use('/api',user_routes);

//category routes
const category_routes=require("./routes/categoryRoute");
app.use('/api',category_routes);


//subcategory routes
const subcategory_route=require("./routes/subCategoryRoute");
app.use('/api',subcategory_route);



//childcategory routes
const childcategory_route=require("./routes/childCategoryRoute");
app.use('/api',childcategory_route);


app.listen(3000,function(){
console.log("serveris running on port 3000");

});