import { productList } from '@/app/constants/product-list.constant';
import ProductItem from './product-item';

const ProductList = () => {
  return (
    <div className="mx-auto grid w-full max-w-360 grid-cols-2 gap-5 p-5 md:grid-cols-4">
      {productList.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
