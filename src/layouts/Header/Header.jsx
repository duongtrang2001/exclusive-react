import Line from '~/components/Line/Line';
import MainHeader from '../MainHeader/MainHeader';
import TopHeader from './TopHeader';

function Header() {
    return (
        <header>
            <TopHeader />
            <MainHeader />
            <Line black />
        </header>
    );
}

export default Header;
