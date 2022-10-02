import java.io.*;
import java.util.*;
public class nextGreaterRighttwo {
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
int pos=0;
st.push(0);
for(int j=1;j<arr.length; j++)
{
    while(st.size()>0 && arr[j]>=arr[st.peek()])
    {
 pos=st.peek();
ge[pos]=arr[j];
        st.pop();
    }
    st.push(j);
  

    if(st.size()>0)
 {
    pos=st.peek();
    ge[pos]=-1;
    st.pop();
 }


  for(int i=0;i<ge.length;i++)
  {
    System.out.print(ge[i] +" ");
  }
    
    } 
}
}

