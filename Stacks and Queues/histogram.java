import java.io.*;
import java.util.*;
 public class histogram {
    public static void main(String[] args) {
        Scanner scn=new Scanner(System.in);
        int n =scn.nextInt();
        int arr[]=new int [n];
for(int i=0;i<n;i++)
{
    arr[i]=scn.nextInt();
}
Stack<Integer>st=new Stack<>();
// smaller on right 
int rs[]=new int [arr.length]; 
 rs[arr.length-1]=n;
 st.push(arr.length-1); // index push karo 
 for(int i=arr.length-2;i>=0;i--)
 {
    while(st.size()>0 && arr[i]<=arr[st.peek()]) // till the ele is smalller and size is smaller pop it out
    {
        st.pop();

    }
    if(st.size()==0)   //if nothing is there then put 0
    {
        rs[i]=n;
    }
    else 
    {
        rs[i]=st.peek(); // now check the peek to see the smaller 

    }
    st.push(i);  // after all push the element 
    System.out.print(rs[i] +" ");

 }
System.out.println();
 // smaller on left
 while (!st.isEmpty()) st.pop();
 //st=new Stack<>(); // coz upper stack can have rep values or left over 
 int ls[]=new int [arr.length];
 ls[0]=-1;
 st.push(0); // index push karo 
 for(int i=1; i<arr.length;i++)
 {
    while(st.size()>0 && arr[i]<=arr[st.peek()]) // till the ele is smalller and size is smaller pop it out
    {
        st.pop();

    }
    if(st.size()==0)   //if nothing is there then put 0
    {
        ls[i]=-1;
    }
    else 
    {
        ls[i]=st.peek(); // now check the peek to see the smaller 

    }
    st.push(i);  // after all push the element 
    System.out.print(ls[i] +" ");

 }

    // area logic
    int marea=0;
    for(int j=0;j<arr.length;j++)
    {
        int width=rs[j]-ls[j] -1; // now 2 index will make a block so  kita 
      int   area=arr[j]*width;
      if(area>marea)
      marea=area;
    }
System.out.println(marea);
    }

 }


//[2,1,5,6,2,3]
// [2,1,5,6]   ---> rs 0 0 0 1    ---->ls 0 0 1 2 
 // main point to note was the rs will be n and ls will be -1 be mindful next time