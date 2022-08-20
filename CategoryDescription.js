import { useParams } from "react-router-dom";

function CategoryDescription() {
    let { catDes } = useParams();
    return (
        <div>
            <a href="/cat">Назад</a>
            <h1>Category: {catDes} </h1>
        </div>
    );
}
export default CategoryDescription;