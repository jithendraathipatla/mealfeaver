import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import FormField from "../components/FormField"
import Checkbox from "@material-ui/core/Checkbox"
import { css } from "@emotion/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}))

function getSteps() {
  return ["Pickup Details", "Drop Details", "Select Package Content", "Submit"]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <form>
            <FormField
              label="AREA NAME"
              id="outlined-size-small"
              size="small"
            />
            <FormField
              label="FLAT, FLOOR, BUILDING NAME"
              id="outlined-size-small"
              size="small"
            />
            <FormField label="LANDMARK" id="outlined-size-small" size="small" />
            <FormField
              label="CONTACT PERSON NAME"
              id="outlined-size-small"
              size="small"
            />
            <FormField
              label="CONTACT DETAILS"
              id="outlined-size-small"
              size="small"
            />
          </form>
          <br />
        </div>
      )
    case 1:
      return (
        <div>
          <form>
            <FormField
              label="AREA NAME"
              id="outlined-size-small"
              size="small"
            />
            <FormField
              label="FLAT, FLOOR, BUILDING NAME"
              id="outlined-size-small"
              size="small"
            />
            <FormField label="LANDMARK" id="outlined-size-small" size="small" />
            <FormField
              label="CONTACT PERSON NAME"
              id="outlined-size-small"
              size="small"
            />
            <FormField
              label="CONTACT DETAILS"
              id="outlined-size-small"
              size="small"
            />
          </form>
          <br />
        </div>
      )
    case 2:
      return (
        <div>
          <form>
            <div css={checkboxform}>
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <h5> Documents | Books</h5>
            </div>

            <div css={checkboxform}>
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <h5> Cloths | Accessries</h5>
            </div>

            <div css={checkboxform}>
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <h5> Food | Flowers</h5>
            </div>

            <div css={checkboxform}>
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <h5> Household Items</h5>
            </div>
            <div css={checkboxform}>
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <h5> Sports & Other Equipment</h5>
            </div>
            <div css={checkboxform}>
              <Checkbox
                value="checkedA"
                inputProps={{ "aria-label": "Checkbox A" }}
              />
              <h5> Electronic Item </h5>
            </div>
          </form>
        </div>
      )
    case 3:
      return ``
    default:
      return "Unknown step"
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel><span css={lab}>{label}</span></StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  )
}

const lab= css`
font-weight: 600;
font-size: 20px;
`

const checkboxform = css`
  display: flex;
  h5 {
    padding-top: 12.5px;
  }
`
