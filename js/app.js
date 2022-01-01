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
    // show spinner loading
    cardsGroup.innerHTML = getSpinnerComponent();
    // get posts from api
    const { data: posts, total } = await getPosts();
    let cards = ``;
    posts.map(post => {
        // get card element with parameter that gonne used in card component
        cards += getCardComponent(post);
    });
    // display all cards into cards group element
    cardsGroup.innerHTML = cards;
    totalFounded.textContent = `${total} ${pluralize(total, "Post", "Posts")}`;
}

showPosts();