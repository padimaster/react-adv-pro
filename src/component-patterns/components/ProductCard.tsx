import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductCardProps, ProductContextProps } from "../interfaces/Product.interfaces";


export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>{children}</div>
        </Provider>
    );
};

