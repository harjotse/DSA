import java.awt.*;
import java.util.*;

public class kth_small_array
{
    public static void main(String args[]) {
//        Stack<Integer> s = new Stack<>();
//        int arr[] = {55, 66, 44, 35, 21, 688};
//        int N = arr.length;
//        int min = 0;
//        int i;
//        for (i = 0; i < arr.length; i++) {
//            if (arr[i] < min) {
//                min = arr[i];
//            }
//        }
//        int element=N - i - 1;
//        s.push(min);
//        System.out.print(s.pop(element));
// approach1
        ArrayList<Integer> list= new ArrayList<>();
        int K=2;
        int N= 4;
        list.add(99);
        list.add(77);
        list.add(999);
        list.add(52);
       Collections.sort(list);
        System.out.println(list.get(K));
// approach 2
    }
}
