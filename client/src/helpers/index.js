const reformatBaseData = (resultsArray) => {
  const reformattedBaseData = []
  for (let array of resultsArray) {
    array = array.map((itemObject) => {
      let reformattedArray = []
      const { data, key } = itemObject;

      reformattedArray["id"] = data.id
      reformattedArray["level"] = data.level
      reformattedArray["required_level"] = data.required_level
      reformattedArray["href"] = key.href

      return reformattedArray;
    })
    reformattedBaseData.push(array)
  }
  return reformattedBaseData.flat();
};

export default reformatBaseData;