import "./styles.css";
import { Container } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import InputForm from "./InputForm";
import FilterSelect from "./FilterSelect";
import RemindersList from "./RemindersList";
import { filterList } from "./utils";

export default function App() {
  const [reminders, setReminders] = useState([]);
  const [userInput, setUserInput] = useState();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const addNewReminder = (item) => {
    setReminders([
      ...reminders,
      { ...item, id: Math.floor(Math.random(1024) * 100 + 10) }
    ]);
  };

  const filteredList = filterList({ list: reminders, selectedFilter });

  const setIsComplete = (isCompleteVal, id) => {
    const newReminders = reminders.map((reminder) => {
      if (reminder.id === id) {
        return { ...reminder, isComplete: isCompleteVal };
      }

      return reminder;
    });

    setReminders(newReminders);
  };

  const deleteReminder = (id) => {
    const newReminders = reminders.filter((reminder) => reminder.id !== id);
    console.log(reminders);
    setReminders(newReminders);
  };

  return (
    <div className="App">
      <Container maxW="container.lg" p="1rem">
        <VStack spacing="2rem">
          <Heading>Reminder App</Heading>
          <InputForm
            userInput={userInput}
            setUserInput={setUserInput}
            addNewReminder={addNewReminder}
          />
          <FilterSelect
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
          <RemindersList
            reminders={filteredList}
            setIsComplete={setIsComplete}
            deleteReminder={deleteReminder}
          />
        </VStack>
      </Container>
    </div>
  );
}
