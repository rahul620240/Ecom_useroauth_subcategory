const SubCategory=require("../models/subCategoryModel");

const create_subcategory = async(req,res)=>{

try {
  const subCategory=  new SubCategory({
        category_id:req.body.category_id,
        sub_category:req.body.sub_category

    });

    const sub_cat_data=await subCategory.save();
    console.log("1 successfully added subcategory");
    

    // res.sendStatus(200).send({success:true,msg:"Sub-Category details",data:sub_cat_data });
    
} catch (error) {

    // res.sendStatus(400).send({success:false,msg:error.message});
  console.log("2");
}


}

module.exports={
    create_subcategory
}