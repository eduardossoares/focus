import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
    classname: string,
    onClick?: () => void;
}

export default function Button({ children, classname, onClick }: ButtonProps) {
    return (
        <button className={`${classname} p-3 text-white font-medium rounded-sm
            duration-300 hover:scale-105`} onClick={onClick}>
            {children}
        </button>
    )
}