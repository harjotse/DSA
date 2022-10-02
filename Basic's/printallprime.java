

public class printallprime {
    public static void main(String[] args) {
        int arr[]={11,31,44,5,7,9};
        int count=0;
        int arr1[]=new int[arr.length];
        int j=0;
       for(int i=2;i*i<=arr.length;i++){
           if(arr[i]%i==0)
           {
           count++;
           }
       if(count<=2)
       {
      arr1[j++]=arr[i]; 
       }
}
for(int i=0;i<arr1.length;i++)
System.out.println(arr1[i]);
    }
}
