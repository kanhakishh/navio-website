import Exp1 from '@/img/exp-1.png'
import Exp2 from '@/img/exp-2.png'
import Exp3 from '@/img/exp-3.png'
import Image from 'next/image'
import { JSX } from 'react'

const Order2Comp = (): JSX.Element => {
    return (
        <div className="relative aspect-[4/5] w-full h-full">
            <Image src={Exp1} alt="experience-1" className="absolute w-full h-full object-cover" />
            <div className="absolute w-full h-full flex flex-col px-4 py-6 md:p-4 lg:p-9 gap-2 md:gap-[18px]">
                <div>
                    <h4 className="text-[clamp(26px,3.5vw,50px)] leading-[clamp(32.46px,3.5vw,50px)] tracking-[0.25px] font-semibold text-white">
                        Order
                        <br /> Confirmation
                    </h4>
                </div>
                <div className="bg-white rounded-full py-1 px-[10px] max-w-max">
                    <h4 className="text-base text-[#000000] font-medium leading-[21.82px]">1</h4>
                </div>
            </div>
        </div>
    )
}
export default function ExperienceTime(): JSX.Element {
    return (
        <section id="experience-time" className="w-full h-full pt-[100px]">
            <div className="md:container md:pr-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                    <div className="flex flex-col gap-[32px]">
                        <div className="px-4 md:px-0">
                            <div className="lg:w-[80%] md:max-w-[500px]">
                                <h2 className="text-[clamp(36px,3.5vw,64px)] leading-[clamp(46px,4.5vw,75px)] font-light text-white mb-[26px]">
                                    Experience time-efficiency{' '}
                                </h2>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <Order2Comp />
                        </div>
                        <div className="px-4 md:px-0">
                            <div className="w-full ">
                                <div className="relative aspect-video w-full h-full">
                                    <Image
                                        src={Exp2}
                                        alt="experience-2"
                                        className="absolute w-full h-full object-cover"
                                    />
                                    <div className="absolute w-full h-full flex flex-col px-4 py-2 md:p-4 lg:p-9  gap-2 md:gap-[18px]">
                                        <div>
                                            <h4 className="text-[clamp(26px,3.5vw,50px)] leading-[clamp(35.46px,3.5vw,50px)] tracking-[0.25px] font-semibold text-white">
                                                Quick
                                                <br />
                                                Connect
                                            </h4>
                                        </div>
                                        <div className="bg-white rounded-full py-1 px-[10px] max-w-max ">
                                            <h4 className="text-base text-[#000000] font-medium leading-[21.82px]">
                                                2
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 md:px-0">
                            <div className="w-full">
                                <div className="relative aspect-video w-full h-full">
                                    <Image
                                        src={Exp3}
                                        alt="experience-3"
                                        className="absolute w-full h-full object-cover"
                                    />
                                    <div className="absolute w-full h-full flex flex-col px-4 py-2 md:p-4 lg:p-9 gap-2 md:gap-[18px]">
                                        <div>
                                            <h4 className="text-[clamp(26px,3.5vw,50px)] leading-[clamp(35.46px,3.5vw,50px)] tracking-[0.25px] font-semibold text-white">
                                                Exchange
                                                <br />
                                                Product
                                            </h4>
                                        </div>
                                        <div className="bg-white rounded-full py-1 px-[10px] max-w-max">
                                            <h4 className="text-base text-[#000000] font-medium leading-[21.82px]">
                                                3
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Order2Comp />
                    </div>
                </div>
            </div>
        </section>
    )
}
