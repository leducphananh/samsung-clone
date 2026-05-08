import CrossNavigation from './components/cross-navigation';
import InnerCrossNav from './components/inner-cross-nav';
import OfferBanner from './components/offer-banner';
import PriceBar from './components/price-bar';

const SmartphoneDetailPage = () => {
  return (
    <>
      <CrossNavigation />
      <PriceBar />
      <InnerCrossNav />
      <OfferBanner />
    </>
  );
};

export default SmartphoneDetailPage;
