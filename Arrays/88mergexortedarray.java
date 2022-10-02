class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
       int p1=0,p2=0,p3=0; // 3 pointer to move 3 rd p is for the new arr
        int arr [] = new int [m+n];// new arr to store val

        while (p1<m&& p2<n) // now to make sure the pointer dont exceeds the size of array
        {
            if(nums1[p1]<nums2[p2])
            {
                arr[p3]=nums1[p1];
                             p1++;
                            p3++;
            }
            else
            {
                arr[p3]=nums2[p2];
                p3++;
                p2++;
            }
        }
            while(p1<m)
            {
               arr[p3]=nums1[p1];
                             p3++;
                            p1++  ;
            }
            while(p2<n)
            {
                
                arr[p3]=nums2[p2];
                p3++;
                p2++;
            }
            for(int i=0;i<arr.length;i++)
            {
                 nums1[i]=arr[i];
            }
            }
}