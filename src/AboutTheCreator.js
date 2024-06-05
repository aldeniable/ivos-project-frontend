import React from 'react'
import { ParagraphContainer, ImageContainer, BodyContainer} from './styles/AboutTheCreator.styled';
import meme from './images/meme.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import AnimationIcon from '@mui/icons-material/Animation';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Menu } from '@mui/material';
import { MenuBook } from '@material-ui/icons';
function AboutTheCreator() {
    return (
        <>
        <BodyContainer>
            <ParagraphContainer>
                <p>
                    Hi! My Name is Alden Robell de Loyola, a software developer and a fan of IVoS.
                    <br/>
                    <br/>
                    I'm 23 years old, and have been a fan since In My Prison era. There are a lot of benefits to create this thing but the main drive behind my creation is my years-long inability to channel or express my interest for their music. As a painter paints what he loves, a writer writes what he loves - a developer also creates what he loves.
                    <br/>
                    <br/>
                    I came across an IVOS content on the year 2017, when a friend recommended me their music video of Hey Barbara, who I thought during that time was too pretentious and edgy. One if its dislike counts is from me. I didn't care about them even during the Mundo era, where everyone including me was hyper-obsessed with the song. What truly made me a fan was Zild, whom I'm glad to have witnessed his transition from being the bass guitarist to being the ultimate IVOS frontman. I considered myself a fan during post-Unique era, where I got overwhelmed with the Reinaissance-level talent displayed in In My Prison and Bata, Dahan-Dahan!. And then, CLAPCLAPCLAP! was released, and the rest is history.
                    <br/>
                    <br/>
                    Over the years what I found most interesting among them is the discovery that despite them moving away from the band and making music on their own separate ways, there are things, that cannot be seen in the naked eye, unconsciously bind them- their passion for music, the similarity of the artists they get influences from, their formula of creating art that as a fan you just know emanates from and through a single idea, their similar characteristics and outlook of art and music. I don't know if this is the right term but to me, they are like one entity separated by four bodies. I have long listen to all of their music enough to trust myself this.
                    <br/>
                    <br/>
                    Today, my addiction and interest is still the same as 5 years ago. I consume every music they create, and a significant portion of my character is influenced by their music and their personalities.
                    <br/>
                    <br/>
                </p>
            </ParagraphContainer>

            <ImageContainer>
                <img src = {meme} alt = ""/>
                <div>
                        <a href="https://fb.com/armedloyola"> <FacebookIcon/> armedloyola </a> <br/>
                        <a href="https://x.com/aldenrmd"> <TwitterIcon/> aldenrmd </a> <br/>
                        <a href="https://instagram.com/aldeniable_"> <InstagramIcon/> aldeniable_ </a> <br/>
                        <EmailIcon/> aldenrmd10@gmail.com <br/>
                        <a href="https://letterboxd.com/aldenrmd"> <AnimationIcon/> Letterboxd [aldenrmd] </a> <br/>
                        <a href="https://goodreads.com/aldenrmd"> <MenuBookIcon/> Goodreads [aldenrmd] </a> <br/>
                </div>
            </ImageContainer>
        </BodyContainer>
        </>
    )
}

export default AboutTheCreator;