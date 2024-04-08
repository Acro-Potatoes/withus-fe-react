import { ComponentProps, ReactNode } from 'react';

interface InputProps extends ComponentProps<'input'> {
    forwardIcon?: ReactNode;
}

const Input = ({ className, forwardIcon, ...rest }: InputProps) => {
    return (
        <label
            className={`input border-stone-300 flex items-center gap-2 w-full ${className}`}
        >
            {forwardIcon}
            <input className={'placeholder:text-stone-500 grow'} {...rest} />
        </label>
    );
};

export default Input;
