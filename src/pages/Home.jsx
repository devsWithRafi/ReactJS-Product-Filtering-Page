import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <div>This is home page</div>
            <Outlet />
        </div>
    );
};

export default Home;
