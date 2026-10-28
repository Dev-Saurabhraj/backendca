import Book from "../model/book.js";

export default async function addBook(req, res){
    const {title , author, category} = req.body
    if(!title.trim() && !author.trim() && !category.trim()) res.status(400).json({message : "all field are required"})

        try{

            const book = {title, author, category};
            await Book.create(book);
            res.status(200).json({message : 'book added succesfully'});
        } catch(error){
            console.log(error);
            res.status(400).json({message : error});
        }
}