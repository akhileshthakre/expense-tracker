import React from 'react'
import { Card, CardHeader, CardContent, Typography,Grid,Divider } from '@material-ui/core'
// import {Doughnut} from 'react-chartjs-2'
import useStyles from './styles'
// import { ClassRounded } from '@material-ui/icons'
import Form from './Form/Form'

const Main = () => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Power by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total balance is $100</Typography>
                <Typography variant="Sutitle1" style={{lineHeight:"1.5em", marginTop: "20px" }}>
                        {/* Infocard  */}
                        Try saying: Add income for school....
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        {/* List */}
                    </Grid>
                </Grid>

            </CardContent>

        </Card>
    )
}

export default Main
