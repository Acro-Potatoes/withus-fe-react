import { ListBulletIcon, SquaresPlusIcon } from '@heroicons/react/24/outline';
import { MobileView } from 'react-device-detect';

import GroupItem from '#/layout/SideMenu/GroupItem';

const GroupList = ({
    handleClickMenuOpen,
}: {
    handleClickMenuOpen: () => void;
}) => {
    const groupList = [
        { groupName: 'A', id: '1' },
        { groupName: 'B', id: '2' },
        { groupName: 'C', id: '3' },
    ];

    return (
        <div className='flex h-screen flex-col items-center bg-base-300'>
            <div className='mt-3 flex grow flex-col gap-5 p-3'>
                <MobileView>
                    <button
                        onClick={handleClickMenuOpen}
                        className='btn btn-square'
                    >
                        <ListBulletIcon />
                    </button>
                </MobileView>
                {groupList.map((item, index) => (
                    <GroupItem key={index} groupItem={item} />
                ))}
                <button className='btn btn-square'>
                    <SquaresPlusIcon />
                </button>
            </div>
        </div>
    );
};

export default GroupList;
