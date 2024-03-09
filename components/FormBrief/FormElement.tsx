import { UseFormRegister } from "react-hook-form";
import { CustomVariants } from "./CustomVariants";
import {
  Checkbox,
  CheckboxGroup,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { QuestionVariants } from "@/types/form";

export const FormElement = ({
  register,
  variants,
  name,
  type,
}: {
  name: string;
  type: "checkbox" | "radio" | "tel" | "text" | "number";
  register: UseFormRegister<any>;
  variants?: QuestionVariants;
}) => {
  switch (type) {
    case "checkbox":
      return <CheckboxGroup>
        <Stack direction={"column"}>
          {variants?.elements.map((item, index) => (
          <Checkbox
            key={index}
            value={item}
            {...register(name,{required:true})}
          >{item}</Checkbox>
        ))}
        </Stack>
        
      </CheckboxGroup>;
    case "number":
      return (
        <CustomVariants
          register={register}
          name={name}
        />
      );
    case "radio":
      return (
        <RadioGroup>
          <Stack direction={"column"}>
            {variants?.elements.map((item, index) => (
              <Radio key={index} value={item} {...register(name,{required:true})}>
                {item}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      );
    case "tel":
      return (
        <Input
          type={"tel"}
          as={InputMask}
          maskChar={null}
          mask={"+**(***) ***-**-**"}
          placeholder="Ваша відповідь"
          {...register(name, {
            required:true,
            pattern: {
              value: /^[+]\d\d[(]\d\d\d[)] \d\d\d[-]\d\d[-]\d\d/,
              message: "Потрібно використовувати тільки цифри",
            },
          })}
        />
      );
    case "text":
      return (
        <Input type={"text"} placeholder="Ваша відповідь" {...register(name,{required:true})} />
      );
  }
};
