import React from 'react'
import { Box, Typography } from '@mui/material'

const questions = [
  {
    question: 'Do we need to arrive early?',
    answer:
      'We usually suggest your team arrive 10-15 minutes earlier so you have time to check in, finish your waivers and store your belongings. Players arriving after 15 minutes will not be admitted.',
  },
  {
    question: 'What if we have an extra person?',
    answer:
      'You can purchase another ticket from the same time slot to add extra person. If the slot is full you may call or email us for availibility check. We usually suggest not exceed the recommended maximum people for better experience. However, we might allow some exceptions.',
  },
  {
    question: 'What is the minimum age requirement?',
    answer:
      'We do not have the minimum age. Instead, all players must be over 43 inches or higher. No infants are allowed.',
  },
  {
    question: 'What information should we provide if we want to have a corporate training event?',
    answer:
      'Confirm the details of your activity (number of participants, date, time) with us via phone or email. We will then issue you a private link to make the reservation.',
  },
]

const FAQ = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={{ md: 20, xs: 10 }}>
      <Typography
        variant="span"
        sx={{
          color: '#CC3727',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontSize: { md: '24px', xs: '15px' },
          fontWeight: '600',
          fontFamily: 'Post No Bills',
        }}
      >
        Frequent Asked Questions
      </Typography>
      <Box mt={4} px={{ md: 0, xs: 5 }}>
        {questions.map((question, index) => (
          <React.Fragment key={`q-${index}`}>
            <Typography
              sx={{
                fontSize: { md: '24px', xs: '17px' },
                fontWeight: 500,
                lineHeight: 1.5,
                letterSpacing: '0.02em',
                mb: 2,
              }}
            >
              {question.question}
            </Typography>
            <Typography sx={{ fontWeight: 300, lineHeight: 1.8, letterSpacing: '0.01em', mb: 8 }}>
              {question.answer}
            </Typography>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )
}

export default FAQ
