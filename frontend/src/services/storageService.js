export const storageService = {
    getFromStorage,
    saveToStorage
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
};

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
};