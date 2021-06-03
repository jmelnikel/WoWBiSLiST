export const reformatBaseData = (resultsArray) => {
  const reformattedBaseData = []
  for (let array of resultsArray) {
    array = array.map((itemObject) => {
      let reformattedArray = {}
      const { data } = itemObject;

      reformattedArray["id"] = data.id;
      reformattedArray["show"] = true;
      reformattedArray["level"] = data.level;

      return reformattedArray;
    })
    reformattedBaseData.push(array)
  }
  return reformattedBaseData.flat();
};

export const playAlert = () => {
  const audio = document.getElementById('audioAlert');
  audio.play()
};

export const splitItemsData = (itemsData, item_class) => {
  return itemsData.filter((item) => {
    return item.preview_item.item_class.name === item_class
  })
}