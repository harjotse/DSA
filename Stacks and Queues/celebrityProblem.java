import java.util.*;
import java.io.*;
public class celebrityProblem 
{
 public static void main(String[] args) {
    Scanner scn=new Scanner(System.in);
   int n=scn.nextInt();
   int arr[][]=new int [n][n];
   for(int i =0;i<n;i++)
   {
    for(int j =0;j<n;j++)
    {
        arr[i][j]=scn.nextInt();
    }
   }
   // fill in stack to compare 
   Stack<Integer> st=new Stack<>();   
   for(int i=0;i<n;i++)
{
    st.push(i);    // in stack there be for n=5 -----> 4 3 2 1 0 
}

while(st.size()>=2) // why 2 coz compare can be done in 2 only not  in 1  now we are poping out 
{
    int i=st.pop();
    int j=st.pop();
    if(arr[i][j]==1)
    {
        // i is not a cele coz i knowns j
        st.push(j);
    }
else
{
    // j is not a cele coz j knowns i
    st.push(i);
}
}
// System.out.println(st.peek() +" stack");
/// now stack has 1 ele that is cele but now we will cnf if it is really a cele or not 
int pos=st.pop();
for(int i =0;i<arr.length;i++){
    if(i!=pos)
  {
    if(arr[pos][i]==1 || arr[i][pos]==0) // i=0 pos=2 2,0 and 0,2 
    {
System.out.println("None");
return;
    }
} 
}
System.out.println(pos);
 }   
}
