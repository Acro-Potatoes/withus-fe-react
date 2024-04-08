import { ComponentProps } from 'react';

const Button = ({ children, className, ...rest }: ComponentProps<'button'>) => {
    return (
        <button
            className={`btn btn-neutral w-full text-base font-medium text-white md:text-lg ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
