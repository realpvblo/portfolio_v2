import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import "./timeline.css"

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          paź 2022 - obecnie
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {/* <TimelineDot> */}
            {/* <FastfoodIcon /> */}
            <img className='timelineIcon' src="https://cdn-netpr.pl/file/mediakit-s/631554/d4/s-1366-x.png" alt="Wirtualna Polska" />
          {/* </TimelineDot> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Wirtualna Polska
          </Typography>
          <Typography>Junior Frontend Developer</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          lip 2022 - wrz 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {/* <TimelineDot> */}
            {/* <FastfoodIcon /> */}
            <img className='timelineIcon' src="https://cdn-netpr.pl/file/mediakit-s/631554/d4/s-1366-x.png" alt="Wirtualna Polska" />
          {/* </TimelineDot> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Wirtualna Polska
          </Typography>
          <Typography>Stażysta</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2020 - obecnie
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {/* <TimelineDot> */}
            {/* <FastfoodIcon /> */}
            <img className='timelineIcon' src="/wkreceniweko.jpeg" alt="Wirtualna Polska" />
          {/* </TimelineDot> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Wkręceni w Eko
          </Typography>
          <Typography>Freelance Graphic Designer & WordPress Developer</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2020 - obecnie
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {/* <TimelineDot> */}
            {/* <FastfoodIcon /> */}
            <img className='timelineIcon' src="/oliwa.png" alt="Wirtualna Polska" />
          {/* </TimelineDot> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Restauracja Oliwa
          </Typography>
          <Typography>Freelance Graphic Designer</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          lip - 2021 - paź 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {/* <TimelineDot> */}
            {/* <FastfoodIcon /> */}
            <img className='timelineIcon' src="/sfbcc.png" alt="Wirtualna Polska" />
          {/* </TimelineDot> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Fundacja Studenckie Forum Business Center Club
          </Typography>
          <Typography>Praktykant - Graphic Designer</Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
