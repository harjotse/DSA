// class Solution {
//     public int[] rearrangeArray(int[] nums) 
//     {
//      //    int k=0;
//      //    int j=0;
//      //     ArrayList<Integer> ans=new  ArrayList< Integer>();
//      // ArrayList<Integer> listPos=new  ArrayList< Integer>();
//      //    ArrayList<Integer> listNeg=new  ArrayList< Integer>();
//      //   for(int i =0;i<nums.length;i++)
//      //   {
//      //       if (nums[i]<0)
//      //       {
//      //           listNeg.add(nums[i]); }
//      //       else
//      //       {
//      //           listPos.add(nums[i]); }
//      //   }
//      //    for(int i=0;i<(nums.length)/2;i++){
//      //    ans.add(listPos(i));
//      //     ans.add(listNeg(i));
//      //    }
//      //    return ans;
        
//     }
// } 
//bruteforce
class Solution {
    // TC : O(n)
    // SC: O(n)
    public int[] rearrangeArray(int[] nums) {
        int len = nums.length;
        int[] ans = new int[len];
        int positiveIndex = 0; //pointer 1 for +ve
        int negativeIndex = 1;//pointer 2  for -ve 
        for(int i=0;i<len;i++){
            if(nums[i]>0){ 
                ans[positiveIndex] = nums[i]; // at +ve at odd index and yes you can add elements at random postions in array at index
                positiveIndex += 2;
            } else {

                ans[negativeIndex] = nums[i]; //at -ve elements at even positions
                negativeIndex += 2;
            }
        }
        return ans;
    }
}
//optimal

//https://leetcode.com/problems/rearrange-array-elements-by-sign/
//https://leetcode.com/submissions/detail/715513238/