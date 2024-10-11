import { FC } from "react";
import Image from "next/image"
import logo from "../../public/assets/logo.svg"
import { Container } from "./container";
import Link from "next/link";
import { Input } from "@/ui/input";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/ui/button";
import { FaRegUser } from "react-icons/fa";


export const Header: FC = () => {
    return (
        <Container>
            <header className="flex justify-between px-5 items-center pt-5">
                <Link href="/" className="cursor-pointer font-medium text-[25px]">
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="logo"  width={45} height={45}/> 
                        TURAMYZBA
                    </div>
                </Link>
                <div className="flex">
                    <Input placeholder="Поиск сожителя c помощью ИИ"  variant="primary" type="text" className="rounded-l-lg"/>
                    <Button variant="withIcon" className="rounded-r-lg"><IoIosSearch size={25} /></Button>
                </div>
                <div>
                    <Button variant="withIcon">
                        <Link href="/login">
                        <FaRegUser size={25} color="#33FF00" />
                        </Link>
                    </Button>
                </div>
            </header>
        </Container>
    )
}