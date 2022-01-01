export const fetchData = ({ base_url = "", url = "", options = {} }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(base_url + url, { ...options });
            const data = await response.json();
            return resolve({ res: response, data });
        } catch (error) {
            console.error("Catched Error :", error);
            return reject(error);
        }
    });
}

export const pluralize = (value = 0, singleText = "", pluralText = "") => {
    return value == 1 ? singleText : pluralText;
}