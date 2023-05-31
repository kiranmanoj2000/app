
import {Card, CardContent, CardMedia, CardActions, Button, Typography} from '@mui/material';
import image from "../assets/images/Oracle_NetSuite_2021.png"
export default function ExperienceCard(props) {
    return (
      <Card sx={{ maxWidth: 400 }}>
        <div style={{padding: '15px'}}>
        <CardMedia
          component="img"
          alt={props.name}
          height="200"
          
          image={props.logo}
        />

        <CardContent>
        <Typography gutterBottom variant="h4" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.jobTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Languages: {props.languages}
            <br/>
            Technologies: {props.technologies}
          </Typography>
        </CardContent>
        <CardActions>
        <Typography variant="body3" color="text.secondary">
            {props.jobDesc}
          </Typography>
        </CardActions>
        </div>
        
      </Card>
    );
  }