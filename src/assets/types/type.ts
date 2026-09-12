export interface TechnologiesType {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    alt: string,
    rating: number,
    difficulty: string,
    badge: string,
    badgeStyle: string,
};

export interface FootLinkType {

    category: string,
    links: { name: string, path: string }[],



}