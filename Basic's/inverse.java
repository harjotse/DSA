class inverse
{
    public static void main(String[] args) {
        int n=564213;
        int num=0;
        while(n!=0)
        {
         int c=n%10;
         int div= (int)(c * Math.pow(10,c));
         num=num+div;
         n=n/10;
        }
        System.out.println(num);
    }
}