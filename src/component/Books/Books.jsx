import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Books = ({ book }) => {
    const { id, image, bookName, tags, author, category, rating } = book
    return (
        <Link to={`/book/${id}`}>
            <div className="p-4 border-2 rounded-2xl shadow-md h-[500px] text-black transition hover:scale-105 hover:border-secondary">
                <div className=" flex flex-col items-center p-5 bg-[#F3F3F3] rounded-2xl">
                    <img src={image} alt="" className="object-cover object-center w-[134px] h-[170px] rounded-md " />
                </div>
                <div className=" font-Work mt-6 grid grid-cols-3 gap-3 font-medium  text-[#23BE0A] text-wrap mb-3">
                    {
                        tags.map((tag, index) =>
                            <div className=" rounded-[30px] bg-green-100 px-2 py-2 text-center" key={index}>
                                {tag}
                            </div>
                        )
                    }
                </div>
                <div className="space-y-3 bg-white">
                    <h2 className="text-[24px] font-bold tracking-wide">{bookName}</h2>
                    <p className="font-Work text-[16px] text-[#404040] font-semibold">By: {author} </p>
                    <div className="dashed-line "></div>
                    <div className="font-Work text-[16px] font-medium flex justify-between">
                        <div>
                            {category}
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            {rating}
                            <FaRegStar ></FaRegStar>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Books;