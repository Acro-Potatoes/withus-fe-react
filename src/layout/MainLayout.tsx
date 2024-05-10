import { Outlet } from 'react-router-dom';

import SideMenu from '#/layout/SideMenu';

const MainLayout = () => {
    return (
        <div>
            <SideMenu />
            <div className='fixed z-10 flex h-10 w-screen items-center justify-between bg-base-300 px-2'>
                <h1 className='text-base font-semibold'>WithUS</h1>
            </div>
            <div className='h-10' />
            <div className='bg-neutral md:ml-[300px] md:h-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
