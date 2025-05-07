'use client'
import { Button } from '@/components/ui/button'
import List from '@/img/list.png'
import Offer from '@/img/offer.png'
// import Sell from '@/img/sell.png'
import { MoveDown } from 'lucide-react'
import Image from 'next/image'
import { JSX } from 'react'

const ListSection = (): JSX.Element => {
    return (
        <div className="flex justify-center items-center flex-col gap-12 md:flex-row md:items-start z-10">
            <div className="flex gap-4 flex-row-reverse justify-start items-center md:justify-end md:flex-col md:items-end md:mt-[50px]">
                <h5 className="text-white text-[clamp(26px,3.5vw,50px)] leading-[clamp(35px,3.5vw,56px)] tracking-[0.5px] font-semibold">
                    List
                </h5>
                <p className="text-base text-black bg-white rounded-full w-[30px] h-[30px] text-center leading-[30px]">
                    1
                </p>
            </div>
            <Image
                src={List}
                alt="list"
                className="w-[80%] max-w-[500px] md:max-w-[271px] xl:max-w-[300px] 2xl:max-w-[411px] aspect-[2/4]"
            />
        </div>
    )
}

const OfferSection = (): JSX.Element => {
    return (
        <div className="flex justify-center items-center flex-col md:items-start ">
            <div className="flex gap-4 flex-row-reverse justify-start items-center md:justify-start md:flex-col md:items-start mt-10 mb-4 md:mt-0 md:mb-[-30px] md:ml-5 lg:mx-auto">
                <h5 className="text-white text-[clamp(26px,3.5vw,50px)] leading-[clamp(35px,3.5vw,56px)] tracking-[0.5px] font-semibold">
                    Receive Offers
                </h5>
                <p className="text-base text-black bg-white rounded-full w-[30px] h-[30px] text-center leading-[30px]">
                    2
                </p>
            </div>
            <Image
                src={Offer}
                alt="offer"
                className="w-[80%] max-w-[411px] h-full md:max-w-[380px] lg:max-w-[310px] xl:max-w-[350px] 2xl:max-w-[435px] aspect-[6/7] md:ml-auto"
            />
        </div>
    )
}

const EnjoyRideText = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-6 lg:gap-7 2xl:9">
            <h4 className="text-white font-light text-[clamp(36px,3.5vw,64px)] leading-[clamp(46px,3.5vw,75px)]">
                Enjoyable ride <br /> every time
            </h4>
            <p className="text-white text-base font-normal leading-[28px] tracking-[0.44px]">
                Our platform features a wide range of high-quality exclusive products listed to resell. Each product is
                carefully verified based on its current status, durability, and market value, ensuring a better deal for
                all.
            </p>
            <Button
                variant={'default'}
                className="w-full max-w-[220px]"
                onClick={(): void => {
                    window.scrollTo({
                        top: document.getElementById('ride-features')?.offsetTop || 0,
                        behavior: 'smooth'
                    })
                }}>
                Explore How <MoveDown />
            </Button>
        </div>
    )
}

const SellSection = (): JSX.Element => {
    return (
        <div className="flex justify-center flex-col md:flex-row items-center md:items-start md:justify-end gap-14 md:gap-0 w-full">
            <div className="flex gap-4 flex-row-reverse justify-start items-center md:justify-end md:flex-col md:items-end md:mt-16">
                <h5 className="text-white text-[clamp(26px,3.5vw,50px)] leading-[clamp(35px,3.5vw,56px)] tracking-[0.5px] font-semibold">
                    Sell
                </h5>
                <p className="text-base text-black bg-white rounded-full w-[30px] h-[30px] text-center leading-[30px]">
                    3
                </p>
            </div>
            <Image
                src={'/sell.png'}
                alt="sell"
                className="w-full h-full max-w-[611px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] aspect-[6/7]"
            />
        </div>
    )
}
export default function EnjoyableRide(): JSX.Element {
    return (
        <section id="enjoyable-ride" className="w-full h-full pt-16 md:pt-[100px]">
            <div className="px-4 md:container">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center relative z-0">
                    <div className="col-span-1 md:hidden order1">
                        <ListSection />
                    </div>
                    <div className="col-span-1 md:col-span-2 w-full order-2 md:max-h-[450px]">
                        <div className="grid grid-cols-2 place-items-center w-full lg:translate-y-[-30px] xl:translate-y-[-50px] 2xl:translate-y-[-100px] gap-8 xl:gap-12 2xl:gap-14">
                            <div className="col-span-2 md:col-span-1 w-full">
                                <OfferSection />
                            </div>
                            <div className="hidden md:block md:col-span-1 max-w-lg mr-auto">
                                <EnjoyRideText />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 md:order-1 w-full">
                        <div className="hidden md:flex justify-end w-full md:pr-[50px] lg:pr-[140px] xl:pr-[157px] 2xl:pr-[200px]">
                            <ListSection />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 order-3 w-full">
                        <div className="flex justify-end lg:pr-[70px] xl:pr-[127px]  2xl:pr-[180px] w-full">
                            <SellSection />
                        </div>
                        <div className="flex justify-start items-start w-full md:hidden">
                            <EnjoyRideText />
                        </div>
                    </div>
                </div>
                <div
                    id="ride-features"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-[80px] md:pt-0">
                    <div className="max-w-xs">
                        <h4 className="text-[40px] leading-[35px] tracking-[0.21px] font-semibold text-white mb-6">
                            List
                        </h4>
                        <p className="text-[clamp(14px,1.5vw,16px)] font-normal leading-[28px] tracking-[0.44px] text-white">
                            List your product verified in minutes to be viewed by 100’s & 1000’s of verified Buyers...
                        </p>
                    </div>
                    <div className="max-w-xs">
                        <h4 className="text-[40px] leading-[35px] tracking-[0.21px] font-semibold text-white mb-6">
                            Receive Offers
                        </h4>
                        <p className="text-[clamp(14px,1.5vw,16px)] font-normal leading-[28px] tracking-[0.44px] text-white">
                            Receive instant offers from buyers on your product, enabling quick and seamless
                            transactions.
                        </p>
                    </div>
                    <div className="max-w-xs">
                        <h4 className="text-[40px] leading-[35px] tracking-[0.21px] font-semibold text-white mb-6">
                            Sell/ Buy
                        </h4>
                        <p className="text-[clamp(14px,1.5vw,16px)] font-normal leading-[28px] tracking-[0.44px] text-white">
                            The trust in reselling has brought the present with a seamless experience to sell and shop.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
