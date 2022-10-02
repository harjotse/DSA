import java.io.*;
import java.util.*;

class  SmallerNoFollowPattern
{
    public static void main(String[] args) {
        Scanner scn=new Scanner(System.in);
        String st=scn.nextLine();
        Stack<Integer> s =new Stack<>();      
int num=1;
for(int i=0;i<st.length();i++)
{
    if(st.charAt(i)=='D' || st.charAt(i)=='d')   // if d found then just push 
    {
        s.push(num);
        num++; 
    }
    else  if(st.charAt(i)=='I' || st.charAt(i)=='i')
    {
        s.push(num);  // if i found then start poping out 
        num++;
        while(s.size()>0)
        {
            System.out.print(s.pop()); 
        }
    }
}
s.push(num);
while(s.size()>0)
System.out.print(s.pop());
        }
}




// GFG SOl 
// class Solution{
//     static String printMinNumberForPattern(String st){
//         Stack<Integer> s =new Stack<>();   
//         StringBuilder str=new StringBuilder();
//         String stt = new String("") ;
        
//   int num=1;

  
// for(int i=0;i<st.length();i++)
// {
//     if(st.charAt(i)=='D' || st.charAt(i)=='d')   // if d found then just push 
//     {
//         s.push(num);
//         num++; 
//     }
//     else  if(st.charAt(i)=='I' || st.charAt(i)=='i')
//     {
//         s.push(num);  // if i found then start poping out 
//         num++;
//         while(s.size()>0)
//         {
            
//            int cat = s.peek();
//             s.pop() ;
//            stt =  Integer.toString(cat) ;
//             str.append(stt) ;
//         }
//     }
// }
// s.push(num);
// while(s.size()>0){
// // System.out.print(s.pop());
//  int cat = s.peek();
//             s.pop() ;
//            stt =  Integer.toString(cat) ;
//             str.append(stt) ;
// }
// return str.toString();

//         }
// }
