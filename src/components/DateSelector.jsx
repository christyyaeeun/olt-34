import Calendar from 'react-calendar'
import { useState } from 'react';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { Container, Box, IconButton } from '@chakra-ui/react'
import '../styles/calendar.css'
// import React, { Component } from 'react'
function DateSelector() {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(null);

  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // }
  const [show, setShow] = useState(false);

  return (
    <>
      <Container centerContent maxW='container.sm'>
      <IconButton onClick={() => setShow(prev => !prev)}> </IconButton>
          {show && 
          <Box>     
            <div className="cal">
            <Calendar />
          </div>
          </Box>
          }

          <Box shadow='md' bg='#fff' centerContent>
            <Box p={2}>
              {/* <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              /> */}
            </Box>
            {/* <Box shadow='md' p={2} m={1} h='100px' color='#494b51' bg='fff'>
            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
          </Box> */}
          </Box>
      </Container>
    </>
  )
}



export default DateSelector