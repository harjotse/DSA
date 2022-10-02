class Solution {
   /**
   * TC: O(n)
   * SC: O(H), H->height for recursion + O(n) (for result)
   */
    List<Integer> res;
    public List<Integer> boundaryOfBinaryTree(TreeNode root) {
        res = new ArrayList<>();
        if(root==null) return res;
        
        // No brainer, just go in the order, what the questions asks: 
        // root->left_boundary->leaves->right_boundary(reverse) i.e. anti-clockwise
        // the methods are called in exactly the same order 
        res.add(root.val);
        findLeft(root.left); // as left boundary will consist of left-subTree (mentioned in the rules)
        findLeaves(root, root);
        findRight(root.right); // similar rule for right boundary as it was for left. Here we will add nodes in reverse
        return res;
    }
    
    /**
        this is modified version of preorder traversal.
        Since for all left boundary nodes, we are going top to bottom.
        So the node comes first, then if node.left is present else node.right if present.
        Also ommit any leaves for now (where node.left==null && node.right==null)
    */
    public void findLeft(TreeNode node) {
        if(node!= null && (node.left!= null || node.right!=null)) {
            res.add(node.val);
            if(node.left!=null)
                findLeft(node.left);
            else
                findLeft(node.right);
        }
    }
    
        /**
        this is modified version of postorder traversal.
        Since for all leaves boundary nodes, we are going left to right.
        Note: need to check if root!=leaves, otherwise we will be add it twice. ex: [1]
    */
    public void findLeaves(TreeNode node, TreeNode root) {
        if(node!=null) {
            findLeaves(node.left, root);
            findLeaves(node.right, root);
            if(node.left == null && node.right==null && node!=root)
                res.add(node.val);
        }
    }
    
    /**
        Here the intuition is we need to add the right boundary's
        nodes in bottom up fashion.
        so first we go to the last but 1 level (since we don't want to add the leaves again)
        
        If right node is present go right else the rightmost left nodes will be part of this boundary
    
    */
    public void findRight(TreeNode node) {
        if(node!=null) {
            if(node.right!=null)
                findRight(node.right);
            else
                findRight(node.left);
            if(node.left!=null || node.right!=null)
                res.add(node.val);
        }
    }   
}

















class Solution {
    public List<Integer> boundaryOfBinaryTree(TreeNode root) {
       
        list.add(root.val);
        if(root.left != null || root.right != null) {
            leftBoundry(root.left, list);
            addLeaves(root, list);
            rightBoundry(root.right, list);
        }
        return list;
    }
    
    private void leftBoundry(TreeNode root, List<Integer> list) {
        while(root != null && (root.left != null || root.right != null)) {
            list.add(root.val);
            if(root.left != null)
                root = root.left;
            else
               root = root.right; 
        }
    }
    
    private void addLeaves(TreeNode node, List<Integer> list) {
        if(node != null && (node.left != null || node.right != null)) {
            addLeaves(node.left, list);
            addLeaves(node.right, list);
        } else if(node != null)
            list.add(node.val);
    }
    
    private void rightBoundry(TreeNode root, List<Integer> list) {
        Stack<Integer> stack = new Stack<>();
        while(root != null && (root.left != null || root.right != null)) {
            stack.push(root.val);
            if(root.right != null)
                root = root.right;
            else
                root = root.left;
        }
        while(!stack.isEmpty())
          list.add(stack.pop());
    }
    
}
