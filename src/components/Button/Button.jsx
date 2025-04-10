import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CreateCx from '~/utils/cxHelper';
import styles from './Button.module.scss';

const cx = CreateCx(styles);

function Button({
    children,
    className,
    to,
    href,
    outline = false,
    small = false,
    disable = false,
    onClick,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    let Comp = 'button';
    if (to) {
        (props.to = to), (Comp = Link);
    } else if (href) {
        (props.href = href), (Comp = 'a');
    }

    const classes = cx('wrapper', {
        [className]: className,
        outline,
        small,
        disable,
    });

    return (
        <button className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;
