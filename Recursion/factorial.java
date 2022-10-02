class Solution{
    static long factorial(int N)
    {
//       if (N==0)
//       return 1;
//   return N*factorial(N-1);
 // above is the recurive code    
        int i,fact=1;
        for(i=1;i<=N;i++)
         fact = fact*i;
        return fact;
        // above is the iterative code limt is up to 13 only 
    }
    
}


 