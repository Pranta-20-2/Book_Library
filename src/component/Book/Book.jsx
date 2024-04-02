import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadValue, saveWishValue } from '../../utility/localstorage';
const Book = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const intId = parseInt(id)
    const book = books.find(book => book.id === intId)
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;
    const handleApplyRead = () => {
        const storedReadValue = localStorage.getItem('read-books');
        const exists = storedReadValue ? JSON.parse(storedReadValue).includes(id) : false;
        if (exists) {
            toast.error("Selected Book is already added to Read List", {
                theme: "colored"
              })
        } else {
            saveReadValue(id);
            toast.success("Book Added to Read List", {
                theme: "colored"
              })
        }
    };
    // Wish List Handle
    const handleApplyWish = () => {
        const storedReadValue = localStorage.getItem('read-books');
        const storedWishValue = localStorage.getItem('wish-books');
        const existsInRead = storedReadValue ? JSON.parse(storedReadValue).includes(id) : false;
        const existsInWish = storedWishValue ? JSON.parse(storedWishValue).includes(id) : false;
    
        if (existsInRead) {
            toast.error("Book is already added to Read List",{
                theme: "colored"
            });
        } else if (existsInWish) {
            toast.warn("Selected Book is already added to Wish List",{
                theme: "colored"
            });
        } else {
            saveWishValue(id);
            toast.success("Book Added to Wish List")
            
        }
    };
    
    

    return (
        <div>
            <h1 className=' text-4xl font-bold text-center m-10'>Book details of ID: {intId} </h1>
            <div className='  grid md:grid-cols-2 gap-10'>
                <div className=' md:h-[700px] flex flex-col items-center bg-[#F3F3F3] rounded-2xl shadow-md'>
                    <img className='h-full p-16' src={image} alt="" />
                </div>
                <div className='space-y-4' >
                    <h2 className='text-4xl font-bold'>{bookName}</h2>
                    <div className='font-Work'>
                        <h2 className='text-[16px] text-[#404040] font-semibold mb-3'>By: {author}</h2>
                        <p className='border-y-2 border-gray-300 py-3'>{category}</p>
                        <p className='mt-4 text-[16px] font-normal'><span className=' font-bold'>Review: </span> {review} </p>
                        <div className='mt-4 text-[16px] font-normal flex justify-start gap-5 items-center'><span className=' font-bold'>Tag</span>
                            <div className=" font-Work mt-6 grid grid-cols-4 gap-3 font-medium  text-[#23BE0A] text-wrap mb-3">

                                {
                                    tags.map((tag, index) =>
                                        <div className=" rounded-[30px] bg-green-100 px-2 py-2 text-center" key={index}>
                                            <span># </span>{tag}

                                        </div>
                                    )
                                }
                            </div>

                        </div>
                        <div className='solid-line my-4'></div>
                        <div className='flex justify-start items-center gap-20'>
                            <div className=' space-y-3'>
                                <p>Number of Pages:</p>
                                <p>Publisher:</p>
                                <p>Year of Publishing:</p>
                                <p>Rating:</p>
                            </div>
                            <div className=' font-semibold space-y-3'>
                                <p>{totalPages}</p>
                                <p>{publisher}</p>
                                <p>{yearOfPublishing}</p>
                                <p>{rating}</p>
                            </div>
                        </div>
                        <div className='mt-8 flex justify-start gap-8' >
                            <Link>
                                <button onClick={handleApplyRead} className=' text-black bg-none font-semibold px-7 py-3 border-2 border-gray-300 rounded-lg transition hover:scale-105'>Read</button>
                            </Link>
                            <Link>
                                <button onClick={handleApplyWish} className=' text-white bg-[#50B1C9] font-semibold px-7 py-3 border-2 border-gray-300 rounded-lg transition hover:scale-105'>Wishlist</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Book;