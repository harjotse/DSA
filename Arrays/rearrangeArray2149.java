class Solution {
	// TC : O(n)
	// SC: O(n)
	public int[] rearrangeArray(int[] nums) {
		int len = nums.length;
		int[] ans = new int[len];
		int positiveIndex = 0;
		int negativeIndex = 1;
		for(int i=0;i<len;i++){
			if(nums[i]>0){
				ans[positiveIndex] = nums[i];
				positiveIndex += 2;
			} else {

				ans[negativeIndex] = nums[i];
				negativeIndex += 2;
			}
		}
		return ans;
	}
}
//https://leetcode.com/submissions/detail/716473485/
//https://leetcode.com/problems/rearrange-array-elements-by-sign/
//we did took 2 pointers one on from 0 index and other on 1 and both will move by 2 coz they will be leaving spaces for neg or pov 
//and we will take an array to fill the elements 
// yes we can fill elements on random places in array