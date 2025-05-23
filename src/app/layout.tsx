import MainContext from '@/components/context'
import Footer from '@/components/my-components/footer'
import Navbar from '@/components/my-components/navbar'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Head from 'next/head'
import { Fragment, ReactNode } from 'react'
import './globals.css'

const nunito = Nunito({
    variable: '--font-nunito',
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    preload: true
})

export const metadata: Metadata = {
    title: 'Social Santa',
    description: 'Generated by create next app'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>): ReactNode {
    return (
        <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="./favicon.ico" />
            </Head>
            <body className={`${nunito.variable} ${nunito.className} antialiased bg-[#000000]`}>
                <MainContext>
                    <Fragment>
                        <Navbar />
                        {children}
                        <Footer />
                    </Fragment>
                </MainContext>
            </body>
        </html>
    )
}
