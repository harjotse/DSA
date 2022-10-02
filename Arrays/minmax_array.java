public class minmax_array {
    public static void main(String args[])
    {
        int arr[]={1,2,45,77,8};
        int min =0;
                int max=0;
                for(int i =0;i< arr.length;i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                    }
                }
                    System.out.println("max is "+max);
        for(int i =0;i< arr.length;i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        System.out.println("min is "+min);
    }
}
