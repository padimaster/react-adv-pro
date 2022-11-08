import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { productContext } from "./ProductCard";

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: ProductTitleProps) => {
    const { product } = useContext(productContext);

    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>
            {title ? title : product.title}
        </span>
    );
};