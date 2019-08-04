import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRole: '',
      selectedActivity: '',
      selectedReason: '', 
      selectedStep: '', 
      selectedObstacle: '', 
      selectedNegFeel: '', 
      completeData: false,
      rowActivity1Active: false,
      rowActivity2Active: false,
      rowActivity3Active: false,
      rowStep1Active: false,
      rowStep2Active: false,
      rowStep3Active: false
    };
  }

  handleChangeUser(i) {
		this.setState(
      {
        userRole: i.target.value,
        completeData: false
      }
    );
  }

  handleActivitySelect(i) {
    const { activity } = this.formActivity;
    console.log(activity.value);

    // Toggle row's active state


    if (activity.value === "act1") {
      this.setState(
        {
          selectedActivity: this.activity1.value,
          selectedReason: this.reason1.value,
          rowActivity1Active: true,
          rowActivity2Active: false,
          rowActivity3Active: false
        }
      , () => { this.checkDataIsComplete(); });
    }
    else if (activity.value === "act2") {
      this.setState(
        {
          selectedActivity: this.activity2.value,
          selectedReason: this.reason2.value,
          rowActivity1Active: false,
          rowActivity2Active: true,
          rowActivity3Active: false
        }
      , () => { this.checkDataIsComplete(); });
    }
    else if (activity.value === "act3") {
      this.setState(
        {
          selectedActivity: this.activity3.value,
          selectedReason: this.reason3.value,
          rowActivity1Active: false,
          rowActivity2Active: false,
          rowActivity3Active: true
        }
      , () => { this.checkDataIsComplete(); });
    }


    // this.checkDataIsComplete();
  }

  handleStepSelect(i) {
    const { step } = this.formStep;
    console.log(step.value);

    if (step.value === "step1") {
      this.setState(
        {
          selectedStep: this.step1.value,
          selectedObstacle: this.obstacle1.value,
          selectedNegFeel: this.negFeel1.value,
          rowStep1Active: true,
          rowStep2Active: false,
          rowStep3Active: false
        }
      , () => { this.checkDataIsComplete(); });
    }
    else if (step.value === "step2") {
      this.setState(
        {
          selectedStep: this.step2.value,
          selectedObstacle: this.obstacle2.value,
          selectedNegFeel: this.negFeel2.value,
          rowStep1Active: false,
          rowStep2Active: true,
          rowStep3Active: false
        }
      , () => { this.checkDataIsComplete(); });
    }
    else if (step.value === "step3") {
      this.setState(
        {
          selectedStep: this.step3.value,
          selectedObstacle: this.obstacle3.value,
          selectedNegFeel: this.negFeel3.value,
          rowStep1Active: false,
          rowStep2Active: false,
          rowStep3Active: true
        }
      , () => { this.checkDataIsComplete(); });
    }
  }

  checkDataIsComplete() {
    if (this.state.userRole !== '' && this.state.selectedActivity !== '' && this.state.selectedReason !== '' && this.state.selectedStep !== '' && this.state.selectedObstacle !== '' && this.state.selectedNegFeel !== '') {
      
      this.setState(
        {
          completeData: true
        }
      );
    }
    else {
      this.setState(
        {
          completeData: false
        }
      );
    }
  }
  
  handleSubmit(i) {
    this.checkDataIsComplete();
	}

  render() {
    var output;

    if (this.state.completeData) {
      output = <FormOutput userRole={this.state.userRole} selectedReason={this.state.selectedReason} selectedStep={this.state.selectedStep} selectedNegFeel={this.state.selectedNegFeel} selectedObstacle={this.state.selectedObstacle} />;
    }
    else {
      output = <pre>Fill out and select the primary activity and step you want to focus on.</pre>;
    }


    return (
      <div className="App">
        <h1>Problem Statement Generator</h1>
        <div className="section">
          <h2>Who Is The User</h2>
          <label htmlFor="input-user">
            User Role (Persona)
            <input 
              id="input-user"
              type="text"
              value={this.state.userRole}
              onChange={(i) => this.handleChangeUser(i)}
            />
          </label>
        </div>

        <div className="section">
          <h2>Key Activities Performed by User</h2>
          <p>Activity = a task that the user performs. Reason = user’s root goal and the why they’re doing the activity.</p>

          <form id="formActivity" ref={form => this.formActivity = form}>
            <div className={this.state.rowActivity1Active ? "grid rowActivity active" : "grid rowActivity"}>
              <label htmlFor="input-activity-1" className="col">
                Activity
                <input 
                  id="input-activity-1"
                  type="text"
                  ref={input => this.activity1 = input}
                />
              </label>
              <label htmlFor="input-reason-1" className="col">
                Reason
                <input 
                  id="input-reason-1"
                  type="text"
                  ref={input => this.reason1 = input}
                />
              </label>
              <input 
                id="input-radio-act1" 
                className="col"
                type="radio" 
                value="act1" 
                name="activity" 
                onClick={(i) => this.handleActivitySelect(i)} 
              />
            </div>
            <div className={this.state.rowActivity2Active ? "grid rowActivity active" : "grid rowActivity"}>
              <label htmlFor="input-activity-2" className="col">
                Activity
                <input 
                  id="input-activity-2"
                  type="text"
                  ref={input => this.activity2 = input}
                />
              </label>
              <label htmlFor="input-reason-2" className="col">
                Reason
                <input 
                  id="input-reason-2"
                  type="text"
                  ref={input => this.reason2 = input}
                />
              </label>
              <input 
                id="input-radio-act2" 
                className="col"
                type="radio" 
                value="act2" 
                name="activity" 
                onClick={(i) => this.handleActivitySelect(i)} 
              />
            </div>
            <div className={this.state.rowActivity3Active ? "grid rowActivity active" : "grid rowActivity"}>
              <label htmlFor="input-activity-3" className="col">
                Activity
                <input 
                  id="input-activity-3"
                  type="text"
                  ref={input => this.activity3 = input}
                />
              </label>
              <label htmlFor="input-reason-2" className="col">
                Reason
                <input 
                  id="input-reason-3"
                  type="text"
                  ref={input => this.reason3 = input}
                />
              </label>
              <input 
                id="input-radio-act3" 
                className="col"
                type="radio" 
                value="act3" 
                name="activity" 
                onClick={(i) => this.handleActivitySelect(i)} 
              />
            </div>
          </form>
        </div>
        
        <div className="section">
          <h2>Specific Steps To Complete Activity</h2>

          <form id="formStep" ref={form => this.formStep = form}>
            <div className={this.state.rowStep1Active ? "grid rowStep active" : "grid rowStep"}>
              <label htmlFor="input-step-1" className="col">
                Step
                <input 
                  id="input-step-1"
                  type="text"
                  ref={input => this.step1 = input}
                />
              </label>
              <label htmlFor="input-obstacle-1" className="col">
                Obstacle
                <input 
                  id="input-obstacle-1"
                  type="text"
                  ref={input => this.obstacle1 = input}
                />
              </label>
              <label htmlFor="input-negfeel-1" className="col">
                Negative Feeling
                <input 
                  id="input-negfeel-1"
                  type="text"
                  ref={input => this.negFeel1 = input}
                />
              </label>
              <input 
                id="input-radio-step1" 
                className="col"
                type="radio" 
                value="step1" 
                name="step" 
                onClick={(i) => this.handleStepSelect(i)} 
              />
            </div>
            <div className={this.state.rowStep2Active ? "grid rowStep active" : "grid rowStep"}>
              <label htmlFor="input-step-2" className="col">
                Step
                <input 
                  id="input-step-2"
                  type="text"
                  ref={input => this.step2 = input}
                />
              </label>
              <label htmlFor="input-obstacle-2" className="col">
                Obstacle
                <input 
                  id="input-obstacle-2"
                  type="text"
                  ref={input => this.obstacle2 = input}
                />
              </label>
              <label htmlFor="input-negfeel-2" className="col">
                Negative Feeling
                <input 
                  id="input-negfeel-2"
                  type="text"
                  ref={input => this.negFeel2 = input}
                />
              </label>
              <input 
                id="input-radio-step2" 
                className="col"
                type="radio" 
                value="step2" 
                name="step" 
                onClick={(i) => this.handleStepSelect(i)} 
              />
            </div>
            <div className={this.state.rowStep3Active ? "grid rowStep active" : "grid rowStep"}>
              <label htmlFor="input-step-3" className="col">
                Step
                <input 
                  id="input-step-3"
                  type="text"
                  ref={input => this.step3 = input}
                />
              </label>
              <label htmlFor="input-obstacle-3" className="col">
                Obstacle
                <input 
                  id="input-obstacle-3"
                  type="text"
                  ref={input => this.obstacle3 = input}
                />
              </label>
              <label htmlFor="input-negfeel-3" className="col">
                Negative Feeling
                <input 
                  id="input-negfeel-3"
                  type="text"
                  ref={input => this.negFeel3 = input}
                />
              </label>
              <input 
                id="input-radio-step3" 
                className="col"
                type="radio" 
                value="step3" 
                name="step" 
                onClick={(i) => this.handleStepSelect(i)} 
              />
            </div>
          </form>
        </div>

        {/* <button onClick={(i) => this.handleSubmit(i)}>
					Generate Problem Statement
				</button> */}

        {output}
      </div>
    );
  }
}

function FormOutput(props) {
	return (
    <pre>A {props.userRole} who wants to {props.selectedReason} needs to {props.selectedStep} but feels {props.selectedNegFeel} about {props.selectedObstacle}.</pre>
	);
}


export default App;


// Reference: https://css-tricks.com/react-forms-using-refs/