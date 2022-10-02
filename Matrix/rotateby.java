import java.util.*;
import java.io.*;
class rotate
{
    public static void main(String[] args) {
      Scanner scn =new Scanner(System.in) ;
      int r=scn.nextInt();
      int c=scn.nextInt();
      int arr[][]=new int [r][c];
      for(int i=0;i<arr.length;i++)
      {
        for(int j=0;j<arr[0].length;j++)
        {
            arr[i][j]=scn.nextInt();
        }
      }

      for(int i=0;i<arr.length;i++) //tr
      {
        for(int j=i;j<arr[0].length;j++)
        {
            int temp=arr[i][j];
            arr[i][j]=arr[j][i];
            arr[j][i]=temp;
        }
      }
      for(int i=0;i<arr.length;i++)
      {
        int si=0;
        int ei=arr[i].length-1;
        int temp=arr[i][si];
        arr[i][si]=arr[i][ei];
        arr[i][ei]=temp;
        si++;
        ei--;
        }
      // op
for(int i=0;i<arr.length;i++)
{

        for(int j=0;j<arr[0].length;j++)
        {
            System.out.print(arr[i][j]+" "); 
        }
        System.out.println();
      }
      
   System.out.println();
    }
}