import AverageRating from './average-rating';
import Overall from './overall';

const ProductReview = () => {
  return (
    <div className="mx-auto max-w-360">
      <div className="md:mx-13.5">
        <Overall />
        <AverageRating />
      </div>
    </div>
  );
};

export default ProductReview;
