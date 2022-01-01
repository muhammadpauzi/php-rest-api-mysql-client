import { getCardComponent } from "./components.js";
import { BASE_URL } from "./constants.js"
import { cardsGroup } from "./elements.js";
import { fetchData } from "./utils.js"

const showPosts = async () => {
    const { res, data } = await fetchData({
        base_url: BASE_URL,
        url: "/posts"
    });

    let cards = ``;
    data.data.map(post => {
        cards += getCardComponent(post);
    });
    cardsGroup.innerHTML = cards;
}

showPosts();