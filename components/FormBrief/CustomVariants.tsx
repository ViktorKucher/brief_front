import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

export const CustomVariants = ({
  register,
  name,
}: {
  register: UseFormRegister<any>;
  name: string;
}) => {
  const [value, setValue] = useState(3);
  const handleChange = (value: string | number) => setValue(+value);
  return (
    <Box>
      <NumberInput width={100} min={3} max={6} value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Box>
        {Array.from({ length: value }).map((item, index) => {
          return (
            <Input
              key={index}
              type={"text"}
              placeholder="Ваша відповідь"
              {...register(`${name}.${index}`)}
            />
          );
        })}
      </Box>
    </Box>
  );
};
