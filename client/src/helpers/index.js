export const reformatBaseData = (resultsArray) => {
  const reformattedBaseData = []
  for (let array of resultsArray) {
    array = array.map((itemObject) => {
      let reformattedArray = {}
      const { data } = itemObject;
      const { id, level, item_class, quality } = data;

      reformattedArray["id"] = id;
      reformattedArray["show"] = true;
      reformattedArray["level"] = level;
      reformattedArray["item_class"] = item_class;
      reformattedArray["quality"] = quality;

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