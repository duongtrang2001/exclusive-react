import PropTypes from 'prop-types';

import CreateCx from '~/utils/cxHelper';
import styles from './Images.module.scss';
import Images from '~/assets/images/Images.jsx';

const cx = CreateCx(styles);

function Image({ src, alt, fallbackSrc = Images.noImage, className, ...props }) {
    const handleError = (e) => {
        (e.target.onerror = null), (e.target.src = fallbackSrc);
    };

    return (
        <img className={cx('image', className)} src={src || fallbackSrc} alt={alt} onerror={handleError} {...props} />
    );
}

Images.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    fallbackSrc: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
