import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadValue, getWishValue } from "../../utility/localstorage";
import DetailsReadBook from "./DetailsReadBook";
import Tabs from "./Tabs";
import DetailsWishListBook from "./DetailsWishListBook";


const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);
    const [displayRead, setDisplayRead] = useState([]);
    const [displayWish, setDisplayWish] = useState([]);
    const [tabIndex, setIndex] = useState(0);

    const handleSortByRating = () => {
        const sortedRead = readBooks.slice().sort((a, b) => a.rating - b.rating);

        const sortedWishList = wishListBooks.slice().sort((a, b) => a.rating - b.rating);
        setDisplayRead(sortedRead);
        setDisplayWish(sortedWishList);
    };

    const books = useLoaderData();

    useEffect(() => {
        const storedReadBookIds = getReadValue();
        const storedWishListBookIds = getWishValue();

        if (books.length > 0) {
            const readBooksArray = [];
            const wishListBooksArray = [];
            for (const id of storedReadBookIds) {
                const book = books.find(book => book.id == id)
                if (book) {
                    readBooksArray.push(book);
                }
            }
            for (const id of storedWishListBookIds) {
                const book = books.find(book => book.id == id)
                if (book) {
                    wishListBooksArray.push(book);
                }
            }
            setReadBooks(readBooksArray);
            setWishListBooks(wishListBooksArray);
            setDisplayRead(readBooksArray);
            setDisplayWish(wishListBooksArray);
        }
    }, [books]);

    return (
        <div>
            <h2 className="text-4xl font-semibold text-center m-5">Listed Books</h2>
            <div className="flex flex-col justify-center items-center mb-10">
                <details className="dropdown">
                    <summary className="m-1 btn">Open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={handleSortByRating}>Sort by Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publish Year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div>
                    <Tabs tabIndex={tabIndex} setIndex={setIndex}></Tabs>
                </div>
                <div className="container grid justify-center grid-cols-1 gap-6 mt-10 mb-[100px]">
                    {
                        tabIndex === 0 ?
                            displayRead.map(book => <DetailsReadBook key={book.id} book={book}></DetailsReadBook>) :
                            displayWish.map(book => <DetailsWishListBook key={book.id} wish={book}></DetailsWishListBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
