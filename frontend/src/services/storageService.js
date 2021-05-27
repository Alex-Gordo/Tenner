
 export function getFromStorage(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
};



export function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
};