import { HashtagIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import {
    useLayoutActions,
    useLayoutSelectMenuState,
} from '#/store/useLayoutStore';

interface GroupMenuItemProps {
    children: ReactNode;
    to: string;
    menuName: string;
}

const GroupMenuItem = ({ children, to, menuName }: GroupMenuItemProps) => {
    const selectedMenu = useLayoutSelectMenuState();
    const { setSelectedMenu } = useLayoutActions();
    return (
        <Link to={to}>
            <button
                onClick={() => setSelectedMenu(menuName)}
                className={`btn btn-ghost w-full justify-start text-base font-medium md:text-lg ${
                    selectedMenu === menuName && 'bg-neutral'
                }`}
            >
                <HashtagIcon className='size-4' />
                {children}
            </button>
        </Link>
    );
};

export default GroupMenuItem;
