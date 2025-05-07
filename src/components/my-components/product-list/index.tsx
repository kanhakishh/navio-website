'use client'
import { MainStateContext } from '@/components/context'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { JSX, useContext, useState } from 'react'

const list = {
    canBeListed: [
        'Mobile',
        'Computers',
        'Camera',
        'Wearable',
        'Appliances',
        'Clothing',
        'Footwear',
        'Bags',
        'Belts',
        'Drones',
        'Digital Games',
        'Watches',
        'Grooming tools',
        'Furniture',
        'Décor',
        'Kitchenware',
        'Bedding and linens',
        'Lighting',
        'Fitness equipment',
        'Textbooks',
        'Novels',
        'Stationery',
        'Educational toys',
        'Board games',
        'Outdoor toys',
        'Car accessories',
        'Bike gear',
        'Sports gear',
        'Apparel',
        'Pet Toys',
        'Suitcases',
        'Travel accessories',
        'E-books',
        'Online courses',
        'Software and applications'
    ],
    cannotBeListed: [
        'Real estate',
        'Vehicles',
        'Jewelry',
        'Weapons',
        'Maps',
        'Government Authorities',
        'Pharma Products',
        'Body Care Products',
        'Food Products',
        'Alcohol Products',
        'Cigarettes',
        'Drugs',
        "Medical Equipment's",
        'Living Beings',
        'Many more...'
    ]
}

const ListItem = ({ item, className }: { item: string; className?: string }): JSX.Element => {
    return (
        <div className={className}>
            <p
                className={`text-[clamp(12px,2.5vw,16px)] leading-[clamp(16px,2.5vw,22px)] ${className ? 'text-[#ffffff75]' : 'text-white'} font-normal`}>
                {item}
            </p>
        </div>
    )
}
export default function ProductList(): JSX.Element {
    const [productTab, setProductTab] = useState('can-be-listed')
    const { productListOpen, setProductListOpen } = useContext(MainStateContext)

    return (
        <Dialog open={productListOpen} onOpenChange={() => setProductListOpen(false)}>
            <DialogContent className="max-w-[92%] md:max-w-[98%] md:w-full lg:w-[99%] lg:max-w-[908px] ">
                <DialogHeader className="bg-transparent max-h-[calc(100svh-100px)]">
                    <DialogTitle className="font-bold text-[clamp(18px,3.5vw,36px)] leading-[clamp(24px,3.5vw,75px)] text-white mb-[16px]">
                        Product List
                    </DialogTitle>
                    <DialogDescription
                        className={`${productTab === 'can-be-listed' ? 'text-[#4B70F5]' : 'text-[#F8152A]'} text-sm font-normal leading-[19.1px] mt-[1px]`}>
                        {productTab === 'can-be-listed'
                            ? 'List of Products available / Can be listed:'
                            : 'List of Products not available / Cannot be listed:'}
                    </DialogDescription>
                    <Tabs value={productTab} className="w-full">
                        <TabsList>
                            <TabsTrigger
                                onClick={() => setProductTab('can-be-listed')}
                                value="can-be-listed"
                                className="relative after:absolute after:left-0 data-[state=active]:after:bg-[#4B70F5] after:h-[2px] after:w-16 after:rounded-sm after:bottom-0">
                                Can be listed
                            </TabsTrigger>
                            <TabsTrigger
                                onClick={() => setProductTab('cannot-be-listed')}
                                value="cannot-be-listed"
                                className="relative after:absolute after:left-0 data-[state=active]:after:bg-[#4B70F5] after:h-[2px] after:w-16 after:rounded-sm after:bottom-0">
                                Cannot be listed
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="can-be-listed" className="mt-[26px]">
                            <div className="w-full overflow-auto max-h-[calc(70svh-100px)]">
                                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                                    {list.canBeListed.map((tag, index) => (
                                        <ListItem item={tag} key={index} />
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="cannot-be-listed" className="mt-[26px]">
                            <div className="w-full overflow-auto max-h-[calc(70svh-100px)]">
                                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                    {list.cannotBeListed.map((tag, index) => (
                                        <ListItem
                                            item={tag}
                                            key={index}
                                            className={
                                                index === list.cannotBeListed.length - 1
                                                    ? 'col-start-2 sm:col-span-1'
                                                    : ''
                                            }
                                        />
                                    ))}
                                </div>
                                <div className="mt-[26px]">
                                    <p className="text-[clamp(12px,2.5vw,18px)] leading-[clamp(16px,2.5vw,24px)] text-white font-normal">
                                        If the platform finds other then these products as products not legal to be Sold
                                        online then it will reject the product listing
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
