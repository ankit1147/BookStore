import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const postBook = async(req, res) => {
    try {
        const {name, price, category, img, title} = req.body();
        

    } catch(error) {
        console.log(error.message);
        res.status(500).json(error);
    }
}