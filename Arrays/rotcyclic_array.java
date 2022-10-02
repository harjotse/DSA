class Solution {
    public void rotate(int[] nums, int k)
    {
        k%=nums.length; // suppose k=13 so it will not be able to rotate coz size is only 5 suppose so we did 13%5=3 so k=3 will be in action
      reverse(nums, 0, nums.length-1);   // rev the array
          reverse(nums, 0, k-1);  //rev 1st half 
          reverse(nums, k, nums.length-1); // rev the 2nd half
        }
      public void reverse (int []nums, int start,int end) // java has no rev inbuild so we made it 
      {
          while(start<end)
          {
          int temp;
          temp=nums[start];
          nums[start]=nums[end];
        nums[end] =temp;
          start ++;
              end--;
      }
    }
}
