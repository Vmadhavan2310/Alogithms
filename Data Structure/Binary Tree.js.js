/* binary search tree */

class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null
  }
}

class BinarySearch{
  constructor(){
    this.root=null
  }

  IsEmpty(){
    return this.root===null
  }

  Insert(value){
    const newNode=new Node(value)
    if(this.IsEmpty()){
      this.root=newNode;
    }else{
      this.InsertNode(this.root,newNode)
    }
  }

  InsertNode(root,node){
    if(node.value<root.value){
      if(root.left==null){
        root.left=node
      }else{
        this.InsertNode(root.left,node)
      }
    }else{
      if(node.value>root.value){
        if(root.right==null){
          root.right=node
        }else{
          this.InsertNode(root.right,node)
        }
      }
    }
  }

  /* Search */
  search(root,target){
    if(!root){
      return false
    }
      if(root.value==target){
        return true
      }else if(target<root.value){
        return this.search(root.left,target)
      }else{
        return this.search(root.right,target)
      }
    
  }

  /* Pre-Order search */

  preOrder(root){
    if(root){
      console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
    }
  }

  /* In-Order traversal */
  Inorder(root){
    if(root){
      this.Inorder(root.left)
      console.log(root.value)
      this.Inorder(root.right)
    }
  }

  /* Postorder traversal */
  postOrder(root){
    if(root){
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }

  /* DFS */
  levelOrder(){
    let que=[]
    que.push(this.root)
    while(que.length){
      let curr=que.shift()
      console.log(curr.value)
      if(curr.left){
        que.push(curr.left)
      }
      if(curr.right){
        que.push(curr.right)
      }
    }
  }
  /* Min value */
  min(root){
    if(!root.left){
      return root.value
    }else{
     return this.min(root.left)
    } 
  }

  /* Max value*/
  max(root){
    if(!root.right){
      return root.value
    }else{
      return this.max(root.right)
    }
  }

  /* Delete Node */
  delete(value){
    this.root=this.deleteNode(this.root,value)
  }
  deleteNode(root,value){
    if(root==null){
      return root
    }
    if(value<root.value){
      root.left=this.deleteNode(root.left,value)
    }else if(value>root.value){
      root.right=this.deleteNode(root.right,value)
    }else{
      if(!root.left&&!root.right){
        return null
      }
      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }
      root.value=this.min(root.right)
      root.right=this.deleteNode(root.right,root.value)
    }
    return root;
  }
}

const BST=new BinarySearch()
console.log(BST.IsEmpty())
BST.Insert(5)
BST.Insert(7)
BST.Insert(2)
BST.Insert(9)
BST.Insert(10)
BST.Insert(20)
BST.Insert(40)
BST.Insert(80)
BST.Insert(1)
console.log(BST.min(BST.root))
console.log(BST.max(BST.root))
BST.delete(80)
console.log(BST.max(BST.root))
