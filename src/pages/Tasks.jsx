import React from 'react'
import Calendar from 'react-calendar'
// import '../styles/calendar.css'
import '../styles/calendar.css'
import { Box } from '@chakra-ui/react'
import DateSelector from '../components/DateSelector';

const Tasks = () => {
    return (
        <>
            <Box w='100%' className="task-wrapper">
                <DateSelector />
            </Box>
        </>

    )
}

export default Tasks


/*

import React from 'react'
import Calendar from 'react-calendar'
// import '../styles/calendar.css'
import '../styles/calendar.css'
import DateSelector from '../components/DateSelector';
import { Container, Stack, Box, Wrap, WrapItem, SimpleGrid } from '@chakra-ui/react'

const Tasks = () => {
    return (
        <div className="task-wrapper">
            <h3>Tasks</h3>
            <Container>
                <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                    <Box>
                        <DateSelector />

                    </Box>
                    <Box borderRadius='md' px={4} h={8}>
                        <Calendar />
                    </Box>
                </SimpleGrid>
            </Container>
        </div>
    )
}

export default Tasks

*/