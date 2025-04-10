'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import * as Icon from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/bundle'

const Slider = () => {
    return (
        <>
            <div className='slider-block'>
                <div className='prev-arrow items-center justify-center'>
                    <Icon.CaretLeft className='text-white heading6' weight='bold' />
                </div>
                <div className='slider-main'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.prev-arrow',
                            nextE1: '.next-arrow'
                        }}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={600}
                        modules={[Pagination, Autoplay, Navigation]}
                        className='h-full relative'
                        autoplay={{
                            delay: 6000
                        }}
                    >
                        <SwiperSlide>
                            <div className='slider-item slider-first'>
                                <div className='bg-img'>
                                    <Image src={'/images/slider/one.jpg'}
                                        width={4000}
                                        height={3000}
                                        alt="slider-1"
                                        property={true}
                                        className='w-full h-full object-cover' />
                                </div>

                                <div className='container'>
                                    <div className='text-content flex-column-between'>
                                        <div className='heading2'>
                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden'>Simplify and Secure</span>
                                                <span className='block absolute top-0 left-0 w-full'>Simplify and Secure</span>
                                            </div>
                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden'>Our Solution</span>
                                                <span className='block absolute top-0 left-0 w-full'>Our Solution</span>
                                            </div>
                                        </div>
                                        <div className='body2 mt-3 text-secondary'>
                                            Share & Export Quickly share live preview of your project or download HTML project, <br />or components for React, Vue and WebComponent
                                        </div>
                                        <div className='button-block md:mt-10 mt-6'>
                                            <Link className='button-main bg-blue-700 text-white hover:bg-blue-500' href="/service">Discovery Now</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='slider-item slider-first'>
                                <div className='bg-img'>
                                    <Image src={'/images/slider/two.jpg'}
                                        width={4000}
                                        height={3000}
                                        alt="slider-1"
                                        property={true}
                                        className='w-full h-full object-cover' />
                                </div>

                                <div className='container'>
                                    <div className='text-content flex-column-between'>
                                        <div className='heading2'>
                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden'>Easy to use</span>
                                                <span className='block absolute top-0 left-0 w-full'>Easy to use</span>
                                            </div>
                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden'>Our Solution</span>
                                                <span className='block absolute top-0 left-0 w-full'>Our Solution</span>
                                            </div>
                                        </div>
                                        <div className='body2 mt-3 text-secondary'>
                                            Share & Export Quickly share live preview of your project or download HTML project, <br />or components for React, Vue and WebComponent
                                        </div>
                                        <div className='button-block md:mt-10 mt-6'>
                                            <Link className='button-main bg-blue-700 text-white hover:bg-blue-500' href="/service">Discovery Now</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className='next-arrow items-center justify-center'>
                    <Icon.CaretRight className='text-white heading6' weight='bold' />
                </div>
            </div >
        </>
    );
};

export default Slider;