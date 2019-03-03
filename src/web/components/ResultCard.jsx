import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});


function getStepContent(step) {
	switch (step) {
	  default:
		return 'lol';
	}
}
  
  

class ResultCard extends React.Component {
	constructor () {
		super ()
		this.state = {
			data: {},
			steps: [{label: 'lol'}]
		}
	}

	componentDidMount() {
		let start = document.querySelector('#step1').value
		let end = document.querySelector('#step2').value
		console.log(`${start} - ${end}`)
		this.state.setState({
			steps: [{label: "lol"}, {label: 'lal'}]
		})
		/*axios.get(`/getRoute?start=${start}&end=${end}`)
		.then(resp => {
			console.log(resp.data)
			this.state.steps = [{label: "lol"}, {label: 'lal'}]
		})
		.catch(err => {
			console.log(err.response)
		})*/
	}

	render() {
		const { classes } = this.props;
		const { activeStep } = this.state;
	
		return (
		  <div className={classes.root}>
			<Stepper activeStep={activeStep} orientation="vertical">
			  {this.state.steps.map((item, index) => (
				<Step key={item.label}>
				  <StepLabel>{item.label}</StepLabel>
				  <StepContent>
					<Typography>{item.label}</Typography>
				  </StepContent>
				</Step>
			  ))}
			  </Stepper>
		  </div>
		);
	  }
}

export default withStyles(styles)(ResultCard);
