// Importando Pagina
import { ContainerGrid } from "@/components/Container";

// Imagens
import IconInf1 from '@/assets/IconInf1.svg';
import IconInf2 from '@/assets/IconInf2.svg';
import IconInf3 from '@/assets/IconInf3.svg';
import Image from "next/image";

// Mapeando Infos
const ItemInfos = [
    { Image: IconInf1, Title: '18 módulos', Text: 'Trilha de design e gestão de proutos' },
    { Image: IconInf2, Title: 'Aulas online e ao vivo', Text: 'Terças e quintas às 19h' },
    { Image: IconInf3, Title: 'Projetos reais na prática', Text: 'Consilar o conhecimento' }
];

export function Infos() {
    return (
        <div className="bg-color-[#d9d9d9] relative pb-28">
            <div className="w-full absolute h-20 bg-color-[#FDFDFD] bottom-0 left-0 z-10"></div>
            <ContainerGrid className="flex flex-col gap-8 z-20 @laptop:flex-row">
                {ItemInfos.map((item, index) => (
                    <div key={index}
                        className="w-full bg-white p-8 flex flex-col items-center justify-center text-center gap-1 rounded-lg drop-shadow-md @laptop:items-start @laptop:justify-start"
                    >
                        <Image src={item.Image} alt={item.Title} className="mb-5" />
                        <h4 className="color-[#1C1C1F] font-semibold text-2xl">{item.Title}</h4>
                        <p>{item.Text}</p>
                    </div>
                ))}
            </ContainerGrid>
        </div>
    );
}
