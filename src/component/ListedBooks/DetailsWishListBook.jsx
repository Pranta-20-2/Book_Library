import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const DetailsWishListBook = ({wish}) => {
    const { id, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = wish
    return (
        <div>
            <div className='grid md:grid-cols-5 gap-10 border-2 border-gray-200 p-5 shadow-lg rounded-2xl' >
                <div className=" h-[250px]  flex flex-col items-center justify-center p-5 bg-[#F3F3F3] md:col-span-1 rounded-2xl">
                    <img className="h-full" src={image} alt="" />
                </div>
                <div className='space-y-4 md:col-span-4' >
                    <h2 className='text-4xl font-bold'>{bookName}</h2>
                    <div className='font-Work'>
                        <h2 className='text-[16px] text-[#404040] font-semibold'>By: {author}</h2>
                        <div className="flex flex-col items-start justify-center">
                            <div className='text-[16px] font-normal md:flex justify-start gap-5 items-center'>
                                <div>
                                    <span className=' font-bold'>Tag</span>
                                </div>
                                <div className=" font-Work mt-6 grid grid-cols-3 gap-3 font-medium  text-[#23BE0A] text-wrap mb-3">

                                    {
                                        tags.map((tag, index) =>
                                            <div className=" rounded-[30px] bg-green-100 px-2 py-2 text-center" key={index}>
                                                <span># </span>{tag}

                                            </div>
                                        )
                                    }
                                </div>
                                <div >
                                    <p className="flex items-center gap-2 "><IoLocationOutline></IoLocationOutline> Year of Publishing: {yearOfPublishing}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex justify-start items-center gap-10">
                            <div >
                                <p className="flex items-center gap-2 "><GoPeople></GoPeople> Publisher: {publisher}</p>
                            </div>
                            <div>
                                <p className="flex items-center gap-2 "><MdOutlineContactPage></MdOutlineContactPage> Page {totalPages}</p>
                            </div>
                        </div>
                        <div className="solid-line mt-2 mb-5"></div>
                        <div className="flex justify-start gap-4">
                            <div className=" rounded-[30px] bg-blue-100 px-4 py-2 text-center text-[#328EFF]">
                                Category: {category}
                            </div>
                            <div className=" rounded-[30px] bg-orange-100 px-4 py-2 text-center text-[#FFAC33]">
                                Rating: {rating}
                            </div>
                            <Link to={`/book/${id}`} 
                            className=" font-medium rounded-[30px] bg-[#23BE0A] px-5 py-2 text-center text-white">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsWishListBook;