import java.io.*;
import java.util.*;
public class nextGreaterRight {
    public static void main(String[] args) {
        Scanner scn=new Scanner(System.in);
        int  n=scn.nextInt();
        int arr[]=new int[n];
    for(int i=0;i<n;i++)
    {
        arr[i]=scn.nextInt();
    }
    Stack<Integer>st=new Stack<>();
int ge[]=new int[n];
ge[n-1]=-1;
st.push(arr[n-1]);
for(int j=arr.length-2;j>=0;j--)
{
    while(st.size()>0 && arr[j]>=st.peek())
    st.pop();

    if(st.size()==0)
    ge[j]=-1;
    else
ge[j]=st.peek();

    st.push(arr[j]);

}
  for(int i=0;i<ge.length;i++)
  {
    System.out.print(ge[i] +" ");
  }
    
    } 
}

