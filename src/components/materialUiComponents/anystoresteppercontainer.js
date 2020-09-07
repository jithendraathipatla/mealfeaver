import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Checkbox from "@material-ui/core/Checkbox"
import axios from "axios"
import BackdropComponant from "./backdrop"
import FormField from "../FormField"
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

export default function VerticalLinearStepper() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()
  const [expanded, setExpanded] = React.useState("panel1")
  const [open, setOpen] = useState(false)
  const [dialogueopen, setdialogueopen] = useState(true)
  const [storename, setstorename] = useState("")
  const [storeaddress, setstoreaddress] = useState("")
  const [storebuildingname, setstorebuildingname] = useState("")
  const [storelandmark, setstorelandmark] = useState("")
  const [yourphonenumber, setyourphonenumber] = useState("")
  const [storeitemcategory, setstoreitemcategory] = useState("")
  const [listofitems, setlistofitems] = useState()

  const [yourname, setyourname] = useState("")
  const [youraddress, setyouraddress] = useState("")
  const [yourbuildingname, setyourbuildingname] = useState("")
  const [yourlandmark, setyourlandmark] = useState("")

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  function getSteps() {
    return ["Store Address", "Category of Items", "List Of Items", "Delivery Information"]
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            <FormField
              label="STORE NAME"
              id="outlined-size-small"
              size="small"
              handelTextField={e => setstorename(e.target.value)}
            />
            <FormField
              label="STORE ADRESS"
              id="outlined-size-small"
              size="small"
              handelTextField={e => setstoreaddress(e.target.value)}
            />
            <FormField
              label="FLAT / BUILDING NAME OF STORE"
              id="outlined-size-small"
              size="small"
              handelTextField={e => setstorebuildingname(e.target.value)}
            />
            <FormField
              label="LANDMARK"
              id="outlined-size-small"
              size="small"
              handelTextField={e => setstorelandmark(e.target.value)}
            />
           
          </div>
        )
      case 1:
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
      case 2:
        return (
          <div>
            <FormField
              label="List of Items(Max.10)"
              id="outlined-multiline-static"
              size="small"
              varient="outline"
              handelTextField={e => setlistofitems(e.target.value)}
            />
          </div>
        )
      case 3:
        return (
          <div>
            <FormField
              label="YOUR NAME"
              id="outlined-size-small"
              size="small"
              handelTextField={e => setyourname(e.target.value)}
            />

            <FormField
              label="YOUR PHONE NUMBER"
              id="outlined-size-small"
              size="small"
              handelTextField={e => setyourphonenumber(e.target.value)}
            />

            <FormField
              label="YOUR AREA NAME"
              id="outlined-size-small"
              size="small"
              handelTextField={e => setyouraddress(e.target.value)}
            />

            <FormField
              label="YOUR FLAT/ BUILDING NUMBER"
              id="outlined-size-small"
              size="small"
              handelTextField={e => setyourbuildingname(e.target.value)}
            />

            <FormField
              label="YOUR LANDMARK"
              id="outlined-size-small"
              size="small"
              handelTextField={e => setyourlandmark(e.target.value)}
            />
          </div>
        )
      default:
        return "Unknown step"
    }
  }

  function returningnextbutton() {
    return (
      <button onClick={handleNext} css={button}>
        Next
      </button>
    )
  }

  function returningsubmitbutton() {
    return (
      <button  css={button}>
        Submit
      </button>
    )
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <span css={lab}>{label}</span>
            </StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                    <br/>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>

                  {activeStep === steps.length - 1
                    ? returningsubmitbutton()
                    : returningnextbutton()}
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

const checkboxform = css`
  display: flex;
  h5 {
    padding-top: 12.5px;
  }
`

const button = css`
  background-color: #ee931b;
  color: #ffffff;
  border: none;
  font-size: 12px;
  padding: 7px 30px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.7px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
const lab = css`
  font-weight: 600;
  font-size: 20px;
`
