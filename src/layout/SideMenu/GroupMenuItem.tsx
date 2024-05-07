import { HashtagIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const GroupMenuItem = ({
    children,
    to,
}: {
    children: ReactNode;
    to: string;
}) => {
    return (
        <Link to={to}>
            <button className='btn btn-ghost w-full justify-start text-lg font-medium'>
                <HashtagIcon className='size-4' />
                {children}
            </button>
        </Link>
    );
};

export default GroupMenuItem;
