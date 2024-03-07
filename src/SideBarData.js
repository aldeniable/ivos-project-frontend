
import React from "react";
import HomeIcon from '@material-ui/icons/Home'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import CreateIcon from '@mui/icons-material/Create';

export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
    },
    {
        title: "Track Analytics",
        icon: <AutoGraphIcon />,
    },

    {
        title: "Artist Analytics",
        icon: <Diversity3Icon/>,
    },

    {
        title: "Quiz",
        icon: <QuestionAnswerIcon/>,
    },
    {
        title: "Fan Board",
        icon: <ContentPasteIcon/>,
    },
    {
        title: "Fan Polls",
        icon: <HowToVoteIcon/>,
    },
    {
        title: "About The Web Author",
        icon: <CreateIcon/>,
    },


]
