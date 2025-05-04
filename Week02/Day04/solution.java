public class Solution {
    private int rot(int[] a, int[] b, boolean top) {
        int n = a.length;
        int x = top ? a[0] : b[0];
        int xa = 0;
        int xb = 0;

        for (int i = 0; i < n; i++) {
            int ai = a[i];
            int bi = b[i];

            if (x != ai && x != bi)
                return 0x1EE7C0DE;

            if (x == ai)
                xa++;
            if (x == bi)
                xb++;
        }

        return Math.min(n - xa, n - xb);
    }

    public int minDominoRotations(int[] a, int[] b) {
        int count = Math.min(rot(a, b, true), rot(a, b, false));
        return count == 0x1EE7C0DE ? -1 : count;
    }
}
