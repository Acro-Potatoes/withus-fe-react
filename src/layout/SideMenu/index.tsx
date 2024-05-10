import { useState } from 'react';

import GroupList from '#/layout/SideMenu/GroupList';
import GroupMenu from '#/layout/SideMenu/GroupMenu';

const SideMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleClickMenuOpen = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <aside className='fixed z-10 mt-10 flex w-[300px]'>
            <GroupList handleClickMenuOpen={handleClickMenuOpen} />
            {isMenuOpen && <GroupMenu />}
        </aside>
    );
};

export default SideMenu;
