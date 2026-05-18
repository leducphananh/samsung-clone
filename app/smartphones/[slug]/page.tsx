import CrossNavigation from './_components/cross-navigation';
import InnerCrossNav from './_components/inner-cross-nav';
import OfferBanner from './_components/offer-banner';
import PriceBar from './_components/price-bar';
import ProductBuying from './_components/product-buying/product-buying';
import ProductFeature from './_components/product-feature/product-feature';
import ProductSummary from './_components/product-summary';
import ProductTrade from './_components/product-trade';
import PromotionCoupon from './_components/promotion-coupon';
import PromotionGift from './_components/promotion-gift';
import SamsungCare from './_components/samsung-care';

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
      <PromotionCoupon />
      <ProductSummary />
      <PromotionGift />
      <ProductFeature />
    </>
  );
};

export default SmartphoneDetailPage;
