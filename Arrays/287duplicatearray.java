// approach 1
class Solution {
    public int findDuplicate(int[] nums) {
        Arrays.sort(nums); //sort it 
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i-1]) // now if 2 no in line are equal retuen nums[i]
                return nums[i];
        }

        return -1;
    }
}


//approach 2
class Solution {
    public int findDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<Integer>(); // make a set 
        for (int num : nums) // traverse array and put val in num
        { 
            if (seen.contains(num)) // chk if the num is in set or not 
                return num; // if yes return no 
            seen.add(num); // and add it in list 
        }
        return -1;// else not found 
    }
}



















