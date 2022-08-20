import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <nav>
                <ul>
                    {props.data.nav.map(item => <li key={item.link}><NavLink to={item.link}>{item.text}</NavLink></li>)}
                </ul>
            </nav>

        </>
    );
}

export default Header;
