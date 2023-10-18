import { Poppins, Raleway } from 'next/font/google';

export const raleway = Raleway({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
    subsets: ['cyrillic'],
    variable: '--font-raleway',
});

export const primary = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-primary',
});