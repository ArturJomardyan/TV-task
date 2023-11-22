import ScrollContainer from "react-indiana-drag-scroll";

import {TradingNowListItem} from "./TradingNowListItem";

export const TradingNowList = ({trendingList, setFeatured}) => {
    return (
        <div className="scroller">
            <p className="trendingNow">Trending Now</p>
            <ScrollContainer horizontal hideScrollbars className="scroll-container">
                <div className="container">
                    {trendingList?.map((item) => (
                        <TradingNowListItem
                            key={Math.random()}
                            imgId={item.Id}
                            setFeatured={() => setFeatured(item)}
                        />
                    ))}
                </div>
            </ScrollContainer>
        </div>
    );
};
