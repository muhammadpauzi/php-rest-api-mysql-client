import { getCardComponent, getSpinnerComponent } from "./components.js";
import { BASE_URL } from "./constants.js"
import { cardsGroup, loadMoreButton, searchInput, totalFounded } from "./elements.js";
import { fetchData, pluralize } from "./utils.js"

let offset = 0;
let limit = 10;
let q = '';

const getPosts = async () => {
    const { res, data } = await fetchData({
        base_url: BASE_URL,
        url: `/posts?offset=${offset}&limit=${limit}&q=${q}`
    });
    return data;
}

const showPosts = async () => {
    const { data: posts, total } = await getPosts();
    let cards = ``;
    posts.map(post => {
        cards += getCardComponent(post);
    });
    totalFounded.textContent = `${total} ${pluralize(total, "Post", "Posts")}`;
    return cards;
}

loadMoreButton.addEventListener('click', async function () {
    const initialTextContent = this.textContent;
    if (initialTextContent) { // to handle if double click while still fetching data
        this.innerHTML = getSpinnerComponent({ isSmall: true, noPadding: true });
        offset += limit;
        cardsGroup.innerHTML += await showPosts();
        this.textContent = initialTextContent;
    }
});

searchInput.addEventListener('keyup', async function () {
    q = this.value;
    cardsGroup.innerHTML = await showPosts();
});

const main = async () => {
    cardsGroup.innerHTML = await showPosts();
}

main()
