import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { categoryListItems } from "../../../common/constants";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";

const CategoryList = () => {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
      {categoryListItems.map((element, index) => {
        return (
          <ListItem
            key={index}
            button
            className={"shadow1 mt-1 mb-1"}
            onClick={handleToggle(index)}
          >
            <ListItemAvatar>
              <span className={`violetColor lnr lnr-${element.icon}`}> </span>
            </ListItemAvatar>
            <ListItemText id={index} primary={`${element.categoryName}`} />
            <ListItemSecondaryAction>
              <Checkbox
                style={{
                  color: "#595a9b"
                }}
                edge="end"
                onChange={handleToggle(index)}
                checked={checked.indexOf(index) !== -1}
                inputProps={{ "aria-labelledby": element.categoryName }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CategoryList;
