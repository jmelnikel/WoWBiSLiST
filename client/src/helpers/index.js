const reformatBaseData = (resultsArray) => {
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

export default reformatBaseData;