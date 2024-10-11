import { Container } from "@/components/container";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { FC } from "react";

export const LoginForm:FC = () => {

    return(
        <Container>
            <div>
            <form className="flex flex-col gap-2">
                <label>Email</label>
                <Input type="email" placeholder="Введите ваш email" variant="secondary" />
                <label>Password</label>
                <Input type="password" placeholder="Введите ваш пароль" variant="secondary"></Input>
                <Button variant="primary" className="rounded-lg" >Войти</Button>
            </form>
            </div>
        </Container>
    )
}