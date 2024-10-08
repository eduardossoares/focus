import { useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export interface InputLabelProps {
    isPassword?: boolean;
    useLabel: boolean;
    type: string;
    placeholder: string;
    label?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
    name: string;
    error?: string;
    rules?: RegisterOptions;
}

export default function InputLabel({ type, placeholder, label, useLabel, register, rules, error, name,
    isPassword
}: InputLabelProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handlePassword = () => {
        if (!isPasswordVisible) return setIsPasswordVisible(true);
        return setIsPasswordVisible(false);
    }

    return (
        <div>
            {
                !isPassword ? (
                    <div className="flex flex-col w-full">
                        {useLabel && (
                            <label className="font-medium text-zinc-500" htmlFor={name}>{label}:</label>
                        )}
                        <input id={name} className="bg-[#f5f5f5] placeholder:font-thin placeholder:text-zinc-400 p-3 outline-none
                        rounded-sm border border-zinc-200 border-opacity-50" type={type} placeholder={placeholder}
                            {...register(name, rules)} />
                        {error && <p className="text-red-600 mt-2">{error}</p>}
                    </div>
                )

                    :

                    (
                        <div className="flex flex-col w-full">
                            <label htmlFor="password" className="font-medium text-zinc-500">Senha:</label>
                            <div className="bg-[#f5f5f5] w-full
                                gap-x-4 px-3 py-2.5 outline-none
                                flex items-center rounded-sm border border-zinc-200 border-opacity-50">
                                <input type={isPasswordVisible ? "text" : "password"} className="w-full bg-[#f5f5f5] outline-none
                                 placeholder:font-thin placeholder:text-zinc-400" placeholder={placeholder} id={name}
                                    {...register(name, rules)} />
                                {isPasswordVisible ? (
                                    <IoEye size={28} className="text-zinc-400 cursor-pointer" onClick={handlePassword} />
                                ) : (
                                    <IoEyeOff size={28} className="text-zinc-400 cursor-pointer" onClick={handlePassword} />
                                )}
                            </div>
                            {error && <p className="text-red-600 mt-2">{error}</p>}
                        </div>
                    )
            }
        </div>
    )
}