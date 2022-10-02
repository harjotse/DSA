import java.io.*;
import java.util.*;
class finddig
{
    public static void main(String[] args) {
        Scanner scn= new Scanner(System.in);
        int n= scn.nextInt();
        int arr[][]= new int [n][n];
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                arr[i][j]=scn.nextInt();
            }
        }
for(int g=0;g<arr.length;g++)
{
    for(int j=g,i=0; j<arr.length;j++,i++)
    {
        System.out.println(arr[i][j]);
    }
}
    }
}