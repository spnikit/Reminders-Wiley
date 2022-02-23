import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const defaultProps = {
  reminderText: "",
  dueDate: new Date().toISOString().substr(0, 10)
};

// Component
function InputForm({
  userInput = {
    reminderText: defaultProps.reminderText,
    dueDate: defaultProps.dueDate
  },
  setUserInput,
  addNewReminder
}) {
  const handleTextChange = (evt) => {
    const newUserInput = {
      ...userInput,
      reminderText: evt.target.value.trim()
    };
    setUserInput(newUserInput);
  };

  const handleDateChange = (evt) => {
    const date = new Date(evt.target.value);
    const formattedDate = date.toISOString().substr(0, 10);
    const newUserInput = { ...userInput, dueDate: formattedDate };
    setUserInput(newUserInput);
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    const itemToAdd = { ...userInput, isComplete: false };
    addNewReminder(itemToAdd);
    setUserInput({
      reminderText: "",
      dueDate: defaultProps.dueDate
    });
  };

  return (
    <form>
      <FormControl>
        <VStack spacing="1rem">
          <FormLabel htmlFor="reminderText">What do you want to do?</FormLabel>
          <Input
            onChange={handleTextChange}
            value={userInput?.reminderText}
            id="reminderText"
          />
          <FormLabel htmlFor="dueDate">When?</FormLabel>
          <Input
            onChange={handleDateChange}
            type="date"
            value={userInput?.dueDate}
            id="dueDate"
          />
          <Button onClick={handleClick}>Add Item</Button>
        </VStack>
      </FormControl>
    </form>
  );
}

export default InputForm;
