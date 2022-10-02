public class Main {
    public static void main(String[] args) {
        int spaceEnd=5/2;
        int starEnd=1;
        for(int i=1;i<=5;i++)
        {
            for(int j=1;j<=spaceEnd;j++)
            {
                System.out.print("\t");
            }
            for(int k=1;k<starEnd;k++)
            {
                System.out.print("*\t"); 
            }
            if(i<=5/2)
            {
            spaceEnd--;
            starEnd+=2;
            }
            else
           {
            spaceEnd++;
            starEnd-=2;
           }
		     System.out.println();
            }
        }
    
}

