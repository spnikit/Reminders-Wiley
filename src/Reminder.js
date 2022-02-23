import { Box } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function Reminder({
  reminderText = "No reminders yet",
  dueDate,
  isComplete,
  setIsComplete,
  id,
  deleteReminder
}) {
  const handleChange = () => {
    setIsComplete(!isComplete, id);
  };

  const handleClick = () => {
    deleteReminder(id);
  };

  return (
    <Box
      border={`1px solid ${isComplete ? "green" : "tomato"}`}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      p="1rem 2rem"
      borderRadius="5px"
    >
      <Box>Item: {reminderText}</Box>
      <Box>DueDate: {dueDate}</Box>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        Completed:{" "}
        <Badge colorScheme={isComplete ? "green" : "red"}>
          {String(isComplete)}
        </Badge>
        <Checkbox ml="1rem" checked={isComplete} onChange={handleChange} />
      </Box>
      <Button mt="1rem" size="sm" colorScheme="red" onClick={handleClick}>
        Delete
      </Button>
    </Box>
  );
}

export default Reminder;
