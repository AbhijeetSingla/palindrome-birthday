import { Button, Container, FormControl, TextField, Stack, Typography, InputLabel, Select, MenuItem } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from "react";
import { isPalindrome } from "../utils/functions";

function Form() {

  const [birthDate, setBirthDate] = useState("");
  const [dateFormat, setDateFormat] = useState("");
  const [output,setOutput]= useState("");

  const dateFormats = [
    "DD-MM-YYYY",
    "MM-DD-YYYY", 
    "YYYY-MM-DD", 
    "DD-MM-YY", 
    "MM-DD-YY", 
    "YY-MM-DD"
  ]

  function formSubmit(e){
    e.preventDefault();
    if(isPalindrome(birthDate.format(dateFormat))) {
      setOutput("Your Birthday is a palindrome")
    } else {
      setOutput("Waits...");
      const inputDate = birthDate.clone();
      const inputDateRev = birthDate.clone();
      while(!isPalindrome(inputDate.format(dateFormat)) || !isPalindrome(inputDateRev.format(dateFormat)) ){
        inputDate.subtract(1, 'days');
        inputDateRev.subtract(1, 'days');
      }
      const shortestDiffDate = birthDate.diff(inputDate, "days") > birthDate.diff(inputDateRev, "days") ? inputDateRev.clone() : inputDate.clone();
      setOutput(`Your Birthday is not a palindrome, you missed by ${Math.abs(shortestDiffDate.diff(birthDate, "days"))} days. Palindrome date is ${shortestDiffDate.format(dateFormat)}`)
    }
  }

  return (
    <>
      <Container maxWidth="md" align="center" component="form" onSubmit={(e)=> formSubmit(e)} >
        <FormControl sx={{ m: 1, minWidth: 260 }} >
          <InputLabel id="denomination-label">Date Format</InputLabel>
          <Select labelId="denomination-label" value={dateFormat} label="Date Format" id="dateFormat" onChange={(e) => setDateFormat(e.target.value)}>
              {dateFormats.map((format)=> <MenuItem value={format}>{format}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl sx={{ my:1, mr: "3rem" , minWidth: 220 }} >
          <LocalizationProvider dateAdapter={AdapterMoment}>
              <Stack spacing={3}>
                  <DesktopDatePicker
                  label="Birth Date"
                  inputFormat="DD/MM/YYYY"
                  value={birthDate}
                  onChange={(value)=> setBirthDate(value)}
                  renderInput={(params) => <TextField {...params} />}
                  />
              </Stack>
          </LocalizationProvider>
        </FormControl>
        <Container maxWidth="md" align="center" sx={{ mt: 5}}>
          <Button variant="contained" type="submit">Check</Button>
        </Container>
      </Container>
      <Container maxWidth="md" align="center" sx={{ mt:5 }}>
        <Typography variant="h2" component="p">{output}</Typography>
      </Container>
    </>
  );
}

export default Form;
