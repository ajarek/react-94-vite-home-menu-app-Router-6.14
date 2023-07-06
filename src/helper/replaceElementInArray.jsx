export const replaceElementInArray = (arr, position, newValue) => {
  if (position >= 0 && position < arr.length) {
    return arr.map((element, index) => {
      if (index === position) {
        return newValue
      } else {
        return element
      }
    })
  } else {
    return arr
  }
}
