import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, } from "react";
import {
    ProductContextProps,
    ProductProps,
} from "../interfaces/Product.interfaces";

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface ProductCardProps {
    product: ProductProps;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({
    children,
    product,
    className,
    style
}: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
