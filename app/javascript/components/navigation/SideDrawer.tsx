import {
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as React from "react";
import { useStyles } from "./SideDrawer.style";
import { Routes } from "components/Router";
import { SideDrawerItem } from "./SideDrawerItem";

interface SideDrawerProps {
  isOpen: boolean;
  onCloseDrawer: () => void;
}

function SideDrawer(props: SideDrawerProps): JSX.Element {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={props.isOpen}
      onClose={props.onCloseDrawer}
    >
      <div className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={props.onCloseDrawer}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <div role="presentation" onClick={props.onCloseDrawer}>
        <List>
          <SideDrawerItem
            text="Home"
            icon={<HomeOutlinedIcon />}
            to={Routes.Home}
          />
          <SideDrawerItem
            text="Admin Home"
            icon={<HomeIcon />}
            to={Routes.Admin.Home}
          />
        </List>
        <Divider />
      </div>
    </Drawer>
  );
}

export { SideDrawer };
