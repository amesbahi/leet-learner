// LeetCode #3: https://leetcode.com/problems/longest-substring-without-repeating-characters/

function longestSubstring(s) {
  // initialize start, hash map, and length
  let start = 0;
  let map = {};
  let len = 0;
  // iterate through the s; initialize end as our variable when iterating
  for (let end = 0; end < s.length; end++) {
    // if a character is already in our hash map, move the start to one position after the last
    // occurence of the repeated char
    if (map[s[end]] !== undefined) {
      start = Math.max(start, map[s[end]] + 1);
    }
    // save that char in our hash map and its index position
    map[s[end]] = end;
    // if our current substring is the longest without any repeating, reassign to length
    len = Math.max(len, end - start + 1);
  }
  // return length
  return len;
}

console.log(longestSubstring("abcbaca"));
