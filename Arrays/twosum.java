
Rclass Solution {
    public int[] twoSum(int[] nums, int target) 
    {
         int comp ;
       for(int i=0;i<=nums.length;i++)
       {
           for(int j=i+1;j<=nums.length;j++)
           {
               comp=target-nums[i];
           if(nums[j]==comp){
               return new int []{i,j};
           }
           }
               
       }
       
throw new IllegalArgumentException("not found");
        }
}
