public class duplicate_in_Nplusone
{
    public int findDuplicate(int[] nums)
    {
        int num = 0;
        for (int i = 0; i < nums.length + 1; i++) {
            for (int j = i; j < nums.length + 1; j++)
                if (nums[i] == nums[j]) {
                    num = nums[i];
                }


        }
        return num;
    }
}