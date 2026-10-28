import express from 'express';
import addBook from '../controller/addNewBook.js';
import handlePagination from '../controller/getBook.js';
import updateBookAvailbility from '../controller/updateBookStatus.js';


const bookRouter = express.Router();

bookRouter.post('/', addBook);

bookRouter.get('/:page/:limit', handlePagination);

bookRouter.patch('/:id', updateBookAvailbility);

export default bookRouter;


