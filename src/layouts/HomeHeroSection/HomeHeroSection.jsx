import CreateCx from '~/utils/cxHelper';
import styles from './HomeHeroSection.module.scss';
import CategorySidebar from '../CategorySidebar/CategorySidebar';
import MainSlider from '../MainSlider/MainSlider';

const cx = CreateCx(styles);

function HomeHeroSection() {
    return (
        <div className={cx('container')}>
            <CategorySidebar />
            <MainSlider />
        </div>
    );
}

export default HomeHeroSection;
