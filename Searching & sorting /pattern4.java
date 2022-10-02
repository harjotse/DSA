public class pattern4 {
    public static void main(String[] args) {
        int space=0;
        int start=5;
        for(int i=0;i<5;i++)
        {
            for(int j=1;j<=space;j++)
            {
                System.out.print("\t");

            }
            for(int k=1;k<=star;k++)
            { 
                System.out.print("\t*");
            }
            space++;
            star--;
            System.out.println();
        }

    }
}
