"use client"
import { Container } from "@/components"
import { Button, Input } from "@/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";


type RegisterForm = {
    email: string
    nickName: string
    password: string
    fullName: string
    confirmPassword: string
}

const schema = yup.object({
    email: yup.string().email().required("Email обязательно"),
    nickName: yup.string().required("Никнейм обязателен"),
    password: yup.string().required("Пароль обязателен").min(6, "Минимум 6 символов"),
    fullName: yup.string().required("Имя обязательно"),
    confirmPassword: yup
        .string()
        .required("Подтвердите пароль")
        .oneOf([yup.ref("password")], "Пароли должны совпадать"),
}).required();

export const RegisterForm: FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<RegisterForm> = (data: RegisterForm) => {
        console.log(data)
    }

    return (
        <Container>
            <div className="flex justify-center mt-24">
                <div className="bg-primary rounded-lg p-10 w-full max-w-md ">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-2">
                            <label>Полное имя</label>
                            <Input 
                                type="text" 
                                placeholder="Введите ваше полное имя" 
                                variant="secondary" 
                                {...register("fullName")}
                            />
                            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Никнейм</label>
                            <Input 
                                type="text" 
                                placeholder="Введите ваш никнейм" 
                                variant="secondary" 
                                {...register("nickName")}
                            />
                            {errors.nickName && <p className="text-red-500">{errors.nickName.message}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Email</label>
                            <Input 
                                type="email" 
                                placeholder="Введите ваш email" 
                                variant="secondary" 
                                {...register("email")}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Пароль</label>
                            <Input 
                                type="password" 
                                placeholder="Введите ваш пароль" 
                                variant="secondary"
                                {...register("password")}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Подтвердите пароль</label>
                            <Input 
                                type="password" 
                                placeholder="Подтвердите ваш пароль" 
                                variant="secondary"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                        </div>
                        <Button variant="primary" className="rounded-lg" type="submit">Зарегистрироваться</Button>
                        <div className="text-center py-4 text-[#919EAB]">
                            Уже зарегистрированы?{" "}
                            <Link href="/login" className="text-indigo-500 hover:underline">
                                Войти
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}
