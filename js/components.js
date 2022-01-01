export const getCardComponent = ({ title, date, name, description }) => {
    return `
        <div class="bg-white shadow rounded p-4 block">
            <h3 class="text-lg text-green-500 font-semibold mb-2">
                <a href="">${title}/a>
            </h3>
            <div class="mb-3">
                <small class="text-gray-500 font-bold">${date}</small>
            </div>
            <p class="text-gray-500 text-sm mb-3">${description}</p>
            <div>
                <a href="" class="text-green-500 text-sm font-bold">${name}</a>
            </div>
        </div>
    `;
}