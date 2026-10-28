export default async function updateBookAvailbility(req, res){
    const { id} = req.query;
    const {availability} = req.body;
    const status = [true, false];

    try{
        if(!id){
            res.status(400).json({message : "invalid id"});
        }
        if(!status.includes(availability)){
            res.status(400).json({message : 'valid value : true or false'});
        }
        await Book.updateOne({_id : id}, { $set : {isAvailable : availability}});
        res.status(200).json({message : 'Book availability updated successfully'});
    }catch(error){
        res.status(400).json({message : `unable to update: ${error}`});
    }
    
}