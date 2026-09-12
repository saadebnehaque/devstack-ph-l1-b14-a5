import type { FootLinkType } from '../../assets/types/type';

export const footLinks: FootLinkType[] = [
    {
        category: "PRODUCT",
        links: [
            { name: "Home", path: "/" },
            { name: "Technologies", path: "/technologies" },
            { name: "Projects", path: "/projects" }
        ]
    },
    {
        category: "COMPANY",
        links: [
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Careers", path: "/careers" }
        ]
    },
    {
        category: "LEGAL",
        links: [
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Terms of Service", path: "/terms" }
        ]
    }
];