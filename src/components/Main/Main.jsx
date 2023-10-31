import React, {useContext} from 'react';
import { Card, CardContent, CardHeader, Typography,Theme, Grid, Divider, colors } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import { red } from '@material-ui/core/colors';

const Main = () => {
    const classes=useStyles();
    const {balance}=useContext(ExpenseTrackerContext);
    
  return (
    <Card className={classes.root}>
        <CardHeader title="" subheader="" />
        <Typography  align='center' color="primary" variant="h3"> Expense Tracker</Typography>
        <CardContent>
            <Typography align='center' color="secondary" variant="h4">Total Balance ₹{balance}</Typography>
            <Typography variant="subtitle" style={{lineHeight:'1.5rem', marginTop:'20px'}}>
                {/* InfoCard... */}
                </Typography>
                <Divider className={classes.divider} />
               <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}

export default Main