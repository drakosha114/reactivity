
import './App.css'
import {Fragment, useEffect, useState} from "react";
import type {Activity} from "./lib/types";
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";
import axios from "axios";



function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities').then(
    ).then((response) => setActivities(response.data))
  }, [])
  return (
      <Fragment>
          <Typography variant="h3" component="h3">
              Reactivities
          </Typography>
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
              <List>
                  {activities.map((activity: Activity) =>
                      <ListItem key={activity.id}>
                        <ListItemText
                          primary={activity.title}
                          secondary={activity.category}
                        />
                    </ListItem>
                  )}
              </List>
          </Box>
      </Fragment>
  )
}

export default App
