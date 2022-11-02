import React from "react";
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components";


const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {/* <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard> */}

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={"Context"} />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={"Context"} />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
};
