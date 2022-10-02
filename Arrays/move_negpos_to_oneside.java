public class move_negpos_to_oneside
{
    public static void main(String args[]) {
        int arr[] = {-5, 6, 3, -3, 2};
        int n = arr.length;
        int fast = 0;
        int slow = n - 1;
        if (arr[fast] < 0 && arr[slow] > 0)
        {
            fast++;
            slow--;

        }
        else if (arr[fast] > 0 && arr[slow] < 0) {
            int temp;
            temp = arr[fast];
            arr[fast] = arr[slow];
            arr[slow] = temp;
            fast++;
            slow--;

        }
else if(arr[fast]<0&&arr[slow]<0)
        {
            fast++;
        } else if (arr[fast]>0&&arr[slow]>0)
        {
            slow--;
        }
System.out.print(arr);
    }
}
