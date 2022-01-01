export const fetchData = ({ base_url = "", url = "", options = {} }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(base_url + url, { ...options });
            const data = await response.json();
            return resolve({ response: res, data });
        } catch (error) {
            console.error("Cathched Error :", error);
            return reject(error);
        }
    });
}