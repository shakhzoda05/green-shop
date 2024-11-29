"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductImg from '../../public/flower.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';
import { Pagination } from 'swiper/modules';
import Button from '../Button';
import Image from 'next/image';

export default function SwiperCustom() {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide >
          <div className='!w-[530px] '>
            <p className="text-[14px] text-[#3D3D3D] mb-[7px] tracking-[10%] leading-4 font-medium" data-swiper-parallax="-300">
              Welcome to GreenShop
            </p>
            <h2 className="font-extrabold text-[60px] leading-[60px] text-[#3D3D3D] mb-[5px]" data-swiper-parallax="-200">
              Let’s Make a
              Better <span className='text-[#46A358]'> Planet</span>
            </h2>
            <div className="text" data-swiper-parallax="-100">
              <p className='text-[14px] text-[#727272] mb-[44px]'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
              </p>
              <Button type='button' title='SHOP NOW' extraStyle='w-[140px] !py-[10px]' onClick={() => { }} />
            </div>
          </div>
          <Image width={518} height={518} src={ProductImg} alt='Product img'/>
        </SwiperSlide>
        <SwiperSlide >
          <div className='!w-[530px] '>
            <p className="text-[14px] text-[#3D3D3D] mb-[7px] tracking-[10%] leading-4 font-medium" data-swiper-parallax="-300">
              Welcome to GreenShop
            </p>
            <h2 className="font-extrabold text-[60px] leading-[60px] text-[#3D3D3D] mb-[5px]" data-swiper-parallax="-200">
              Let’s Make a
              Better <span className='text-[#46A358]'> Planet</span>
            </h2>
            <div className="text" data-swiper-parallax="-100">
              <p className='text-[14px] text-[#727272] mb-[44px]'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
              </p>
              <Button type='button' title='SHOP NOW' extraStyle='w-[140px] !py-[10px]' onClick={() => { }} />
            </div>
          </div>
          <Image width={518} height={518} src={ProductImg} alt='Product img'/>
        </SwiperSlide>
        <SwiperSlide >
          <div className='!w-[530px] '>
            <p className="text-[14px] text-[#3D3D3D] mb-[7px] tracking-[10%] leading-4 font-medium" data-swiper-parallax="-300">
              Welcome to GreenShop
            </p>
            <h2 className="font-extrabold text-[60px] leading-[60px] text-[#3D3D3D] mb-[5px]" data-swiper-parallax="-200">
              Let’s Make a
              Better <span className='text-[#46A358]'> Planet</span>
            </h2>
            <div className="text" data-swiper-parallax="-100">
              <p className='text-[14px] text-[#727272] mb-[44px]'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
              </p>
              <Button type='button' title='SHOP NOW' extraStyle='w-[140px] !py-[10px]' onClick={() => { }} />
            </div>
          </div>
          <Image width={518} height={518} src={ProductImg} alt='Product img'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}