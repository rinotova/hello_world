function sumNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total;
}

module.exports = sumNumbers;
