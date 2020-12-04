import { v4 } from 'uuid'

const createTreeData = (postInfoArray) => {
  const treeData = []
  const startPosition = 1

  postInfoArray.forEach( postInfo => {
    traverseDownPath(postInfo, treeData, startPosition)
  })

  return treeData
}

const traverseDownPath = ({ postTitle, path }, siblings, position) => {
  const nextPosition = path.indexOf('/', position) + 1
  const nodeTitle = path.slice(position, nextPosition - 1)
  const nodeFound = siblings.find(e => e.title === nodeTitle)

  if(nodeFound) {
    traverseDownPath({ postTitle, path }, nodeFound.children, nextPosition)
  }
  else{
    const isPost = nextPosition === path.length
    const newNode = {
      type: isPost ? 'post' : 'category',
      title: isPost ? postTitle : nodeTitle,
      id: v4(),
      children: [],
      location: isPost ? path : null
    }
    siblings.push(newNode)

    if(!isPost) {
      traverseDownPath({ postTitle, path }, newNode.children, nextPosition)
    }
  }
}

export default createTreeData