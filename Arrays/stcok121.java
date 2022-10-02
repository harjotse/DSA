public class Solution {
    public int maxProfit(int prices[]) {
       
        int maxpro=0;
        int max=0;
      
        for(int i=prices.length-1;i>=0;i--)
        {
            if(max<prices[i])
            {
              max=prices[i]; }
            int pro=Math.abs(prices[i]-max);
           if (maxpro<pro)
           {
               maxpro=pro; }
        }
        return maxpro;
        
        }
}
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// [7,1,5,3,6,4] go  form back take mac as 4 and minus it from rest and if bigger than 4 is found upadte max and move use
// abs to prevent -ve profit 