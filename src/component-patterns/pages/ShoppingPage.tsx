import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
    return (
        <div >
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

                <ProductCard product={product} className="bg-dark">
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} style={{ backgroundColor: "green" }}>
                    <ProductCard.Image style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductCard.Title />
                    <ProductCard.Buttons style={{ display: "flex", justifyContent: "center" }} />
                </ProductCard>
            </div>
        </div>
    );
};
