import ProductList from "./ProductCard";

const Featured = () => {
  return (
    <section id="products" className="py-20  bg-white">
      <div className="px-5">
        <ProductList />
      </div>
    </section>
  );
};

export default Featured;