import Header from './components/Header';
import OfferCard from './components/OfferCard';
import ProductCategory from './components/ProductCategory';
import ReasonToBuy from './components/ReasonToBuy';

export default function Home() {
  return (
    <>
      <Header />
      <ProductCategory />
      <ReasonToBuy />
      <OfferCard />
    </>
  );
}
