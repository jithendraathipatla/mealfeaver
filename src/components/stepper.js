import React, { useState, useEffect } from "react"
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

export default function VerticalLinearStepper() {
  const classes = useStyles()
  useEffect(() => {
    let data = localStorage.getItem("info")
    let usefulData = JSON.parse(data)
    setloadPickupcustomerInfo(usefulData)
    let data1 = localStorage.getItem("info1")
    let usefulData1 = JSON.parse(data1)
    setloadPickupcustomerInfo1(usefulData1)
    if(activeStep === 1){
        setdisabled(true);
        console.log("hi")
    }
  }, [])

  const [loadPickupcustomerInfo, setloadPickupcustomerInfo] = useState("")
  const [loadPickupcustomerInfo1, setloadPickupcustomerInfo1] = useState("")
  const [pickupCustomer_AreaName, setpickupCustomer_AreaName] = useState("")

  const [
    pickupCustomer_BuildingName,
    setpickupCustomer_BuildingName,
  ] = useState("")
  const [disabled, setdisabled] = useState(false)
  const [pickupCustomer_Landmark, setpickupCustomer_Landmark] = useState("")
  const [pickupCustomer_Name, setpickupCustomer_Name] = useState("")
  const [pickupCustomer_PhoneNumber, setpickupCustomer_PhoneNumber] = useState()

  const [loaddropcustomerInfo, setloaddropcustomerInfo] = useState("")

  const [dropCustomer_AreaName, setdropCustomer_AreaName] = useState("")

  const [dropCustomer_BuildingName, setdropCustomer_BuildingName] = useState()
  const [dropCustomer_Landmark, setdropCustomer_Landmark] = useState(
    loaddropcustomerInfo.landmark
  )
  const [dropCustomer_Name, setdropCustomer_Name] = useState()
  const [dropCustomer_PhoneNumber, setdropCustomer_PhoneNumber] = useState()
  const [
    FinishingPickupCustomerInfo,
    setFinishingPickUpCustomerInfo,
  ] = useState([])

  const [FinishingDropCustomerInfo, setFinishingDropCustomerInfo] = useState([])

  const [activeStep, setActiveStep] = React.useState(0)

  const steps = getSteps()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
       if(activeStep === 1 && pickupCustomer_PhoneNumber.length == 10){
        setdisabled(true)
       }
        setdisabled(false)
       
  }

  function getActiveState(){
    if(activeStep === 1){
        setdisabled(true);
        console.log("hi")
    }
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
    setdisabled(true)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  //adding OrderPickup customer information;

  const handelCustomerAreaName = e => {
    setpickupCustomer_AreaName(e.target.value)
  }

  const handelCustomerBuildingName = e => {
    setpickupCustomer_BuildingName(e.target.value)
  }

  const handelCustomerLandmark = e => {
    setpickupCustomer_Landmark(e.target.value)
  }

  const handelCustomerName = e => {
    setpickupCustomer_Name(e.target.value)
  }

  const handelCustomerPhoneNumber = e => {
    setpickupCustomer_PhoneNumber(e.target.value)
    validatingData(e.target.value.length)
  }

  //adding Orderdrop customer information;

  const handeldropCustomerAreaName = e => {
    setdropCustomer_AreaName(e.target.value)
  }

  const handeldropCustomerBuildingName = e => {
    setdropCustomer_BuildingName(e.target.value)
  }

  const handeldropCustomerLandmark = e => {
    setdropCustomer_Landmark(e.target.value)
  }

  const handeldropCustomerName = e => {
    setdropCustomer_Name(e.target.value)
  }

  const handeldropCustomerPhoneNumber = e => {
    setdropCustomer_PhoneNumber(e.target.value)
    validatingDataforDrop(e.target.value.length)
   
  }

  function validatingDataforDrop(value2) {
    switch (true) {
      case value2 === 10:
           
        setFinishingDropCustomerInfo([
          {
            area: dropCustomer_AreaName,
            flat: dropCustomer_BuildingName,
            landmark: dropCustomer_Landmark,
            name: dropCustomer_Name,
            phone: dropCustomer_PhoneNumber,
          },
        ])
       
        setdisabled(true)
        localStorage.setItem(
          "info1",
          JSON.stringify({
            area: dropCustomer_AreaName,
            flat: dropCustomer_BuildingName,
            landmark: dropCustomer_Landmark,
            name: dropCustomer_Name,
            phone: dropCustomer_PhoneNumber,
          })
        )
        break
        
      default:
        setFinishingPickUpCustomerInfo([])
        setdisabled(false)
    }
  }

  function validatingData(value2) {
    switch (true) {
      case value2 === 10:
        setFinishingPickUpCustomerInfo([
          {
            area: pickupCustomer_AreaName,
            flat: pickupCustomer_BuildingName,
            landmark: pickupCustomer_Landmark,
            name: pickupCustomer_Name,
            phone: pickupCustomer_PhoneNumber,
          },
        ])
        setdisabled(true)
        localStorage.setItem(
          "info",
          JSON.stringify({
            area: pickupCustomer_AreaName,
            flat: pickupCustomer_BuildingName,
            landmark: pickupCustomer_Landmark,
            name: pickupCustomer_Name,
            phone: pickupCustomer_PhoneNumber,
          })
        )
        break
      default:
        setFinishingPickUpCustomerInfo([])
        setdisabled(false)
    }
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
                value={pickupCustomer_AreaName}
                handelTextField={handelCustomerAreaName}
              />
              <FormField
                label="FLAT, FLOOR, BUILDING NAME"
                id="outlined-size-small"
                size="small"
                value={pickupCustomer_BuildingName}
                handelTextField={handelCustomerBuildingName}
              />
              <FormField
                label="LANDMARK"
                id="outlined-size-small"
                size="small"
                value={pickupCustomer_Landmark}
                handelTextField={handelCustomerLandmark}
              />
              <FormField
                label="CONTACT PERSON NAME"
                id="outlined-size-small"
                size="small"
                value={pickupCustomer_Name}
                handelTextField={handelCustomerName}
              />
              <FormField
                label="CONTACT DETAILS"
                id="outlined-size-small"
                size="small"
                type="number"
                value={pickupCustomer_PhoneNumber}
                handelTextField={handelCustomerPhoneNumber}
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
                value={dropCustomer_AreaName}
                handelTextField={handeldropCustomerAreaName}
              />
              <FormField
                label="FLAT, FLOOR, BUILDING NAME"
                id="outlined-size-small"
                size="small"
                value={dropCustomer_BuildingName}
                handelTextField={handeldropCustomerBuildingName}
              />
              <FormField
                label="LANDMARK"
                id="outlined-size-small"
                size="small"
                value={dropCustomer_Landmark}
                handelTextField={handeldropCustomerLandmark}
              />
              <FormField
                label="CONTACT PERSON NAME"
                id="outlined-size-small"
                size="small"
                value={dropCustomer_Name}
                handelTextField={handeldropCustomerName}
              />
              <FormField
                label="CONTACT DETAILS"
                id="outlined-size-small"
                size="small"
                value={dropCustomer_PhoneNumber}
                type="number"
                handelTextField={handeldropCustomerPhoneNumber}
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

  return (
    console.log(activeStep),
    (
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
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      disabled={disabled === false}
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
  )
}

const lab = css`
  font-weight: 600;
  font-size: 20px;
`

const checkboxform = css`
  display: flex;
  h5 {
    padding-top: 12.5px;
  }
`
