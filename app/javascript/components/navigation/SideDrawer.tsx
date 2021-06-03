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
  console.log("[SideDrawer]", props);
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
      <List>
        <SideDrawerItem
          text="Admin Home"
          icon={<HomeIcon />}
          to={Routes.Admin.Home}
        />
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => {
          return (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export { SideDrawer };
