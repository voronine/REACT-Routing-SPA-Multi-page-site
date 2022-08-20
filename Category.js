import { useLocation } from 'react-router-dom';


function Category(props) {
    let url = useLocation();
    console.log(url);
    return (
        <>
            <ul>
                {props.data.nav2.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>)}


                {/* <li><a href={`${url.pathname}/notebook`}>Ноутбуки</a></li>
                <li><a href={`${url.pathname}/monitor`}>Мониторы</a></li>
                <li><a href={`${url.pathname}/cellphone`}>Мобильные телефоны</a></li> */}
            </ul>
        </>
    );
}

export default Category;
