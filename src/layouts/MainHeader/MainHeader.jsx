import { NavLink, Link } from 'react-router-dom';

import CreateCx from '~/utils/cxHelper';
import styles from './MainHeader.module.scss';
import { CartIcon, FavouriteIcon, Logo, SearchIcon } from '~/components/Icons';
import Input from '~/components/Input/Input';

const cx = CreateCx(styles);

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Contact', to: '/contact' },
    { label: 'About', to: '/about' },
    { label: 'Sign Up', to: '/signup' },
];

function MainHeader() {
    return (
        <div className={cx('container-width', 'container')}>
            <div className={cx('navigation')}>
                <Link className={cx('logo-link')} to="/">
                    <Logo />
                </Link>
                <nav>
                    <ul className={cx('list-item')}>
                        {navItems.map((item) => (
                            <li className={cx('item')} key={item.label}>
                                <NavLink
                                    className={({ isActive }) => cx('item-link', { active: isActive })}
                                    to={item.to}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={cx('group')}>
                <div className={cx('search')}>
                    <Input className={cx('search-input')} bgColor type="text" placeholder="What are you looking for?" />
                    <button className={cx('button')}>
                        <SearchIcon className={cx('icon-search')} />
                    </button>
                </div>
                <div className={cx('action')}>
                    <div className={cx('wrapper')}>
                        <FavouriteIcon />
                        <span className={cx('notification')}>4</span>
                    </div>
                    <div className={cx('wrapper')}>
                        <CartIcon />
                        <span className={cx('notification')}>8</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;
