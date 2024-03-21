export const SetItem = (key, data) =>{
    localStorage.setItem(key, data)
}
export const GetItem = key =>{
    return  localStorage.getItem(key);
}