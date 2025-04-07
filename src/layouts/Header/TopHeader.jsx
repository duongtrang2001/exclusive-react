import { Link } from 'react-router-dom';

import CreateCx from '~/utils/cxHelper';
import styles from './Header.module.scss';
import { DropdownIcon } from '~/components/Icons.jsx';

const cx = CreateCx(styles);

function TopHeader() {
    return (
        <div className={cx('top-header')}>
            <div className={cx('container-width', 'wrapper')}>
                <span className={cx('text')}>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link to="/" className={cx('text-link')}>
                        ShopNow
                    </Link>
                </span>
                <span className={cx('language')}>
                    English <DropdownIcon className={cx('icon')} />
                </span>
            </div>
        </div>
    );
}

export default TopHeader;
