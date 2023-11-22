import images from "../../assets/images"

export const FeaturedTitle = ({data}) => {
    return (
        <div className="featuredTitle">
            <p className="category">{data.Category.toUpperCase()}</p>
            {
                data.Title === "The Irishman" ? <img src={images.FeaturedTitleImage} alt="Girl in a jacket" /> :
                    <p className="title">{data.Title}</p>
            }
            <div className="gapContainer">
                <div className="infoContainer">
                    <p className="releaseYear">{data.ReleaseYear}</p>
                    <p className="mpaRating">{data.MpaRating}</p>
                    <p className="duration">{data.Duration}</p>
                </div>
                <p className="description">{data.Description}</p>
                <div className="btnsContainer">
                    <button className="playBtn">Play</button>
                    <button className="moreInfoBtn">More Info</button>
                </div>
            </div>
        </div>
    );
};
