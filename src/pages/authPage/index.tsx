import { useState, useEffect } from "react";

import focusLogo from "../../assets/focus-logo.png"
import InputLabel from "../../components/InputLabel";
import Button from "../../components/Button";

import { FaInstagram } from "react-icons/fa";

import useAuthService from "../../services/authService";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// Validação com Zod e React-Hook-Form
const schema = z.object({
    email: z.string().email("Insira um email válido."),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres.").nonempty("O campo senha é obrigatório.")
})
type FormData = z.infer<typeof schema>;

export default function AuthPage() {
    const [isLoging, setIsLoging] = useState(true);
    const { signOutUser, registerUser, signInUser } = useAuthService();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    useEffect(() => {
        const handleLogout = () => {
            signOutUser();
        }
        handleLogout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAcess = () => {
        if (!isLoging) return setIsLoging(true);
        return setIsLoging(false);
    }

    const onSubmit = async (data: FormData) => {
        if (isLoging) {
            signInUser(data.email, data.password);
            return
        }

        registerUser(data.email, data.password);
    }

    return (
        <div className="flex h-screen w-screen">
            <div className="bg-acess-image xl:w-[63%] bg-no-repeat"></div>
            <div className="flex-1 px-8 flex items-center justify-center flex-col">
                <div className="flex flex-col items-center gap-y-12 w-full sm:w-[80%] md:w-[60%]">

                    <div className="flex items-center flex-col gap-y-2">
                        <img className="w-20" src={focusLogo} alt="Focus" />
                        <span className="text-zinc-400 font-light">Organize suas tarefas conosco!</span>
                    </div>


                    <div className="flex flex-col items-center text-md font-light">
                        <p className="text-zinc-400">Seja bem vindo e</p>
                        {isLoging ? (
                            <p className="text-zinc-400">Faça seu <span className="font-medium">Login!</span></p>
                        ) : (
                            <p className="text-zinc-400">Efetue seu <span className="font-medium">Cadastro!</span></p>
                        )}
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-y-4">
                        <InputLabel register={register} error={errors.email?.message}
                            type="email" label="Email" placeholder="Ex: usuario@gmail.com"
                            useLabel={true} name="email" />

                        <InputLabel register={register} error={errors.password?.message}
                            type="password" label="Senha" placeholder="Digite sua senha..."
                            useLabel={true} name="password" isPassword={true} />

                        <Button classname="bg-blue-500 hover:bg-blue-600">
                            {isLoging ? 'Entrar' : 'Registrar'}
                        </Button>
                    </form>
                    {isLoging ? (
                        <p className="text-zinc-400">
                            Não possui uma conta?
                            <span className="text-zinc-500 hover:text-zinc-700 duration-300 font-semibold cursor-pointer"
                                onClick={handleAcess}>
                                {" "}Registre-se agora!
                            </span>
                        </p>
                    ) : (
                        <p className="text-zinc-400">
                            Já possui uma conta?
                            <span className="text-zinc-500 hover:text-zinc-700 duration-300 font-semibold cursor-pointer"
                                onClick={handleAcess}>
                                {" "}Faça login agora!
                            </span>
                        </p>
                    )}


                    <div className="flex items-center gap-x-1 text-pink-700
                    cursor-pointer
                    font-medium">
                        <FaInstagram />
                        <span className="text-zinc-500">Siga-nos nas redes sociais!</span>
                    </div>
                </div>
            </div>
        </div >
    )
}