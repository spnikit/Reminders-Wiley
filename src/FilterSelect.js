import { Select } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";

function FilterSelect({ selectedFilter, setSelectedFilter }) {
  const handleChange = (evt) => {
    setSelectedFilter(evt.target.value);
  };

  return (
    <FormLabel htmlFor="filterReminders">
      Show Tasks due:
      <Select
        mt="1rem"
        placeholder="Select option"
        id="filterReminders"
        value={selectedFilter}
        onChange={handleChange}
      >
        <option value="2day">Within 2 days</option>
        <option value="1week">Within 1 week</option>
        <option value="30days">Within 30 days</option>
        <option value="all">any time</option>
      </Select>
    </FormLabel>
  );
}

export default FilterSelect;
