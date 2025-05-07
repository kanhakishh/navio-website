'use client'
import { useMediaQuery } from '@/hooks/use-media-query'
import landingDesktop from '@/img/heroimg.jpg'
import landingArrow from '@/img/landing-arrow.png'
// import landingMobile from '@/img/landing-mobile.png'
import landingMobileArrow from '@/img/mobile-landing-arrow.png'
import Image from 'next/image'
import { JSX } from 'react'
export default function Landing(): JSX.Element {
    const isDeskTop = useMediaQuery('(min-width: 768px)')
    const isLandscape = useMediaQuery('(orientation: landscape)')
    const imageSrc = landingDesktop

    return (
        <section id="landing" className="w-full h-full">
            <div className={`w-full relative min-h-[500px] h-svh `}>
                <div className="bg-custom-gradient"></div>
                <Image
                    alt="landing"
                    src={imageSrc}
                    placeholder="blur"
                    loading="lazy"
                    className={`absolute top-0 left-0 w-full h-svh ${
                        isDeskTop ? 'min-h-[600px] !max-h-svh' : 'min-h-[500px] '
                    } object-cover object-center-right`}
                />
                <Image
                    alt="landing-arrow"
                    src={landingArrow}
                    placeholder="blur"
                    loading="lazy"
                    className="min-w-24 max-w-24 sm:max-w-[150px] md:max-w-[250px] lg:max-w-[350px] h-auto absolute bottom-[20px] sm:bottom-[25px] md:bottom-[50px] right-1/4 sm:right-1/3 lg:right-1/4"
                />
                <div
                    className={`absolute w-full h-svh py-8 md:py-16 lg:py-20 xl:py-24 flex items-end justify-start bg-custom-gradient ${
                        isDeskTop ? 'min-h-[600px] !max-h-svh' : 'min-h-[500px] '
                    }`}>
                    <div className="px-4 md:container">
                        <div className="max-w-[65%] m-auto relative">
                            {!isDeskTop && !isLandscape ? (
                                <Image
                                    src={landingMobileArrow}
                                    alt="landing-mobile-arrow"
                                    className="absolute left-[5%] xs:left-[100px] top-[-60px] w-12"
                                    loading="lazy"
                                    placeholder="blur"
                                />
                            ) : null}
                            <h1 className="text-2xl sm:text-3xl xl md:text-5xl lg:text-6xl xl:text-[70px] font-semibold text-white">
                                Elevate Your Digital Presence with <b>Social Santa</b>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
