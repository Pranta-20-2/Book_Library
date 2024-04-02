import { Link } from "react-router-dom";
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl md:px-12">
            <div className="hero-content flex flex-col md:flex-row-reverse">
                <img src={banner} className="rounded-lg max-w-sm " />
                <div>
                    <h1 className="text-[56px] font-bold mb-5">Books to freshen up your bookshelf</h1>
                    <Link to={'/books'}>
                        <button className=" text-xl font-bold px-7 py-4 rounded-lg bg-[#23BE0A] text-white">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;