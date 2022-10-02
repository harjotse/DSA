import java.util.*;
import java.io.*;
public class wave 
{
    public static void main(String args[])
    {
    Scanner scn= new Scanner(System.in);
    int r=scn.nextInt();
    int c=scn.nextInt();
    int arr[][]=new int [r][c];
    for(int i=0;i<r;i++)
    {
        for(int j=0;j<r;j++)
        {
            arr[i][j]=scn.nextInt();
        }
    }
    for(int j=0;j<c;j++)
    {
        if(j%2==0)
        {
            for(int i=arr.length;i>=0;i--)
            System.out.print(arr[i][j]+" ");
        }
        else
        {
            for(int i=0;i<r;i++)
            System.out.print(arr[i][j]+" ");
        }
        
        
    }
}
}
    

