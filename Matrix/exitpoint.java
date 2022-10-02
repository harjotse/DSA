import java.io.*;
import java.util.*;
public class exitpoint {
    public static void main(String[] args) 
    {
        Scanner scn=new Scanner(System.in);
      int r=  scn.nextInt();
      int dir=0;
int c=scn.nextInt();
int arr[][]= new int [r][c]; // matrix imported
for(int i =0;i<r;i++)
{
    for(int j =0;j<c;j++)
    {
        arr[i][j]=scn.nextInt();
    }
}

int j=0;
int i=0;
while(true){
dir=(dir+arr[i][j])%4; 
if(dir==0){
  j++;  
}
if(dir==1){
    i++;  
  }
  
  if(dir==2){
    j--;  
  }

  if(dir==3){
    i--;  
  }
  if(j<0){
    j++;
   break;
  }
  if(j==arr[0].length){
    j--;
   break;
  }
  if(i<0){
    i++;
   break;
  }
  if(i==arr.length){
    i--;
   break;
  }

}
System.out.println(i);
System.out.println(j);
    }
    
}
