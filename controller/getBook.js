
import Book from '../model/book.js'
export default async function handlePagination(req, res) {

    try {

        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;

        const skip = (page - 1) * limit;
        const tasks = await Book.find().sort({createdAt : -1}).skip(skip).limit(limit);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({message : error.message})
    }

}