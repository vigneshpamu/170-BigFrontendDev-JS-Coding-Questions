/**
 * Check if a number is prime
 * @param {number} n
 * @return {boolean}
 */
function isPrime(n) {
  if (n <= 1) return false // 1 or smaller are not prime numbers
  if (n === 2) return true // 2 is the only even prime number
  if (n % 2 === 0) return false // other even numbers are not prime

  // Check divisibility up to the square root of n
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false // found a divisor
  }

  return true // no divisors, so the number is prime
}
