import { ListItem, ListItemText } from "@material-ui/core";
import propTypes from "prop-types";

export const Massage = (props) => {
    return (
        <ListItem>
            <ListItemText>
                [{props.author}]: {props.text}
            </ListItemText>
        </ListItem>
    );
};

Massage.propTypes = {
    id: propTypes.string,
    text: propTypes.string,
    author: propTypes.string
};