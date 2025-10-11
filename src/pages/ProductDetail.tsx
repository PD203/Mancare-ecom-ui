import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProducts } from "@/lib/data";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = allProducts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const increase = () => setQuantity((q) => q + 1);

  return (
    <>
      <Header textColor="text-black" />
      <div className="bg-white">
        <div className=" pt-40 flex flex-col items-center py-10">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 bg-white p-8 ">
            {/* Left Image Section */}
            <div className="flex gap-14">
              <div className="flex flex-col items-center justify-center space-y-3">
                <button className="text-gray-500">▲</button>
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    width={60}
                    height={60}
                    className={` border h-20 w-16 cursor-pointer ${
                      selectedImage === index
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
                <button className="text-gray-500">▼</button>
              </div>
              <div
                className="flex-1 flex items-center justify-center rounded-[3rem] overflow-hidden"
                style={{
                  background: product.gradient,
                  width: "388px",
                  height: "450px",
                }}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="object-contain h-[550px]"
                />
              </div>
            </div>
            {/* Right Details Section */}
            <div className="flex  flex-col text-[#4E4E4E] justify-start space-y-6">
              <div className="flex flex-col justify-between" style={{ lineHeight: "23px", height: "15%" }}>
                <h1 className="text-3xl font-inter leading-[23px]">{product.name}</h1>
                <p className="text-lg text-gray-600 mt-1">{product.price}</p>
              </div>
              <div className="flex  items-center gap-4  py-4 ">
                <div className="flex items-center gap-5 px-10 py-2 mr-6 border-b border-t">
                  <button onClick={decrease} className="text-lg font-semibold">
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={increase} className="text-lg font-semibold">
                    +
                  </button>
                </div>
                <button className="border-t border-b px-6 py-3 font-lexend text-sm tracking-wide transition">
                  Add to Cart
                </button>
              </div>
              <p className="text-gray-600 text-sm font-lexend">
                {product.description}
              </p>
              <div className="border-t ">
                <div className="flex justify-between px-6  items-center font-lexend tracking-wider text-sm font-medium border-b h-[45px]">
                  <span>Description</span>
                  <span>+</span>
                </div>
                <div className="flex justify-between px-6  items-center font-lexend tracking-wider text-sm font-medium border-b h-[45px]">
                  <span>Proper usage</span>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;