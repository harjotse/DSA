class Sol {
    public int smallestRangeII(int[] nums, int k) {
        int arr1[] = new int[nums.length];
        int range=1;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i; j < nums.length; j++)
                if (nums[i] >= k) {
                    arr1[j] = nums[i] - k;
                } else {
                    arr1[j] = nums[i] + k;
                }

            range = arr1[arr1.length - 1] - arr1[0];

        }
        return  range;
    }
}

