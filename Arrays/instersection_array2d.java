class Solution {

public List<Integer> intersection(int[][] nums)
 {
    List<Integer> ans = new ArrayList<>(); //arraylist
    Map<Integer,Integer> map= new HashMap<>(); //map
    int ref=nums.length; // to chk freq 
    for(int i=0;i<nums.length;i++) // row //2d loop
    {
        for(int j=0;j<nums[i].length;j++)// col
        {
            if(map.containsKey(nums[i][j])) 
            {
                map.put(nums[i][j],map.get(nums[i][j])+1);    //( no , freq )  , chk if present upadte freq else , initially its zero now 1 and insitally map was also empty             
            }
            else{
                map.put(nums[i][j],1); //not present add it 
            }
        }
    }
    for(Integer u:map.keySet())
    {
        if(map.get(u)==ref){
            ans.add(u);
        }
    }
    Collections.sort(ans);
    return ans;
}
}