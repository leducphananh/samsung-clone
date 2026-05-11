import CrossNavigation from './components/cross-navigation';
import InnerCrossNav from './components/inner-cross-nav';
import OfferBanner from './components/offer-banner';
import PriceBar from './components/price-bar';
import ProductBuying from './components/product-buying/product-buying';
import ProductTrade from './components/product-trade';
import SamsungCare from './components/samsung-care';

const SmartphoneDetailPage = () => {
  return (
    <>
      <CrossNavigation />
      <PriceBar />
      <InnerCrossNav />
      <OfferBanner />
      <ProductBuying />
      <ProductTrade />
      <SamsungCare />
    </>
  );
};

export default SmartphoneDetailPage;
