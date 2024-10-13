"use client"
import { Container } from "@/components"
import { Button, Input } from "@/ui"
import { yupResolver } from "@hookform/resolvers/yup"
import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"

type ForgetPasswordFormType = {
    email: string
}

const schema = yup.object({
    email: yup.string().email("Email введен некорректно").required("Email обязательно"),
}).required();

export const ForgetPasswordForm:FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ForgetPasswordFormType>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<ForgetPasswordFormType> = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <div className="flex justify-center items-center my-24">
                <div className="w-full max-w-md bg-primary rounded-md shadow-lg p-8">
                    <h1 className={`text-2xl sm:text-3xl font-semibold text-center text-white mb-6`}>
                        Забыли пароль
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-5">
                        <div>
                            <label className="block text-white">Email</label>
                            <Input
                                type="email"
                                placeholder="Введите ваш email"
                                variant="secondary"
                                className="w-full"
                                {...register("email")}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <Button type="submit" variant="primary" className="rounded-md">Отправить</Button>
                    </form>
                </div>
            </div>
        </Container>
    )
}
