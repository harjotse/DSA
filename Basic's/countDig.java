public class countDig {
    public static void main(String[] args) {
        int n=67483;
        int c=0;
        int count=0;
while(n!=0)
{
    int temp=n/10;
   count++;
}
int div=(int) Math.pow(10,count-1);

        while(n!=0) // should not be equal to zero
        {    
            c=n/div;
            System.out.println(c);
        }
    }
}
