import { useState } from 'react';

import GroupMenuItem from '#/layout/SideMenu/GroupMenuItem';

const GroupMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    return (
        <div className='bg-base-300'>
            <div className='flex h-screen w-56 flex-col rounded-tl-2xl bg-base-100 py-5 align-middle'>
                <nav className='flex flex-col gap-2'>
                    <h3 className='m-3 text-xl'>✨ Project</h3>
                    <GroupMenuItem to={'/feed'}>피드</GroupMenuItem>
                    <GroupMenuItem to={'/'}>칸반보드</GroupMenuItem>
                    <GroupMenuItem to={'/'}>캘린더</GroupMenuItem>
                    <GroupMenuItem to={'/'}>뭐시기</GroupMenuItem>
                </nav>
                <span className='divider' />
                <nav className='flex flex-col gap-2'>
                    <h3 className='m-3 text-xl'>💬 Chat</h3>
                    <GroupMenuItem to={'/'}>김씨</GroupMenuItem>
                    <GroupMenuItem to={'/'}>박씨</GroupMenuItem>
                    <GroupMenuItem to={'/'}>이씨</GroupMenuItem>
                    <GroupMenuItem to={'/'}>최씨</GroupMenuItem>
                </nav>
            </div>
        </div>
    );
};

export default GroupMenu;
