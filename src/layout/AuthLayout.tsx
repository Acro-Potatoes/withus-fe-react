import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='mx-auto max-w-screen-sm py-10 md:py-20'>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
