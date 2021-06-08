export const reformatBaseData = (resultsArray) => {
  const reformattedBaseData = []
  for (let array of resultsArray) {
    array = array.map((itemObject) => {
      let reformattedArray = {}
      const { data } = itemObject;
      const { id, level, item_class, quality, name } = data;

      reformattedArray["id"] = id;
      reformattedArray["show"] = true;
      reformattedArray["level"] = level;
      reformattedArray["item_class"] = item_class;
      reformattedArray["quality"] = quality;
      reformattedArray["name"] = name;

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

export const cleanBaseData = (data) => {
  for (let i = data.length - 1; i >= 0; i--) {
    const quality = data[i].quality.type;
    const name = data[i].name.en_US;
    if (
      quality === "POOR" ||
      quality === "COMMON" ||
      quality === "UNCOMMON" ||
      name.includes("TEST") ||
      name.includes("Test")
    ) {
      data.splice(i, 1);
    }
  }
  return data;
}