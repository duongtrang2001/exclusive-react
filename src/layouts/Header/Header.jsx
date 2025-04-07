import Line from '~/components/Line/Line';
import MainHeader from '../MainHeader/MainHeader';
import TopHeader from './TopHeader';

function Header() {
    return (
        <header>
            <TopHeader />
            <MainHeader />
            <Line />
        </header>
    );
}

export default Header;
