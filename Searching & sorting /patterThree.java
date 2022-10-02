// imp one it will help in understanding the space management
public class patterThree {
    public static void main(String[] args) {
		 int spaceLimit=4;
        int starStart=1;
        for(int k=1;k<=5;k++)
        {
        for(int i=1;i<spaceLimit;i++)
        {
            System.out.print("\t"); // add space
        }
            for(int j=1;j<=starStart;j++) 
            {
                System.out.print("\t*");
            }
        spaceLimit--; //dec space
        starStart++; // inc star
		  System.out.println();
        }
    }
}


