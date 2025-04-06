import { Outlet } from 'react-router-dom';
import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';

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
