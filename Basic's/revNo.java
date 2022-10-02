public class revNo {
    public static void main(String[] args) {
        int n=67483;
        int c=0;
        while(n!=0) // should not be equal to zero
        {    
            c=n%10;
            System.out.println(c);
            n=n/10;
        }
    }
}