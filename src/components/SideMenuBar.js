import React, { useState } from 'react'
import { Link } from 'gatsby'
import metaData from '../../postMetadata.json'
import { TreeItem, TreeView } from '@material-ui/lab'
import { ExpandMore as ExpandMoreIcon,
        ChevronRight as ChevronRightIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '1rem'
  },
  child:{
    
  }
})

const SideMenuBar = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  }

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  }

  const renderTree = (node, i) => (
    node.type === "post" ? 
    <Link to={`/${node.path}`}>
      <TreeItem className={classes.child} key={i} id={node.id} nodeId={node.id} label={node.title} >
        { 
          node.children ? 
            node.children.map((node, i) => renderTree(node, i)) :
            null
        }
      </TreeItem> 
    </Link> :
    <TreeItem className={classes.child} key={i} id={node.id} nodeId={node.id} label={node.title} >
    { 
      node.children ? 
        node.children.map((node, i) => renderTree(node, i)) :
        null
    }
    </TreeItem>
)


  return (
    <div className='sideMenuBar'>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon/>}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon/>}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        {metaData.categories.map((node, i) => renderTree(node, i))}
      </TreeView>
    </div>
  )
}
export default SideMenuBar