import React from 'react'
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
const App = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
                <Grid items xs={12} sm={4}>
                    <Details title="INCOME"/>                    
                </Grid>
                <Grid items xs={12} sm={3}>
                    <Main />                
                </Grid>
                <Grid items xs={12} sm={4}>
                    <Details title="EXPENSE"/>                    
                </Grid>
            </Grid>
        </div>
    )
}

export default App
