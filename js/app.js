import { getCardComponent, getSpinnerComponent } from "./components.js";
import { BASE_URL } from "./constants.js"
import { cardsGroup } from "./elements.js";
import { fetchData } from "./utils.js"

const getPosts = async () => {
    const { res, data } = await fetchData({
        base_url: BASE_URL,
        url: "/posts"
    });
    return data.data;
}

const showPosts = async () => {
    cardsGroup.innerHTML = getSpinnerComponent();

    const posts = await getPosts();
    let cards = ``;
    posts.map(post => {
        cards += getCardComponent(post);
    });
    cardsGroup.innerHTML = cards;
}

showPosts();