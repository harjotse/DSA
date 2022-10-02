// class Solution {
//     public int maxSubArray(int[] nums) {
//         int max=nums[0];
//         int sum=0;
//         for(int i =0;i<nums.length;i++)
//         {
//             sum+=nums[i];
//             if (sum>max)
//                 max=sum;;
//             if(sum<0)
//                 sum=0;
//         }
//         return max;
//     }
// }
// [1,4,6,7,-,4]

//  now take an arr with 2 var max and sum now we dont have to give back the arr
// only max sum is req
// now we will traverse an arr 
// max= arr[0] because it should have a element its given
// now sum =nums[i] now if the sum is less than 0 ie -ve make it zero hence it will not be considered 
// but if sum is +ve then will be condsidered
// now when the sum excededs the max its given sum val and hence we return max



import java.io.*;
import java.util.*;
class Skadanealgomaxsubarr
{
    public int maxSubArray(int[] nums) {
        int sum=0;
        int max=nums[0];
       
        for(int i =0;i<nums.length;i++)
        {
            sum+=nums[i];
            if(sum<1)
               sum=0;
               if(sum>max)
               max=sum; 
        }
        return max;
    }
public static void main ()
{  Scanner scn = new Scanner (System.in);
System.out.print("enter the size ");
int n= scn.nextInt();
System.out.print("enter the element");
    int [] nums =new int [n];
  for(int i =0;i<n;i++){

        nums[i]=scn.nextInt();
    }
    }
}