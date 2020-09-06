import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import FormField from "../FormField"
import { css } from "@emotion/core"
import axios from 'axios'
import BackdropComponant from './backdrop'


const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary)


export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1")
  const [next, setnext] = useState(false);
  const [open, setOpen] = useState(false);
  const [dialogueopen,setdialogueopen] = useState(true)
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

  const handelanystoresubmit = () => {
    setOpen(true)
    let recquiredjson = {
      storename: storename,
      storeaddress: storeaddress,
      storebuildingname: storebuildingname,
      storelandmark: storelandmark,
      yourphonenumber: yourphonenumber,
      storeitemcategory: storeitemcategory,
      listofitems: listofitems,

      yourname: yourname,
      youraddress: youraddress,
      yourbuildingname: yourbuildingname,
      yourlandmark: yourlandmark,
    }
    console.log(recquiredjson)
    let requireddata = {
      "request": "add",
      "new_send_pacakge_details": {
        "pickup_address": {
          "area_name": storeaddress,
          "flat_building_name": storebuildingname,
          "landmark": storelandmark,
          "person_name": storename,
          "contact_number": "Shop From Any Store"
        },
        "delivery_address": {
          "area_name": youraddress,
          "flat_building_name": yourbuildingname,
          "landmark": yourlandmark,
          "person_name": yourname,
          "contact_number": yourphonenumber
        },
        "selected_package_content": [listofitems]
      }
    }
    axios.post(` https://6uiv5qngt4.execute-api.ap-south-1.amazonaws.com/dev/service/send-package`, requireddata)
    .then((data)=>{
      console.log(data);
      setOpen(false)
      alert("We have got your deails, We will soon assign you a delivery patner")
    })
    .catch((e)=>{
      console.log(e);
    })
  }

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Store Information</Typography>
        </AccordionSummary>
        <div css={one}>
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
          <FormField
            label="Choose Category"
            id="outlined-size-small"
            size="small"
            handelTextField={e => setstoreitemcategory(e.target.value)}
          />

          <FormField
            label="List of Items(Max.10)"
            id="outlined-multiline-static"
            size="small"
            varient="outline"
            handelTextField={e => setlistofitems(e.target.value)}
          />
        </div>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Customer Information</Typography>
        </AccordionSummary>

        <div css={one}>
          <br />
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

          <div style={{ textAlign: "center" }}>
            <button css={button} onClick={handelanystoresubmit}>
             Submit
            </button>
            <br />
           
          </div>
        <BackdropComponant open={open}/>
        </div>
      </Accordion>
    </div>
  )
}




const one = css`
  padding: 10px;
  padding-right: 30px;
 
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
