export function fillArrayOfConsecutiveNumbers(length: number, startingFrom = 1): number[] {
  const array = [];

  for (let i = startingFrom; i <= length; i++) {
    array[i] = i;
  }

  return array;
}
