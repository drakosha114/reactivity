import type {Activity} from "../../../lib/types";
import {Grid} from "@mui/material";
import ActivitiesList from "./ActivitiesList.tsx";
import ActivityDetails from "../activity/ActivityDetails.tsx";
import ActivityForm from "../form/ActivityForm.tsx";

type Props = {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelActivitySelection: () => void;
    editMode: boolean;
    cancelEdit: () => void;
    editActivity: (id: string) => void;
    submitActivity: (activity: Activity) => void;
    deleteActivity: (id: string) => void
}

export function ActivityDashboard({
                                      activities,
                                      selectedActivity,
                                      selectActivity,
                                      cancelActivitySelection,
                                      editMode,
                                      editActivity,
                                      cancelEdit,
                                      submitActivity,
                                      deleteActivity
}: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivitiesList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                />
            </Grid>
            <Grid size={5}>
                {
                    selectedActivity &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelActivitySelection={cancelActivitySelection}
                        editActivity={editActivity}
                    />
                }
                {
                    editMode &&
                    <ActivityForm
                        activity={selectedActivity}
                        canselEdit={cancelEdit}
                        submitForm={submitActivity}
                    />
                }
            </Grid>
        </Grid>
    )
}