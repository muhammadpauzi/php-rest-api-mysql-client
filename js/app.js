import { getCardComponent, getSpinnerComponent } from "./components.js";
import { BASE_URL } from "./constants.js"
import { cardsGroup, loadMoreButton, totalFounded } from "./elements.js";
import { fetchData, pluralize } from "./utils.js"

let offset = 0;
let limit = 50;

const getPosts = async () => {
    const { res, data } = await fetchData({
        base_url: BASE_URL,
        url: `/posts?offset=${offset}&limit=${limit}`
    });
    return data;
}

const showPosts = async () => {
    const { data: posts, total } = await getPosts();
    let cards = ``;
    posts.map(post => {
        cards += getCardComponent(post);
    });
    cardsGroup.innerHTML += cards;
    totalFounded.textContent = `${total} ${pluralize(total, "Post", "Posts")}`;
}

loadMoreButton.addEventListener('click', async function () {
    const initialTextContent = this.textContent;
    if (initialTextContent) { // to handle if double click while still fetching data
        this.innerHTML = getSpinnerComponent({ isSmall: true, noPadding: true });
        offset += limit;
        await showPosts();
        this.textContent = initialTextContent;
    }
})

showPosts();