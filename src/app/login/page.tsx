import { Header } from "@/components/header";
import { LoginForm } from "@/modules/Login/components/LoginForm";

export default function LoginPage() {

    return(
        <>
        <Header isInputVisible={false} />
        <LoginForm />
        </>
    )
}