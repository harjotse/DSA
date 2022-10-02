//{ Driver Code Starts
    import java.util.*;

    class MaxLenZeroSumSub
    {
    
        // Returns length of the maximum length subarray with 0 sum
    
        // Drive method
        public static void main(String arg[])
        {
            Scanner sc = new Scanner(System.in);
            int T = sc.nextInt();
            while (T > 0)
            {
                int n = sc.nextInt();
                int arr[] = new int[n];
                for (int i = 0; i < n; i++)
                    arr[i] = sc.nextInt();
    
                GfG g = new GfG();
                System.out.println(g.maxLen(arr, n));
                T--;
            }
        }
    }
    // } Driver Code Ends
    
    
    class GfG
    {
        int maxLen(int arr[], int n)
        {
            HashMap<Integer,Integer> list=new HashMap<>();   //15 -2 2 -8 1 7 10 23
            int mlen=0;
             int i=-1;
             int sum=0;
             list.put(i,sum);
             while(i<arr.length-1) 
             {
                 i++;
                 sum+=arr[i];
                 if(list.containsKey(sum)==false)
                    list.put(i,sum);
                 else
                 {
                    int len=i-list.get(sum);
                    if(mlen<len)
                    mlen=len;
                }
             }
             return mlen;
        }
    }