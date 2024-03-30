import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import GoldMedal from "../img/kaggle_icon/gold_icon.png";
import SilverMedal from "../img/kaggle_icon/silver_icon.png";
import BronzeMedal from "../img/kaggle_icon/bronze_icon.png";
import "./scss/Awards.scss"
type CompetitionData = {
  medal: typeof GoldMedal | typeof SilverMedal | typeof BronzeMedal;
  name: string;
  rank: string;
  year: string;
  description: string;
};

type CompetitionListProps = {
  competitions: CompetitionData[]; // Define props for CreateCompetitionList
};

const CreateCompetitionList: React.FC<CompetitionListProps> = (props) => {
  return (
    <List sx={{bgcolor: "background.paper" }}>
      {props.competitions.map((competition) => (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Kaggle Gold"
              src={competition.medal}
              sx={{ width: 30, height: 30 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={competition.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "block" }} // Make this block to ensure it appears on a new line
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {competition.year} {/* Display the year here */}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {competition.rank}
                </Typography>
                {"ー" + competition.description}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

const AwardsList = () => {
  const kaggleCompetitionList: CompetitionData[] = [
    {
      medal: SilverMedal,
      name: "Google Landmark Recognition 2021",
      rank: "22th",
      year: "2021-09",
      description: "Image Classification",
    },
    {
      medal: GoldMedal,
      name: "Sartorius - Cell Instance Segmentation",
      rank: "4th",
      year: "2021-12",
      description: "Image Segmentation",
    },
    {
      medal: BronzeMedal,
      name: "Learning Equality - Curriculum Recommendations",
      rank: "67th",
      year: "2023-03",
      description: "Natural Language Process",
    },
    {
      medal: BronzeMedal,
      name: "CommonLit - Evaluate Student Summaries",
      rank: "194th",
      year: "2023-09",
      description: "Natural Language Process",
    },
  ];

  const signateCompetitionList: CompetitionData[] = [
    {
      medal: GoldMedal,
      name: "SIGNATE Student Cup 2021春【予測部門】",
      rank: "4th",
      year: "2021-05",
      description: "Table Data",
    },
    {
      medal: SilverMedal,
      name: "医学論文の自動仕分けチャレンジ",
      rank: "12th",
      year: "2021-10",
      description: "Natural Language Process",
    },
  ];
  return (
    <>
      <Box className="awardsBox">
        <Typography variant="h4" textAlign={"center"}>
          Awards
        </Typography>
        <Typography variant="h6" textAlign={"left"} sx={{mt: 3}}> 
          <li>Kaggle Comptetionにおける受賞</li>
        </Typography>
        <CreateCompetitionList competitions={kaggleCompetitionList} />
        <Typography variant="h6" textAlign={"left"}  sx={{mt: 3}}>
          <li>Signateにおける受賞</li>
        </Typography>
        <CreateCompetitionList competitions={signateCompetitionList} />
        <Typography variant="h6" textAlign={"left"}  sx={{mt: 3}}>
          <li>その他の受賞歴</li>
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={"2020年度情報処理学会九州支部奨励賞"}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "block" }} // Make this block to ensure it appears on a new line
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    2023-07
                  </Typography>
                  第７４回電気・情報関係学会九州支部連合大会からの選定
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default AwardsList;
