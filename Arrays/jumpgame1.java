class Solution {
    public boolean canJump(int[] nums) {
        int lastgoodIndexposition=nums.length-1; 
        // instead of going form the front we started from back
        // lastgoodIndexposition keeps the index from where we can easily reach the last 
        //eg {1,2,4,6} from 4 we can go to 6 eg {1,2,0,8} but here we cant go form 0 to 8
        for(int i=nums.length-1;i>=0;i--)  // rev loop
        {
            if(i+nums[i]>=lastgoodIndexposition) // position, index of i+ val at that i basically standing on the index i if we add the val we can 
                                                 //get the max jump and if the jump surpass lastgoodIndexposition them it okay
            {
                lastgoodIndexposition=i; // if it does then surpass inc lastgoodIndexposition so that next element can b checked 
        }
        }
        return lastgoodIndexposition==0; // if it is not able to surpass then return 0 in lastgoodIndexposition coz its a bool and if we give zero in bool its false
    }
}