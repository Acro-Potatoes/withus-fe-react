import { SquaresPlusIcon } from '@heroicons/react/24/outline';

import GroupItem from '#/layout/SideMenu/GroupItem';

const GroupList = () => {
    const groupList = [
        { groupName: 'A', id: '1' },
        { groupName: 'B', id: '2' },
        { groupName: 'C', id: '3' },
    ];

    return (
        <div className='flex h-screen flex-col items-center bg-base-300'>
            <div className='mt-3 flex grow flex-col gap-5 p-3'>
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
