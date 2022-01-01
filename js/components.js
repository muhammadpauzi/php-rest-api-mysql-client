export const getCardComponent = ({ title, created_at, name, description }) => {
    return `
        <div class="bg-white shadow rounded p-4 block">
            <h3 class="text-lg text-green-500 font-semibold mb-2">
                <a href="">${title}</a>
            </h3>
            <div class="mb-3">
                <small class="text-gray-500 font-bold">${created_at}</small>
            </div>
            <p class="text-gray-500 text-sm mb-3">${description}</p>
            <div>
                <a href="" class="text-green-500 text-sm font-bold">${name}</a>
            </div>
        </div>
    `;
}

export const getSpinnerComponent = ({ isSmall, noPadding } = { isSmall: false, noPadding: false }) => {
    const dimensions = isSmall ? 'h-4 w-4' : 'h-12 w-12';
    const padding = noPadding ? '' : 'py-10';
    return `<div class="${padding}">
            <div class="loader mx-auto ease-linear rounded-full border-2 border-t-2 border-gray-200 ${dimensions}"
            >
            <div class="sr-only>Loading...</div>
        </div>
    </div>`;
}