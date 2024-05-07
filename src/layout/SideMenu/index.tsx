import GroupList from '#/layout/SideMenu/GroupList';
import GroupMenu from '#/layout/SideMenu/GroupMenu';

const SideMenu = () => {
    return (
        <aside className='fixed mt-10 flex w-[300px]'>
            <GroupList />
            <GroupMenu />
        </aside>
    );
};

export default SideMenu;
