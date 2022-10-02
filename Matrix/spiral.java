import java.util.*;
import java.io.*;
class spiral {
    public static void main(String args[]) {
        Scanner scn = new Scanner(System.in);
        int r = scn.nextInt();
        int c = scn.nextInt();
        int arr[][] = new int[r][c];
        int count = 0;
        int tne = r * c;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                arr[i][j] = scn.nextInt();
            }
        }
// import done
        // main code starts
        int minr = 0;
        int maxr = arr.length - 1;
        int minc = 0;
        int maxc = arr[0].length;
      //  while (count < tne) { //we can use the while loop here but we can apply in condition
//left row
            for (int i = 0, j = minc; i < arr.length && count < tne; i++)  // contion &&
            {
                System.out.println(arr[i][j]);
                count++;
            }
            minc++;


// bottom coloumn 
            for (int i = maxr, j = minc; j < arr[0].length && count < tne; j++)  // condtiom
            {
                System.out.println(arr[i][j]);
                count++;
            }
            maxr--;


// right row

            for (int i = maxr, j = maxc; i > 0 && count < tne; i--)
            {
                System.out.println(arr[i][j]);
                count++;
            }
            maxc--;


// upper col

            for (int j = maxc, i = minr; j >= minc && count < tne; i++)
            {
                System.out.println(arr[i][j]);
                count++;
            }
            minr++;
        }
    }
//}
