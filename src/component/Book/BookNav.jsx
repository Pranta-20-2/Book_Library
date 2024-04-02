import { Link } from "react-router-dom";
const BookNav = () => {
    return (
        <div>
            <h2 className=" text-5xl text-center m-10">
                Initially You did not Select any Book. Please First Select Book fromm Here.
            </h2>
            <Link className="flex flex-col items-center" to={'/'}>
                <button className=" text-xl font-bold px-7 py-4 rounded-lg bg-[#23BE0A] text-white">Choose Book</button>

            </Link>
        </div>
    );
};

export default BookNav;