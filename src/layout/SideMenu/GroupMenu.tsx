import GroupMenuItem from '#/layout/SideMenu/GroupMenuItem';

const GroupMenu = () => {
    return (
        <div className='bg-base-300'>
            <div className='flex h-screen w-44 flex-col rounded-tl-2xl bg-base-100 py-5 align-middle md:w-56'>
                <nav className='flex flex-col gap-1 md:gap-2'>
                    <h3 className='m-3 text-lg md:text-xl'>✨ Project</h3>
                    <GroupMenuItem to={'/feed'} menuName={'feed'}>
                        피드
                    </GroupMenuItem>
                    <GroupMenuItem to={'/'} menuName={'kanban'}>
                        칸반보드
                    </GroupMenuItem>
                    <GroupMenuItem to={'/'} menuName={'calendar'}>
                        캘린더
                    </GroupMenuItem>
                </nav>
                <span className='divider' />
                <nav className='flex flex-col gap-1 md:gap-2'>
                    <h3 className='m-3 text-lg md:text-xl'>💬 Chat</h3>
                    <GroupMenuItem to={'/'} menuName={'kim'}>
                        김씨
                    </GroupMenuItem>
                    <GroupMenuItem to={'/'} menuName='park'>
                        박씨
                    </GroupMenuItem>
                    <GroupMenuItem to={'/'} menuName='lee'>
                        이씨
                    </GroupMenuItem>
                    <GroupMenuItem to={'/'} menuName='choi'>
                        최씨
                    </GroupMenuItem>
                </nav>
            </div>
        </div>
    );
};

export default GroupMenu;
