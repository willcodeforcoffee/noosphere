// Code based on https://next.material-ui.com/guides/routing/#list
import React, { ReactElement } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { forwardRef, useMemo } from "react";

interface SideDrawerItemProps {
  icon: ReactElement;
  text: string;
  to: string;
}

function SideDrawerItem(props: SideDrawerItemProps) {
  const { icon, text, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} />;
      }),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
}

SideDrawerItem.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export { SideDrawerItem, SideDrawerItemProps };
