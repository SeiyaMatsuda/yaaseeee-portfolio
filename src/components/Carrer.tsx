import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./scss/Carrer.scss"
type HistoryData = {
  diffinication: string;
  period: string;
};
type HistoryDataList = HistoryData[];

const historyData: HistoryDataList = [
  {
    diffinication: "熊本県立熊本北高等学校普通科",
    period: "2013/04～2016/03",
  },
  {
    diffinication: "熊本大学工学部情報電気電子工学科",
    period: "2016/04～2020/03",
  },
  {
    diffinication: "九州大学大学院システム情報科学府",
    period: "2020/04～2022/03",
  },
  {
    diffinication: "株式会社三菱総合研究所",
    period: "2022/04～現在",
  },
];
const Carrer = () => {
  return (
    <Box className="timelineBox">
      <Typography variant="h4">
        Carrer
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {historyData.map((item) => (
          <>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" component="h1">
                    {item.period}
                  </Typography>
                  <Typography>
                  {item.diffinication}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </>
        ))}
      </Timeline>
    </Box>
  );
};

export default Carrer;
