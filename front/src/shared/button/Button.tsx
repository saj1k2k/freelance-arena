import React, {FC, ReactElement} from 'react';
import {IButtonProps} from "../shared.interface.ts";

const Button: FC<IButtonProps> = (props): ReactElement => {
    const {id, label, className, disabled, role, type, testId, onClick} = props

    return (
        <button
            data-testid={testId}
            id={id}
            type={type}
            className={className}
            role={role}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;