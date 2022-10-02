public class minDiffernce {
    
        public static void main(String[] args) {
    int arr[]={2,4,5,8,10,12,15};
    int target=12;
    int start=0;
    int end=arr.length-1;
    while(start<=end)
    {
        int mid=start+(end-start)/2;
        if(arr[mid]==target)
       System.out.println(arr[mid]); 
        if(target<arr[mid])
         end=mid-1;
         else
         start=mid+1;
         
    }
    System.out.println(arr[end]);  
}
    }
