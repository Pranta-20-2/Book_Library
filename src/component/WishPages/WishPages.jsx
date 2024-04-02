import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishValue } from "../../utility/localstorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'green'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
};

const WishPages = () => {
    const books = useLoaderData();
    const [displayWish, setDisplayWish] = useState([]);

    useEffect(() => {
        const storedWishBookIds = getWishValue();
        if (books.length > 0) {
            const wishBooks = [];
            for (const id of storedWishBookIds) {
                const book = books.find(book => book.id == id)
                if (book) {
                    wishBooks.push(book)
                }
            }
            setDisplayWish(wishBooks);
        }
    }, [books]);

    return (
        <div className="w-full">
            <h2 className="text-center text-4xl font-semibold my-10">Wish Read Books: {displayWish.length}</h2>

            <div className="w-full overflow-x-auto flex flex-col items-center justify-center">
                <BarChart
                    width={500}
                    height={300}
                    data={displayWish}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {displayWish.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>

        </div>
    );
};

export default WishPages;
