class binarySearch {
public static void main(String[] args) {
    int arr[]={11,22,33,44,55,66,77,88,789};
    int target=33;
        int start=0;
      int end=arr.length-1;
      int indx=0;
        while(start<=end)  //  nums = [-1,0,3,5,9,12], target = 9
        {
             int mid =start+end/2;  // 9
                          if(arr[mid]==target) 
                          { 
                            System.out.println(mid); 
                          }
                   else if(arr[mid] <target) //
                    {
                       start=mid+1; // s=5 e=9
                      }  
                    
                      else //if(arr[mid]>target)
                        {
                          end=mid-1;  
                          }
                          
                           //indx=start;
         }
   System.out.println(-1);
}
}


