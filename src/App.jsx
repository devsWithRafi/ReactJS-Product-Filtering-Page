import ProductPage from './components/ProductPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct';
import Home from './pages/Home';
import ProductProvider from './context/ProductProvider';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            children: [
                { path: '', index: true, element: <ProductPage /> },
                { path: '/products/:id', element: <SingleProduct /> },
            ],
        },
    ]);

    return (
        <>
            <ProductProvider>
                <RouterProvider router={router} />
            </ProductProvider>
        </>
    );
};

export default App;
