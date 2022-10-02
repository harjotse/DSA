class isprime
{
    public static void main(String[] args) {
        int arr[]={11,31,44,5,7,9};
         int count=0;
        for(int i=1;i<arr.length;i++){
        {
            if(arr[i]%i==0)
            count++;
        }
        if(count>2)
        {
            System.out.println("not prime");

        }
        else
        System.out.println("not prime");
    }
}
}