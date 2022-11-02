import { ReactElement } from "react";

export interface ProductCardProps {
    product: ProductProps;
    children?: ReactElement | ReactElement[];
}

export interface ProductProps {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: ProductProps;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: ({ title }: { title?: string | undefined }) => JSX.Element;
    Image: ({ img }: { img?: string | undefined }) => JSX.Element;
    Buttons: () => JSX.Element;
}
