import images from "../../assets/images";

export const FeaturedCover = ({data}) => {
    return (
        <div className="featuredCover">
            <img
                src={data.Title === "The Irishman" ? images.FeaturedCoverImage : data.CoverImage}
                alt="FeaturedCover"
                key={data.Id}
            />
            <video key={data.Id + 1} loop autoPlay muted>
                <source src={data.VideoUrl} type="video/mp4"/>
            </video>
        </div>
    );
};
