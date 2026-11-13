import type {Activity} from "../../../lib/types";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

type Props = {
    activity: Activity;
    cancelActivitySelection: () => void,
    editActivity: (id: string) => void
}

export default function ActivityDetails({activity, cancelActivitySelection, editActivity}: Props) {
    return (
        <Card>
            <CardMedia
                component='img'
                src={`/images/categoryImages/${activity.category}.jpg`}
            ></CardMedia>
            <CardContent>
                <Typography variant='h5'>{activity.title}</Typography>
                <Typography variant='subtitle1' sx={{fontWeight: 'light'}}>{activity.date}</Typography>
                <Typography variant='body1'>{activity.description}</Typography>
            </CardContent>
            <CardActions>
                <Button color='primary' onClick={() => editActivity(activity.id)}>Edit</Button>
                <Button color='inherit' onClick={() => cancelActivitySelection()}>Cancel</Button>
            </CardActions>
        </Card>
    )
}