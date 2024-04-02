import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    const books = useLoaderData();
    return (
        <div>
            <div className=" mb-20">
                <Banner></Banner>
            </div>
            <div>
                <h2 className=" text-4xl font-bold text-center mb-16">Books</h2>
                <div className="grid md:grid-cols-3 gap-5 mb-40" >
                    {
                        books.map(book => <Books key={book.id} book={book}></Books>)
                    }
                </div>
                <div className="solid-line">

                </div>
            </div>
        </div>
    );
};

export default Home;