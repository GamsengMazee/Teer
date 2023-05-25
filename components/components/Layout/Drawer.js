import Mobile_Navigation from "./Mobile_Navigation";
import classes from "./drawer.module.css"



function Drawer(props) {
  let drawerClasses = classes.drawer;
  if(props.sideDrawer){
    drawerClasses = `${classes.drawer} ${classes.open}`
  }
  return (
    <div className={drawerClasses}>
      <Mobile_Navigation drawerClose={props.drawerClose}/>
    </div>
  )
}

export default Drawer