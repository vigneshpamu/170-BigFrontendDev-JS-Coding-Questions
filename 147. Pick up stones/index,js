/**
 * @param {number} n
 * @return {'A' | 'B' | null}
 */
function canWinStonePicking(n) {
  // your code here
  if (n <= 0) return null

  const dp = Array(n + 1).fill(false)
  dp[1] = false // A picks last → loses → B wins
  if (n >= 2) dp[2] = true // A picks 1 → B picks 1 → A wins
  if (n >= 3) dp[3] = true // A picks 2 → B picks 1 → A wins

  for (let i = 4; i <= n; i++) {
    dp[i] = !dp[i - 1] || !dp[i - 2]
  }

  return dp[n] ? 'A' : 'B'
}

// Ref - https://chatgpt.com/c/68262a78-749c-8004-875c-658f09852241
