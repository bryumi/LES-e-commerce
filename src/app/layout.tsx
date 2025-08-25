import Providers from '@/components/Providers/Providers';
import type { Metadata } from 'next';
import { Montserrat, Poppins, Roboto_Mono, DM_Sans } from 'next/font/google';

const roboto = Roboto_Mono({
    variable: '--font-roboto',
    weight: ['400', '700'],
    subsets: ['latin'],
});
const dmSans = DM_Sans({
    variable: '--font-dm-sans',
    weight: ['400', '700'],
    subsets: ['latin'],
});
const montserrat = Montserrat({
    variable: '--font-montserrat',
    weight: ['400', '700'],
    subsets: ['latin'],
});
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'e-commerce',
    description: 'e-commerce',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body
                className={`${poppins.variable} ${roboto.variable} ${montserrat.variable} ${dmSans.variable}`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
