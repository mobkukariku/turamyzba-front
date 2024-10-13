"use client"
import { Container } from "@/components";
import { Button, Input } from "@/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";


type LoginInputs = {
    email: string,
    password: string
}

const schema = yup.object({
    email: yup.string().email().required("Email обязательно"),
    password: yup.string().required("Пароль обязателен").min(6, "Минимум 6 символов"),
}).required();


export const LoginForm:FC = () => {

    

    const{register, handleSubmit, formState: {errors}} = useForm<LoginInputs>({
        resolver: yupResolver(schema),
    });



    const onSubmit:SubmitHandler<LoginInputs> = (data: LoginInputs) => {
        console.log(data)
    }

    return(
        <Container>
            <div className="flex justify-center mt-24">
                <div className="bg-primary rounded-lg p-10 w-full max-w-md ">
                    <h1 className={`text-2xl sm:text-3xl font-semibold text-center text-white mb-6`}>
                        Войти
                    </h1>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} >
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
                        <Button variant="primary" className="rounded-lg" type="submit" >Войти</Button>
                        <div className="text-center text-gray-600">
                            <Link
                                href="/forgot-password"
                                className="text-indigo-500 hover:underline"
                            >
                                Забыли пароль?
                            </Link>
                        </div>
                        <div className="text-center py-4 text-[#919EAB]">
                            Нет аккаунта?{" "}
                            <Link href="/register" className="text-indigo-500 hover:underline">
                                Зарегистрируйтесь сейчас
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}