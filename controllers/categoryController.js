const Category=require('../models/categoryModel');


const addCategory= async(req,res)=>{
try {

    const category_data= await Category.find();
    if (category_data.length>0) {

        let checking=false;
        for(let i=0;i<category_data.lenght;i++){
          if(category_data[i]['Category'].toLowerCase()===req.body.category.toLowerCase()){

            checking=true;
            break;
          }
        }

           if(checking==false){
            const category=new Category({
                category:req.body.category
            });
            
            const cat_data =await category.save();
            res.status(200).send({sucess:true,msg:"Category Data",data:cat_data});
          


           }else{
            res.status(200).send({sucess:true,msg:"This Category ("+req.body+category+") is already exist."});
                          
           }



        
    } else {

        const category=new Category({
            category:req.body.category
        });
        
        const cat_data =await category.save();
        res.status(200).send({sucess:true,msg:"Category Data",data:cat_data});
        
    }
    
    


} catch (error) {
    res.status(400).send({success:false,msg:error.message});
}


}

module.exports={
    addCategory
}