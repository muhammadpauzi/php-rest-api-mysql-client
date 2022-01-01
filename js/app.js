import { getCardComponent, getSpinnerComponent } from "./components.js";
import { BASE_URL } from "./constants.js"
import { cardsGroup, totalFounded } from "./elements.js";
import { fetchData, pluralize } from "./utils.js"

const getPosts = async () => {
    const { res, data } = await fetchData({
        base_url: BASE_URL,
        url: "/posts"
    });
    return data;
}

const showPosts = async () => {
    cardsGroup.innerHTML = getSpinnerComponent();
    const { data: posts, total } = await getPosts();
    let cards = ``;
    posts.map(post => {
        cards += getCardComponent(post);
    });
    cardsGroup.innerHTML = cards;
    totalFounded.textContent = `${total} ${pluralize(total, "Post", "Posts")}`;
}

showPosts();