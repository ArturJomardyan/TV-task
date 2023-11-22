import images from "../../assets/images";

export const TradingNowListItem = ({ imgId, setFeatured }) => {
  return (
    <div onClick={setFeatured} className="scrollerItem">
      <img src={images[`movie${imgId}`]}  alt={"movie"}/>
    </div>
  );
};
