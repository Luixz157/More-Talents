'use client'

import Image from 'next/image';

//Importando Pag
import {ContainerGrid} from '@/components/Container';

//Importando Images
import Rede from '@/assets/IconRede.svg'
import Marisa from '@/assets/IconMarisa.svg'
import Smiles from '@/assets/IconSmiles.svg'
import Itau from '@/assets/IconItau.svg'

import ImageHome1 from '@/assets/HomeImage1.png'
import ImageHome2 from '@/assets/HomeImage2.png'

import Pessoas from '@/assets/Pessoas.png'
import RedEstrela from '@/assets/RedEstrela.svg'
import IconStars from '@/assets/IconStar.svg'

//Importando o Swiper
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

export function Homing() {
    return(
        <ContainerGrid className="flex flex-col justify-between mt-16 pb-16 @laptop:flex-row">
            <div className='w-full max-w-full mb-8 @laptop:max-w-[50%] @laptop:mb-0'>
                <div className='relative text-center w-full max-w-full @laptop:max-w-xl @laptop:text-left'>
                    <h1 className='relative text-6xl color-[#1c1c1f] font-semibold z-20'>Curso Completo em design de produto digital</h1>
                    <div className='absolute h-2 w-full bg-yellow-400 z-10 @laptop:max-w-[420px] @laptop:bottom-2 @laptop:left-0'></div>
                    <Image src={IconStars} alt='Estrela' className='absolute top-0 right-0' />
                </div>
                <p className='w-full max-w-full text-center text-lg color-[#606272] my-10 @:laptop:max-w-[550px] @laptop:text-left'>
                    O programa Môre Educação irá trazer novos conhecimentos através de aulas teóricas e práticas focado no processo de <span className='font-semibold color-[#606272]'>Design Centrado no Usuário</span>
                </p>
                <div className='w-full flex justify-between items-center bg-white p-3 rounded-full @laptop:max-w-lg '>
                    <input placeholder='Insira seu e-mail' className='pl-5 w-full'/>
                    <button className='w-full bg-black text-white px-6 py-5 rounded-full hover:bg-[#000000]transition-all'>Realizar pré-cadastro</button>
                </div>
                <div className='flex justify-around my-11 @laptop:gap-8 @laptop:justify-between'>
                    <Image src={Rede} alt='Rede'/>
                    <Image src={Marisa} alt='Marisa'/>
                    <Image src={Smiles} alt='Smiles'/>
                    <Image src={Itau} alt='Itau'/>
                </div>
                <ul className='w-full flex items-center justify-center @laptop:gap-6 @laptop:items-start @laptop:justify-start'>
                    <li>
                        <Image src={Pessoas}/>
                    </li>
                    <li className='flex items-center justify-center'>
                        <Image src={RedEstrela} className='mr-3'/>
                        <p className='color-[#606272]'><strong>4.9</strong>(review)</p>
                    </li>
                </ul>
            </div>
            <div className='w-full h-full max-w-[100%] overflow-hidden @laptop:max-w-[50%]'>
            <Swiper
                slidesPerView={1}
                speed={800}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Navigation, Autoplay]}
                className='bg-Bg-Home bg-no-repeat bg-right overflow-hidden'
                onSlideChangeTransitionStart={(swiper) => {
                    swiper.slides.forEach((slide, index) => {
                    slide.style.transition = 'opacity 0.2s';
                    if (index === swiper.activeIndex) {
                        slide.style.opacity = 1;
                    } else {
                        slide.style.opacity = 0;
                    }
                    });
                }}
                >
                <SwiperSlide>
                    <Image src={ImageHome1} alt="Image 1" className="swiper-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={ImageHome2} alt="Image 2" className="swiper-image" />
                </SwiperSlide>
                </Swiper>
            </div>
        </ContainerGrid>
    )
}