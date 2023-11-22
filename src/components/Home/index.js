import {useCallback, useEffect, useState} from "react";

import data from "../../data.json";
import {getDataSessionStorage, setDataSessionStorage} from "../../helpers";

import {TradingNowList} from "../TrandingNow";
import {FeaturedCover, FeaturedTitle} from "../Featured";

const useHomePageState = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        const featured = getDataSessionStorage("featured") || data.Featured;
        const trendingNow = data.TrendingNow;

        // trendingNow.sort((a, b) => a.ReleaseYear - b.ReleaseYear);

        const targetIndex = trendingNow.findIndex((m) => m.Id === featured.Id);
        trendingNow.splice(targetIndex, 1);
        trendingNow.unshift(featured);

        setState({
            featured,
            trendingNow,
        });
    }, []);

    const setFeatured = useCallback(
        (featured) => {
            setDataSessionStorage("featured", featured);
            setState({...state, featured});
        },
        [state]
    );

    return {state, setFeatured};
};

export const Home = () => {
    const {state, setFeatured} = useHomePageState();

    return (
        <div className="home">
            {state && (
                <>
                    <FeaturedTitle data={state.featured}/>
                    <FeaturedCover data={state.featured}/>
                    <TradingNowList
                        trendingList={state.trendingNow}
                        setFeatured={setFeatured}
                    />
                </>
            )}
        </div>
    );
};
