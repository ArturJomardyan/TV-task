export const getDataSessionStorage = (key) => {
    const data = sessionStorage.getItem(key);

    return data && JSON.parse(data)
}