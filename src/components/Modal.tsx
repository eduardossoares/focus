import { FormEvent, useState } from "react";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    title: string;
    placeholder: string;
    button: string;
    onClose: () => void;
    isAddTaskModal?: boolean;
}

export default function Modal({ title, placeholder, button, onClose }: ModalProps) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputValue === "") return;
        onClose();  // Fecha o modal ao submeter o formulário
    }

    return (
        <div className="absolute flex w-screen h-screen bg-black bg-opacity-70 items-center justify-center z-50">
            <form onSubmit={handleSubmit} className="w-[468px] h-[234px] bg-white flex flex-col px-8 justify-center space-y-4 relative">
                <IoMdClose size={30} color="black" className="absolute cursor-pointer top-4 right-4" onClick={onClose} />
                <div className="w-full space-y-2">
                    <p className="text-lg">{title}</p>
                    <input type="text" className="bg-zinc-200 px-4 py-2 rounded-sm border border-zinc-300 outline-none w-full"
                        value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder={placeholder} />
                </div>
                <Button classname="bg-blue-500">{button}</Button>
            </form>
        </div>
    );
}
