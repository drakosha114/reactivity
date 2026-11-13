import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import type {Activity} from "../../../lib/types";

type Props = {
    activity: Activity | undefined;
    canselEdit: () => void;
    submitForm: (activity: Activity) => void;
}

export default function ActivityForm({activity, canselEdit, submitForm}: Props) {

    const formSubmitHandler = (event: SubmitEvent): void => {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget as HTMLFormElement);
        const payload: {[key: string]: FormDataEntryValue} = {}
        formData.forEach((value, key) => {
            payload[key] = value;
        });
        submitForm(payload as unknown as Activity);
    }

    return (
        <Paper sx={{padding: 3}}>
            <Typography variant='h5' color='primary' gutterBottom>Create Activity</Typography>
            <Box component='form' onSubmit={formSubmitHandler} sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
                <TextField name='id' type='hidden' defaultValue={activity?.id} />
                <TextField name='title' label='Title' defaultValue={activity?.title} />
                <TextField name='description' label='Description' defaultValue={activity?.description} multiline rows={5} />
                <TextField name='category' label='Category' defaultValue={activity?.category} />
                <TextField name='data' label='Date' defaultValue='date' value={activity?.date} />
                <TextField name='city' label='City' defaultValue={activity?.city} />
                <TextField name='venue' label='Venue' defaultValue={activity?.venue} />
                <Box sx={{display: 'flex', justifyContent: 'end', gap: 3}}>
                    <Button color='inherit' onClick={canselEdit}>Cancel</Button>
                    <Button type='submit' color='success'>Submit</Button>
                </Box>
            </Box>

        </Paper>
    )
}