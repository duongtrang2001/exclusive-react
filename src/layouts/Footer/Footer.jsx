import CreateCx from '~/utils/cxHelper';
import styles from './Footer.module.scss';

const cx = CreateCx(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('group')}></div>
        </footer>
    );
}

export default Footer;
