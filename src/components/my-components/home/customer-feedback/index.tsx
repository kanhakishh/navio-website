'use client'
import { MainStateContext } from '@/components/context'
import { Button } from '@/components/ui/button'
import Feed1 from '@/img/feed-1.png'
import Feed2 from '@/img/feed-2.png'
import Feed3 from '@/img/feed-3.png'
import PlayButton from '@/img/play-icon.png'
import { MoveRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Fragment, JSX, useContext } from 'react'
const StarRatings = dynamic(() => import('react-star-ratings'), { ssr: false })

type Customer = {
    name: string
    feedback: string
    isLast?: boolean
    rating: number
}
const CustomerCard = (item: Customer): JSX.Element => {
    return (
        <Fragment>
            <div className="w-full h-full mb-5 mt-[15px]">
                <h5 className="text-base font-bold leading-[24px] tracking-[0.15px] text-white">-{item?.name}</h5>
                <div className="mt-[10px]">
                    <StarRatings
                        rating={item.rating}
                        numberOfStars={5}
                        starEmptyColor="#FFFFFF80"
                        starRatedColor="#ffd005"
                        starDimension="20px"
                        starSpacing="5px"
                    />
                </div>
                <p className="text-base font-normal leading-[28px] tracking-[0.44px] text-white mt-[10px]">
                    {item?.feedback}
                </p>
            </div>
            {!item?.isLast ? <div className="w-full h-[1px] border border-[#D8D8D8]" /> : null}
        </Fragment>
    )
}
export default function CustomerFeedback(): JSX.Element {
    const { setFeedbackOpen } = useContext(MainStateContext)
    const customer: Customer[] = [
        {
            name: 'Rohan Mehra',
            feedback: 'I can blindingly trust the platform for Selling & Buying',
            rating: 5
        },
        {
            name: 'Javed Khan',
            feedback: '',
            rating: 4.5
        },
        {
            name: 'Alokha Davis',
            feedback: 'Secure & Instant',
            rating: 4
        },
        {
            name: 'Raj Patel',
            feedback: '',
            rating: 4.8
        }
    ]
    return (
        <section id="customer-feedback" className="w-full h-full pt-16 md:pt-[100px]">
            <div className="px-4 md:container md:pl-0">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                    <div className="block md:hidden w-full mb-8 mt-4 md:mt-0">
                        <h2 className="text-[clamp(36px,4.5vw,64px)] leading-[clamp(46px,5.5vw,75px)] font-light text-white">
                            Our customer Feedback
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-2 md:grid-rows-5 place-items-center gap-5 lg:gap-9">
                        <div className="col-span-1 order-1 h-full md:col-span-2 md:order-2 md:row-span-2">
                            <div className="flex justify-end h-full items-end md:items-start">
                                <Image
                                    src={Feed1}
                                    alt="customer-feedback-1"
                                    className="w-full h-auto object-cover aspect-[2/3]"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 order-2 h-full w-full md:col-span-2 md:order-1 md:row-span-5">
                            <div className="flex justify-end h-full items-end w-full md:items-center">
                                <Image
                                    src={Feed2}
                                    alt="customer-feedback-2"
                                    className="w-full h-auto object-cover aspect-[2/4] md:aspect-[2/5]"
                                />
                            </div>
                        </div>
                        <div className="order-3 col-span-2 w-full md:col-span-3 md:row-span-4 h-full">
                            <div className="aspect-square w-full overflow-hidden relative group md:aspect-[4/5] md:mt-8">
                                <Image
                                    src={Feed3}
                                    alt="customer-feedback-3"
                                    className="absolute w-full h-auto object-cover object-center aspect-square md:aspect-auto"
                                />
                                <div className="absolute w-full h-full flex justify-center items-center">
                                    <Image
                                        src={PlayButton}
                                        alt="play-button"
                                        className="w-[50px] h-auto object-cover object-center aspect-square hidden group-hover:block "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center w-full md:pl-[30px] lg:pl-[60px] xl:pl-[118px]">
                        <div className="hidden md:block w-full mb-8 mt-4 md:mt-0">
                            <h2 className="text-[clamp(36px,4.5vw,64px)] leading-[clamp(46px,5.5vw,75px)] font-light text-white">
                                Our customer Feedback
                            </h2>
                        </div>
                        <div className="w-full mb-8 lg:mb-14 xl:mb-20">
                            {customer.map((item, index) => {
                                return (
                                    <CustomerCard
                                        key={index}
                                        name={item.name}
                                        feedback={item.feedback}
                                        rating={item.rating}
                                        isLast={index === customer.length - 1}
                                    />
                                )
                            })}
                        </div>
                        <div className="w-full ">
                            <Button
                                variant={'default'}
                                className="w-full max-w-[220px]"
                                onClick={(): void => {
                                    setFeedbackOpen(true)
                                }}>
                                Write Yours <MoveRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
