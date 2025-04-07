import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import RootLayout from './pages/Root.jsx';
import Error from './pages/Errror.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/about', element: <About /> },
            { path: '/signup', element: <SignUp /> },
            { path: '*', element: <Error /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
