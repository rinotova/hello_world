function sumNumbers(numbers) {
  let total = 0;
  
  if (numbers?.length) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
  }

  return total;
}

module.exports = sumNumbers;
