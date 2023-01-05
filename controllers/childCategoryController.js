const ChildCategory=require("../models/childCategoryModel");

const create_childcategory = async(req,res)=>{

try {
    console.log("3.0")
  const childCategory=  new ChildCategory({
    sub_category:req.body.sub_category,
        child_category:req.body.child_category,
        

    });
    console.log("3.01");
    const child_cat_data=await childCategory.save();

    console.log("3.02");
    console.log("3 successfully added childcategory");
    

    // res.sendStatus(200).send({success:true,msg:"Sub-Category details",data:sub_cat_data });
    
} catch (error) {

     res.send(error)
//   console.log("not added child category");
}


}

module.exports={
    create_childcategory
}