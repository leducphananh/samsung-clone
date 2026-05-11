import FeatureCard from './components/feature-card';
import HelpMeChoose from './components/help-me-choose';
import OfferCard from './components/offer-card';
import ProductCategory from './components/product-category';
import ReasonToBuy from './components/reason-to-buy';
import RecommendProduct from './components/recommend-product';

export default function Home() {
  return (
    <>
      <ProductCategory />
      <ReasonToBuy />
      <OfferCard />
      <RecommendProduct />
      <HelpMeChoose />
      <FeatureCard />
    </>
  );
}
