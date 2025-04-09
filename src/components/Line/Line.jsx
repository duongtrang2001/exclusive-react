import PropTypes from 'prop-types';

import CreateCx from '~/utils/cxHelper';
import styles from './Line.module.scss';

const cx = CreateCx(styles);

function Line({ className, black = false, white = false }) {
    const classes = cx('line', {
        [className]: className,
        black,
        white,
    });
    return <div className={classes}></div>;
}

Line.propTypes = {
    className: PropTypes.string,
    black: PropTypes.bool,
    white: PropTypes.bool,
};

export default Line;
