public class ChildrenSum {
    public static void main(String[] args) {
        System.out.println("hello Tree's");
    }
}

// for leetcode  https://leetcode.com/problems/change-the-root-of-a-binary-tree/

//    Think of the parent pointer as the next pointer in a Linked List. Follow the parent pointer, climb up the list starting from the leaf node, and swap old parent with new parent.
//
//        For every node:
//
//        Save the old parent as a variable for later use
//        Point the parent pointer to the new parent (initially set to null)
//        Before we reset the right child and left child, clean the left and right children if they point to the new parent
//        Node original_root;
//
//public Node flipBinaryTree(Node root, Node leaf) {
//        original_root = root;
//        return helper(leaf, null); // the new parent of the leaf node must be null
//        }
//
//public Node helper(Node node, Node new_parent) {
//        Node old_parent = node.parent;
//        node.parent = new_parent;
//
//        if (node.left == new_parent) node.left = null;
//        if (node.right == new_parent) node.right = null;
//
//        if (node == original_root) return node;
//
//        if (node.left != null) node.right = node.left;
//        node.left = helper(old_parent, node);
//
//        return node;
//        }



// For the Striver vid

// 🥥 if both children sum is less than parent, make children's value to parent's value.
// 🥥 if both children values sum is greater than or equal to parent, make parent's value to children's sum.
// 🥥 recursively go left and right. Traversal type: DFS.
// 🥥 when coming back up the tree, take children sum and replace it in parent.
// 🥥 at any point we reach null, just return (base case)
// 🥥 Intuition: while going down, increase the children values so we make sure to never fall short, then all we have to do is sum both children and replace it in parent.
//class Tree
//{
//    //Function to check whether all nodes of a tree have the value
//    //equal to the sum of their child nodes.
//    public static int isSumProperty(Node root)
//    {
//
//        if(root==null) // base case
//            return 0;
//        int child=0; // why will explain wait for it
//
//        // now we are going from up to down with updated new root val
//        if(root.left!=null)
//        {
//            child+=root.data;
//        }
//        if(root.right!=null)
//        {
//            child+=root.left;
//        }
//
//        // checking the condition if the root is big or child is big and update the val
//        // updating from upto dowm is done
//        if(child>root.data)
//            root.data=child;
//
//        else
//        {
//            if(left!=null)
//                root.left.data=root.data;
//
//            if(right!=null)
//                root.right.data=root.data;
//        }
//
//        isSumProperty( root.left);
//        isSumProperty( root.right);
//
//        // after the call for leaf is made these condtions will be executed before it returns to pre call
//        // now backtracking updating from down to up
//        // leafs will be ignored due to the codtions i will write
//
//        int fUpdate=0;
//        if(root.left!=null)
//            fUpdate=root.left.data;
//        if(root.right!=null)
//            fUpdate=root.right.data;
//        if(root.right !=null || root.left!=null)
//            root.data=fUpdate;
//
//
//    }
//}