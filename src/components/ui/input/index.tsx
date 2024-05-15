'use client';

import { FC } from 'react';
import clsx from 'clsx';
// import {
//     FieldErrors,
//     FieldValues,
//     UseFormRegister
// } from 'react-hook-form';


interface InputProps{
    label:          string;
    id:             string;
    type?:          string;
    placeholder?:   string;
    alt?:           string;
    subtitle?:      string;
    defaultValue?:  string;

    autofocus?:     boolean;
    required?:      boolean;
    disabled?:      boolean;
    readonly?:      boolean;
    pattern?:       string | RegExp | undefined;

    autocomplete?:  "on" | "off";
    onChange?: (e: any) => void;
    // register:       UseFormRegister<FieldValues>;
    // errors:         FieldErrors;

}
const Input:FC<InputProps> = ({
    label,      
    id,
    type,
    placeholder,
    pattern,
    alt,
    subtitle,
    autofocus,
    required,
    disabled,
    readonly,
    autocomplete,
    defaultValue,
    onChange,
    // register,
    // errors
}) => {

    return (
        <div className='px-12 py-4'>
            <label 
                className="
                    block
                    text-lg
                    font-medium
                    leading-6
                    text-tx-base
                "
                htmlFor={id}
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    // pattern={pattern}
                    alt={alt}
                    autoFocus={autofocus}
                    disabled={disabled}
                    readOnly={readonly}
                    autoComplete={autocomplete}
                    // {
                    //     ...register(id, { 
                    //         required,
                      
                    //     })
                    // }
                    onChange={onChange}
                    defaultValue={defaultValue}
                    className={clsx(`
                        text-tx-base
                        bg-bg-light
                        text-lg
                        form-input
                        block
                        w-full
                        rounded-md
                        border-0
                        py-1.5
                        px-2.5
                        shadow-sm
                        ring-1
                        ring-inset
                        ring-bg-10
                        placeholder:text-tx-base
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-green-light
                        focus:text-tx-lighter
                        sm:text-sm
                        sm:leading-6`,
                        // errors[id] && "focus:ring-red-base",
                        disabled && "opacity-50 cursor-default"
                    )}

                />
            </div>
            {subtitle && (
                <div
                    className="
                        text-sm 
                        font-thin 
                        text-tx-light
                        py-2
                    "
                >
                    {subtitle}
                </div>
            )}
        </div>
    )
}

export default Input;