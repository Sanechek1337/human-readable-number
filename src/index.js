module.exports = function toReadable (number) {
  const dict = [
    ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  ]

  const numberArr = String(number).split('').map(digit => Number(digit)).reverse();
  let result = [];

  for (let i = 0; i < numberArr.length; i++) {
    if (i === 0) {
      if (numberArr[i] === 0 && numberArr.length === 1) {
        result.push('zero')}
      else {
        result.push(dict[0][numberArr[i] - 1])
      }
    }

    if (numberArr[i] === 0) continue;

    if (i === 1) {
      if (numberArr[i] === 1) {
        result = [];

        if (numberArr[i-1] === 0) {
          result.push(dict[2][0])
        }

        result.push(dict[1][numberArr[i - 1] - 1])}
      else {
        result.push(dict[2][numberArr[i] - 1])
      }
    }

    if (i === 2) {
      result.push(`${dict[0][numberArr[i] - 1]} hundred`)
    }
  }

  return result.reverse().filter(digit => digit !== undefined).join(' ');
}
