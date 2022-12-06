import { Product } from "./product";

export function ISP() {
  return (
    <Product
      product={{
        id: "1",
        image: "",
        price: 2000,
        rating: { rate: 1 },
        title: "Dummy Product",
      }}
    />
  );
}
