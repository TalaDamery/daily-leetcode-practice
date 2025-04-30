class Solution {
    public int longestPalindrome(String s) {
        HashMap<Character, Integer> map = new HashMap();
        int count = 0;
        boolean flag = false;

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        for (int freq : map.values()) {
            if (freq % 2 == 0) {
                count += freq;
            } else {
                count += freq - 1;
                flag = true;
            }
        }

        if (flag) {
            count += 1;
        }

        return count;
    }
}