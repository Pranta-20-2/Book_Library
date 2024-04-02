import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className=" max-w-screen-2xl w-[85%] mx-auto ">
            <div className="font-Work mt-8">
                <Header></Header>
            </div>
            <div className="font-Playfair">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;