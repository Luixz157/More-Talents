//Importando Nexts
import Image from "next/image";

//Images
import Logo from "@/assets/Logo.svg"; 
import Logo2 from "@/assets/Logo2.svg"; 
import ArrowUp from "@/assets/ArrowUp.svg"
import IconLinkedin from "@/assets/IconLinkedin.svg"
import IconInstagram from "@/assets/IconInstagram.svg"

//Paginas - Components
import {ContainerGrid} from '@/components/Container';

export function Header(){
    return(
        <div className="w-full h-36 border-b-2 border-b-white relative">
            <ContainerGrid className="flex flex-col w-full h-36 py-8 justify-between @laptop:flex-row @laptop:py-0">
            <div className="flex justify-center items-center">
                <Image src={Logo} alt="Logo" className="mr-8" />
                <Image src={Logo2} alt="Logo More" />
            </div>
            <div className="links flex w-full justify-between items-center @laptop:max-w-96">
                <ul className="flex w-full justify-between items-center ">
                    <li className="group flex w-full gap-4 cursor-pointer">
                        <span className="underline underline-offset-1 group-hover:opacity-70">More.design</span>
                        <Image src={ArrowUp} alt="Seta para cima" className="group-hover:rotate-45 transform transition-transform duration-300"/>
                    </li>
                    <li className="flex w-full gap-4 justify-end">
                        <Image src={IconLinkedin} alt="Linkedin" className="hover:scale-110 transition-all cursor-pointer" />
                        <Image src={IconInstagram} alt="Instagram" className="hover:scale-110 transition-all cursor-pointer"/>
                    </li>
                </ul>
            </div>
            </ContainerGrid>
            <div className="absolute left-28 -bottom-5 w-full max-w-40 bg-white rounded-full text-center py-2 px-4">
                <p className="text-[#F04264] font-medium">👉 ️ 100% FREE</p>
            </div>
        </div>
    )
}
