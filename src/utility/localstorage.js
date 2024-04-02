const getReadValue = () => {
  const storedReadValue = localStorage.getItem('read-books')
  if (storedReadValue) {
    return JSON.parse(storedReadValue);
  }
  return [];
}
const saveReadValue = id => {
  const storedReadValue = getReadValue();
  const exists = storedReadValue.find(bookId => bookId === id);
  if (!exists) {
    storedReadValue.push(id);
    localStorage.setItem('read-books', JSON.stringify(storedReadValue))
  }


}
const getWishValue = () => {
  const storedWishValue = localStorage.getItem('wish-books')
  if (storedWishValue) {
    return JSON.parse(storedWishValue);
  }
  return [];
}
const saveWishValue = id => {
  const storedWishValue = getWishValue();
  const exists = storedWishValue.find(bookId => bookId === id);
  if (!exists) {
    storedWishValue.push(id);
    localStorage.setItem('wish-books', JSON.stringify(storedWishValue))
  }


}
export {getReadValue, saveReadValue, getWishValue,saveWishValue }