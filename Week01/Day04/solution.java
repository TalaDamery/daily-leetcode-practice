class Solution {
    public String convertToTitle(int columnNumber) {
        StringBuilder s = new StringBuilder();
        while (columnNumber > 0) {
            columnNumber--;
            int digit = columnNumber % 26;
            char c = (char) ('A' + digit);
            s.append(c);
            columnNumber /= 26;
        }
        return s.reverse().toString();
    }
}
