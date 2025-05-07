import Reselling from '@/img/section-6.png'
import Image from 'next/image'
import { JSX } from 'react'

export default function SpeedOfReselling(): JSX.Element {
    return (
        <section id="speed-of-reselling" className="w-full h-full pt-16 md:pt-[100px]">
            <div className="px-0 md:container">
                <div className="relative aspect-square md:aspect-video">
                    <Image src={Reselling} alt="speed-of-reselling" className="absolute w-full h-full object-cover" />
                    <div className="absolute w-full h-full flex justify-center items-end px-4 pb-16 max-w-sm lg:px-[50px] lg:pb-[122px] 2xl:pb-[172px] lg:max-w-2xl">
                        <h4 className="text-[26px] font-normal leading-[28px] text-white lg:text-[48px] lg:leading-[52px]">
                            Now you can increase the speed of reselling your products as a seller.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
