import PropTypes from 'prop-types';

import CreateCx from '~/utils/cxHelper';
import styles from './Wrapper.module.scss';

const cx = CreateCx(styles);

function Wrapper({ className, children }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Wrapper;
