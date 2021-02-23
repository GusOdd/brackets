module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  const strArr = str.split('');
  const configArr = bracketsConfig.flat();
  const result = [];
  for (let i = 0; i < strArr.length; i++) {
    if (configArr.indexOf(strArr[i]) === configArr.lastIndexOf(strArr[i])) {
      if (configArr.indexOf(strArr[i]) % 2 === 0) {
        result.push(strArr[i]);
      } else {
        const last = result.pop();
        if (last !== configArr[configArr.indexOf(strArr[i]) - 1]) {
          return false;
        }
      }
    } else {
      if (result.indexOf(strArr[i]) === -1) {
        result.push(strArr[i]);
      } else if (result.lastIndexOf(strArr[i]) === result.length - 1) {
        result.pop();
      } else {
        return false;
      }
    }
  }
  return !result.length;
}
