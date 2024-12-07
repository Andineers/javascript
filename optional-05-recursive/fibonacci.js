function fibonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }

  const sequence = fibonacci(n - 1);
  const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextNumber);
  return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
