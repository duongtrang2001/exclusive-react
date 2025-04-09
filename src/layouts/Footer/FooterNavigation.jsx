import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreateCx from '~/utils/cxHelper';
import styles from './Footer.module.scss';

const cx = CreateCx(styles);

function FooterNavigation({ title, items, ...props }) {
    return (
        <div className={cx('container')} {...props}>
            <h3 className={cx('title')}>{title}</h3>
            <ul className={cx('list-item')}>
                {items.map((item, index) => (
                    <li className={cx('item')} key={index}>
                        {item.to ? (
                            <Link className={cx('link-item')} to={item.to}>
                                {item.content}
                            </Link>
                        ) : (
                            <p>{item.content}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

FooterNavigation.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
};

export default FooterNavigation;
