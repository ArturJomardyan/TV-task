import * as icons from "../../assets/icons"

import {MenuIconItem} from "./MenuIconItem"

const menuItems = {
    search: {
        icon: icons.search,
        name: "Search"
    },
    home: {
        icon: icons.home,
        name: "Home"
    },
    TVShows: {
        icon: icons.TVShows,
        name: "TV Shows"
    },
    movies: {
        icon: icons.movies,
        name: "Movies",
    },
    genres: {
        icon: icons.genres,
        name: 'Genres'
    },
    watchLater: {
        icon: icons.watchLater,
        name: "Watch Later"
    }
}

export const MenuBody = () => (
    Object.keys(menuItems).map((key) => (
        <MenuIconItem
            key={key}
            icon={menuItems[key].icon}
            name={menuItems[key].name}
        />
    ))
)