import CreateCx from '~/utils/cxHelper';
import styles from './Line.module.scss';

const cx = CreateCx(styles);

function Line() {
    return <div className={cx('line')}></div>;
}

export default Line;
