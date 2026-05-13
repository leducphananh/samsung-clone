import Camera from './camera';
import GalaxyAI from './galaxy-ai';
import WeightDimension from './weight-dimension';

const MainSpec = () => {
  return (
    <div className="mt-30">
      <h2 className="font-samsung-sharp text-center text-[32px] font-bold md:text-[48px]">
        Thông số kỹ thuật chính
      </h2>
      <div className="mt-9.5 md:mt-15.5">
        <WeightDimension />
        <Camera />
        <GalaxyAI />
      </div>
    </div>
  );
};

export default MainSpec;
