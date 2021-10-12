const arr = [1, 1, 1, 1, 1, 1, 1, 1, 8, 29, 30, 30, 35, 40, 80, 80, 80];
const num = 29;
const highlights = 10;

const table = arr.map((el, i) => {
  console.log({ val: el, dif: Math.abs(el - num) })
  return { val: el, dif: Math.abs(el - num) }
});

table.sort((a, b) => a.dif - b.dif);

const result = table.slice(0, highlights).map(({ val }) => val);
console.log(result)
