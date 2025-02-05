function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result: number; 
try {
  result = add(1, '2');
} catch (e) {
  console.error(e);
}
console.log(result); // Uncaught Error: Both arguments must be numbers