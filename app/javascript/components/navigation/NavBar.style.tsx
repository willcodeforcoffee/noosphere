import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {},
  heading: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
}));

export { useStyles };
