import { Box, Container, Grid, Typography } from '@mui/material'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

const faqs = [
  {
    title: 'Q.1 Do we need to arrive early?',
    text: 'We usually suggest your team arrive 10-15 minutes earlier so you have time to check in, finish your waivers and store your belongings. Players arriving after 15 minutes will not be admitted.',
    id: '1',
  },
  {
    title: 'Q.2 What if we have an extra person?',
    text: 'You can purchase another ticket from the same time slot to add extra person. If the slot is full you may call or email us for availibility check. We usually suggest not exceed the recommended maximum people for better experience. However, we might allow some exceptions.',
    id: '2',
  },
  {
    title: 'Q.3 What is the minimum age requirement?',
    text: 'We do not have the minimum age. Instead, all players must be over 43 inches or higher. No infants are allowed.',
    id: '3',
  },
  {
    title: 'Q.4 How does the competition mode (Agents vs Allies) work?',
    text: 'Once you book both the agents and allies game at the same time, we will launch the competition mode automatically',
    id: '4',
  },
  {
    title: 'Q.5 What information should we provide if we want to have a corporate training event?',
    text: 'Confirm the details of your activity (number of participants, date, time) with us via phone or email. We will then issue you a private link to make the reservation.',
    id: '5',
  },
]

const FAQ = () => {
  return (
    <Box className="hayward-faq" id="faq">
      <Container>
        <Grid container>
          <Grid item md={2} />
          <Grid item xs={12} md={8}>
            <Typography
              component="h2"
              sx={{
                fontSize: '26px',
                textTransform: 'capitalize',
                fontWeight: 700,
                paddingBottom: '25px',
                position: 'relative',
                marginBottom: '40px',
                lineHeight: '20px',
                color: '#000',
                textAlign: 'center',
              }}
            >
              Frequently Asked Questions
              <Typography
                component="span"
                sx={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-4px',
                  transform: 'translateX(-50%)',
                  width: '45px',
                  background: '#73ae20',
                  height: '3px',
                  borderRadius: '3px',
                }}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item md={8} xs={12}>
            <Accordion preExpanded={['1']}>
              {faqs.map((faq, i) => (
                <AccordionItem uuid={faq.id} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{faq.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Typography>{faq.text}</Typography>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="faq-img">
              <Typography>
                We listed the most common questions that people asked and please feel free to ask
                any other questions via email. <br />{' '}
                <a href="mailto:info@xcapade.co">info@xcapade.co</a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default FAQ
