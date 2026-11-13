
import './App.css'
import { Fragment, useEffect, useState } from "react";
import type {Activity} from "../../lib/types";
import {Box, Container, CssBaseline} from "@mui/material";
import axios from "axios";
import NavBar from "./NavBar.tsx";
import {ActivityDashboard} from "../../features/activities/dashboard/ActivityDashboard.tsx";



function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState<boolean>(false);

    useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities').then((response) => setActivities(response.data))
    }, [])

    const selectActivityHandler = (id: string): void => {
        setSelectedActivity((activities || []).find(activity => activity.id === id));
    }

    const cancelActivitySelectionHandler = (): void => {
        setSelectedActivity(undefined);
        setEditMode(false);
    }

    const enableEditModeHandler = (id?: string): void => {
        if (id) {
            setSelectedActivity((activities || []).find(activity => activity.id === id))
        } else {
            setSelectedActivity(undefined);
        }
        setEditMode(true);
    }

    const disableEditModeHandler = (): void => {
        setEditMode(false)
    }

    const submitFormHandler = (activity: Activity): void => {
        if (activity.id) {
            setActivities(activities.map(a => a.id === activity.id ? activity : a ));
        } else {
            setActivities([...activities, {...activity, id: activities.length.toString()}])
        }
        setEditMode(false);
    }

    const deleteActivityHandler = (id: string): void => {
        setActivities(activities.filter(activity => activity.id !== id));
        if(selectedActivity?.id === id) {
            setSelectedActivity(undefined);
            if (editMode) {
                setEditMode(false);
            }
        }
    }

      return (
          <Fragment>
              <Box sx={{bgcolor: '#eeeeee'}}>
                  <CssBaseline />
                  <NavBar createActivity={enableEditModeHandler}></NavBar>
                  <Box sx={{ flexGrow: 1 }}>
                      <Container maxWidth='xl' sx={{mt: 2, mb: 2}}>
                          <ActivityDashboard
                              activities={activities}
                              selectedActivity={selectedActivity}
                              selectActivity={selectActivityHandler}
                              cancelActivitySelection={cancelActivitySelectionHandler}
                              editMode={editMode}
                              cancelEdit={disableEditModeHandler}
                              editActivity={enableEditModeHandler}
                              submitActivity={submitFormHandler}
                              deleteActivity={deleteActivityHandler}
                          />
                      </Container>
                  </Box>
              </Box>
          </Fragment>
      )
}

export default App
