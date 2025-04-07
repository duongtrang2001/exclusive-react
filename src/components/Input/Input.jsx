import PropTypes from 'prop-types';

import CreateCx from '~/utils/cxHelper';
import styles from './Input.module.scss';

const cx = CreateCx(styles);

function Input({ type, placeholder, bgColor = false, outline = false, className, ...props }) {
    const classes = cx('input', {
        [className]: className,
        bgColor,
        outline,
    });

    return <input className={classes} type={type} placeholder={placeholder} {...props} />;
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    bgColor: PropTypes.bool,
    outline: PropTypes.bool,
    className: PropTypes.string,
};

export default Input;
