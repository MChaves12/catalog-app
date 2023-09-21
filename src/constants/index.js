import {anelPrata, pulseiraBolinhaPrata, pulseiraPrata, brincoOuro, colarOuro, pulseiraOuro } from '../assets/images';
import { instagram, twitter } from '../assets/icons';

export const navLinks = [
    { href: "#about-us", label: "ABOUT" },
    { href: "#products", label: "SHOP" },
    { href: "#contact-us", label: "CONTACT" },
];

export const mockProducts = [
    {
        imgURL: anelPrata,
        name: "Anel de Prata",
        price: "$200.20",
    },
    {
        imgURL: pulseiraBolinhaPrata,
        name: "Pulseira Bolinha Prata",
        price: "$200.20",
    },
    {
        imgURL: pulseiraPrata,
        name: "Pulseira de Prata",
        price: "$200.20",
    },
    {
        imgURL: brincoOuro,
        name: "Brinco de Ouro",
        price: "$200.20",
    },
    {
        imgURL: colarOuro,
        name: "Colar de Ouro",
        price: "$200.20",
    },
    {
        imgURL: pulseiraOuro,
        name: "Pulseira de Ouro",
        price: "$200.20",
    },
    {
        imgURL: colarOuro,
        name: "Colar de Ouro",
        price: "$200.20",
    },
    {
        imgURL: pulseiraOuro,
        name: "Pulseira de Ouro",
        price: "$200.20",
    },
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Prata", link: "/" },
            { name: "Ouro", link: "/" },
            { name: "Aneis", link: "/" },
            { name: "Brincos", link: "/" },
            { name: "Colares", link: "/" },
            { name: "Pulseiras", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "amarilis@email.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];