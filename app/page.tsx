import Header from './components/Header';
import OfferCard from './components/OfferCard';
import ProductCategory from './components/ProductCategory';
import ReasonToBuy from './components/ReasonToBuy';
import RecommendProduct from './components/RecommendProduct';

export default function Home() {
  return (
    <>
      <Header />
      <ProductCategory />
      <ReasonToBuy />
      <OfferCard />
      <RecommendProduct />
    </>
  );
}
