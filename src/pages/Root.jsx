import { Outlet } from 'react-router-dom';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default RootLayout;
