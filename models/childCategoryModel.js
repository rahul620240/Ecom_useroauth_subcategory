const mongoose=require("mongoose");

const childCategorySchema=mongoose.Schema({

     sub_category:{
          type:String,
          required:true

     },
     child_category:{
        type:String,
        required:true
     }
});

module.exports=mongoose.model("ChildCategory",childCategorySchema);