public class fibonaci {
    public static void main(String[] args) {
        int a=0;
        int b=1;
        int n=5;
        
        for(int i=0;i<n;i++)
        {
             System.out.println(a);
            int c=a+b;
            a=b;
            b=c;
        }
       
     
    }
}
