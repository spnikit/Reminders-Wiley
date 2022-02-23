import Reminder from "./Reminder";
import { Grid, GridItem } from "@chakra-ui/react";

const defaultProps = {
  reminderText: "No reminders yet",
  dueDate: new Date().toISOString().substr(0, 10),
  isComplete: false
};

function RemindersList({
  reminders = [
    {
      reminderText: defaultProps.reminderText,
      dueDate: defaultProps.dueDate,
      isComplete: defaultProps.isComplete
    }
  ],
  setIsComplete,
  deleteReminder
}) {
  const remindersUi = reminders.map((reminder, index) => (
    <GridItem key={index}>
      <Reminder
        id={reminder.id}
        reminderText={reminder.reminderText}
        dueDate={reminder.dueDate}
        isComplete={reminder.isComplete}
        setIsComplete={setIsComplete}
        deleteReminder={deleteReminder}
      />
    </GridItem>
  ));

  return (
    <Grid
      maxW="100%"
      templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
      gridGap="1rem"
    >
      {remindersUi}
    </Grid>
  );
}

export default RemindersList;
