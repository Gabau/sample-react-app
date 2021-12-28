import {
    Button,
    Checkbox,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Paper,
    Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    checkbox: {
        '&$checked': {
            color: '#F5B369',
        },
    },
    checked: {},
    grid: {
        paddingTop: '10vh',
    },
    list: {
        width: '30vw',
    },
}));

const deflist: string[] = [
    'Frontend',
    'Backend',
    'Relational Database',
    'More stuff',
    'Cars',
    'Angular',
    'Planes',
    'Larger sample',
    'words',
    'alphabet',
    'something',
    'trains',
    'not trains',
    'NOT TRAINS',
];

const StyledList: React.FC = () => {
    const classes = useStyles();
    const [list, setList] = useState(deflist);

    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.grid}>
            <Typography variant="h5" component="div" gutterBottom>
                <Typewriter
                    options={{
                        cursor: '',
                    }}
                    onInit={(typewriter) => {
                        typewriter.changeDelay(80).typeString("Here's a slightly nicer list.").start();
                    }}
                />
            </Typography>

            <br />

            <input
                onChange={(event) =>
                    setList(deflist.filter((val) => val.toLowerCase().includes(event.target.value.toLocaleLowerCase())))
                }
            />

            <Paper elevation={3}>
                <List className={classes.list}>{list.map((val) => listItem(val))}</List>
            </Paper>

            <br />

            <Button variant="contained" color="secondary" component={Link} to="/">
                {'Back to Home'}
            </Button>
        </Grid>
    );
    function listItem(primary: string): React.ReactNode {
        return (
            <ListItem>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        classes={{
                            root: classes.checkbox,
                            checked: classes.checked,
                        }}
                    />
                </ListItemIcon>
                <ListItemText primary={primary} />
            </ListItem>
        );
    }
};

export default StyledList;
