var cache = [];
function factorial(n) {
  if (cache[n]) return cache[n];

  if (n == 0 || n == 1) return 1;
  const result = factorial(n - 1) * n;

  cache[n] = result;

  return result;
}
​