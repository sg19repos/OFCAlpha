import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { categoryListItems } from "../../../common/constants";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const CategoryList = ({ checkedCategories, setCheckedCategories }) => {
  const handleToggle = value => () => {
    const currentIndex = checkedCategories.indexOf(value);
    const newChecked = [...checkedCategories];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedCategories(newChecked);
  };

  return (
    <Grid>
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
                  checked={checkedCategories.indexOf(index) !== -1}
                  inputProps={{ "aria-labelledby": element.categoryName }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default CategoryList;
