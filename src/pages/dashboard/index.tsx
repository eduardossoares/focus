import { useState } from "react";

import CheckboxLabel from "../../components/CheckboxLabel";
import Modal from "../../components/Modal";

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import focusLogo from "../../assets/focus-logo-white.png"
import Button from "../../components/Button";
import useAuthService from "../../services/authService";

export default function Dashboard() {
    const { signOutUser } = useAuthService();

    const [isAsideOpen, setIsAsideOpen] = useState(false);
    const [isRegisterTaskModalOpen, setIsRegisterTaskModalOpen] = useState(false);
    const [isFindUserModalOpen, setIsFindUserModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const [checkbox, setCheckbox] = useState({
        checkbox1: true,
        checkbox2: false,
        checkbox3: false
    });

    const handleCheckboxChange = (id: string) => {
        setCheckbox(() => {
            return {
                checkbox1: id === 'all',
                checkbox2: id === 'completeds',
                checkbox3: id === 'missings',
            };
        });
    };

    const handleAside = () => {
        if (isAsideOpen) return setIsAsideOpen(false);
        return setIsAsideOpen(true);
    }

    const handleSignOut = () => {
        signOutUser();
    }

    const handleRegisterTaskModal = () => {
        if (!isRegisterTaskModalOpen) setIsRegisterTaskModalOpen(true);
        if (isRegisterTaskModalOpen) setIsRegisterTaskModalOpen(false);
    }

    const handleFindUserModal = () => {
        if (!isFindUserModalOpen) setIsFindUserModalOpen(true);
        if (isFindUserModalOpen) setIsFindUserModalOpen(false);
    }

    const handleUpdateTaskModal = () => {
        if (!isUpdateModalOpen) setIsUpdateModalOpen(true);
        if (isUpdateModalOpen) setIsUpdateModalOpen(false);
    }

    return (
        <div className="bg-zinc-950 h-screen relative flex sm:px-0">

            {isRegisterTaskModalOpen && (
                <Modal
                    title="Cadastrar Tarefa"
                    placeholder="Ex: Ir a academia"
                    button="Cadastrar"
                    onClose={handleRegisterTaskModal}
                />
            )}

            {isFindUserModalOpen && (
                <Modal
                    title="Procurar Usuário"
                    placeholder="Digite o email do usuário..."
                    button="Procurar"
                    onClose={handleFindUserModal}
                />
            )}

            {isUpdateModalOpen && (
                <Modal
                    title="Editar Tarefa"
                    placeholder="Digite a nova tarefa..."
                    button="Editar"
                    onClose={handleUpdateTaskModal}
                />
            )}

            <IoMdMenu color="white" className="absolute sm:hidden left-4 top-4" size={42} onClick={handleAside} />
            <aside className={`z-10 h-screen sm:w-[30%] xl:w-[20%] bg-zinc-900 px-4 flex flex-col items-center
            py-16 justify-between border-r border-zinc-700 ${isAsideOpen ?
                    "absolute w-full" : "hidden sm:flex"
                }`}>
                <IoMdClose size={30} color="white" className="absolute right-6 top-6 cursor-pointer sm:hidden" onClick={handleAside} />
                <div className="flex flex-col items-center gap-y-8">
                    <img src={focusLogo} className="w-20" alt="Focus" />
                    <p className="text-xl text-zinc-500">Filtrar Tarefas</p>
                    <div className="space-y-1">
                        <CheckboxLabel id="all" label="Todas" isChecked={checkbox.checkbox1} onChange={handleCheckboxChange} />
                        <CheckboxLabel id="completeds" label="Concluídas" isChecked={checkbox.checkbox2} onChange={handleCheckboxChange} />
                        <CheckboxLabel id="missings" label="Pendentes" isChecked={checkbox.checkbox3} onChange={handleCheckboxChange} />
                    </div>
                </div>
                <Button classname="bg-gradient-to-r from-[#E0006F] to-[#19AEEE]"
                    onClick={handleFindUserModal}>
                    Encontrar Usuário
                </Button>
            </aside>
            <div className="absolute right-4 top-6 text-white flex items-center gap-x-2
            cursor-pointer">
                <span className="text-lg hidden sm:block">Sair</span>
                <GoSignOut className="sm:text-2xl text-3xl" onClick={handleSignOut} />
            </div>
            <div className="flex w-full justify-center mt-24">
                <div className="space-y-16 w-64 sm:w-auto">
                    <div className="bg-zinc-800 h-14 flex items-center px-2 py-2 rounded-md border border-zinc-600">
                        <IoIosSearch size={38} color="white" className="px-2 hidden sm:block" />
                        <input className="bg-zinc-800 outline-none w-[70%] sm:w-auto sm:px-4 text-white placeholder-zinc-600" type="text"
                            placeholder="Procure sua tarefa..." />
                        <button className="bg-zinc-600 flex-1 text-white h-full sm:px-4 text-sm rounded-md">Buscar</button>
                    </div>

                    <div className="space-y-4">
                        <Button classname="bg-gradient-to-r from-[#E0006F] to-[#19AEEE] w-full"
                            onClick={handleRegisterTaskModal} >
                            Cadastrar Nova Tarefa
                        </Button>
                        <div className="flex items-center bg-zinc-800 justify-between
                        px-4 py-4 rounded-sm border border-zinc-600">
                            <span className="text-zinc-300">Ir a academia</span>
                            <div className="flex text-zinc-500 gap-x-3">
                                <FaCheck className="cursor-pointer" />
                                <FaRegEdit className="cursor-pointer" onClick={handleUpdateTaskModal} />
                                <FaRegTrashAlt className="cursor-pointer" />
                            </div>
                        </div>
                        <div className="flex items-center bg-zinc-800 justify-between
                        px-4 py-4 rounded-sm border border-green-700">
                            <s className="text-zinc-300">Estudar Next.js</s>
                            <div className="flex text-zinc-500 gap-x-3">
                                <FaCheck className="text-green-700 cursor-pointer" />
                                <FaRegEdit className="cursor-pointer" onClick={handleUpdateTaskModal} />
                                <FaRegTrashAlt className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
