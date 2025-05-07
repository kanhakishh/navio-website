'use client'
import { Button } from '@/components/ui/button'
import { MoveDown } from 'lucide-react'
import { JSX } from 'react'

export default function PassionateAbout(): JSX.Element {
    return (
        <section id="passionate-about" className="w-full h-full pt-16 md:pt-[100px]">
            <div className="px-4 md:container">
                <div className="w-full xl:max-w-[70%]">
                    <h2 className="text-4xl sm:text-5xl leading-[46px] sm:leading-[58px] md:text-[64px] md:leading-[75px] font-light text-white mb-3 sm:mb-4 md:mb-8">
                        We&apos;re passionate about everything related to reselling.
                    </h2>
                    <p className="text-lg md:text-xl font-normal text-white mb-9 md:mb-10 max-w-full xl:max-w-[50%]">
                        Welcome! Here we&apos;ve got everything you need to elevate your value for Money Purchase...
                    </p>
                    <Button
                        variant={'default'}
                        onClick={(): void => {
                            window.scrollTo({
                                top: document.getElementById('products-carousel')?.offsetTop || 0,
                                behavior: 'smooth'
                            })
                        }}>
                        Explore How <MoveDown />
                    </Button>
                </div>
            </div>
        </section>
    )
}
