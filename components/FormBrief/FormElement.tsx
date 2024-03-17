import { FormState, UseFormRegister, UseFormSetValue, UseFormUnregister } from "react-hook-form";
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
import { useState } from "react";
import { useHookFormMask } from 'use-mask-input';

export const FormElement = ({
  setValue,
  register,
  variants,
  name,
  type,
  required,
  unregister
}: {
  name: string;
  type: "checkbox" | "radio" | "tel" | "text" | "number";
  register: UseFormRegister<any>;
  variants?: QuestionVariants;
  required: boolean;
  setValue: UseFormSetValue<any>;
  unregister: UseFormUnregister<any>
}) => {
  const [active, setActive] = useState<boolean>(false);
  const registerWithMask = useHookFormMask(register);
  switch (type) {
    case "checkbox":
      return (
        <CheckboxGroup>
          <Stack direction={"column"}>
            {variants?.elements.map((item, index) => (
              <Checkbox
                key={index}
                value={item}
                {...register(name, { required })}
              >
                {item}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      );
    case "number":
      return <CustomVariants register={register} name={name} />;
    case "radio":
      return (
        <RadioGroup>
          <Stack direction={"column"}>
            {variants?.elements.map((item, index) => (
              <Radio
                key={index}
                value={item}
                {...register(name, { required })}
                onChange={(e) => {
                  if (e.target.checked) {
                    unregister(name)
                    setActive(false);
                    register(name)
                  }
                }}
              >
                {item}
              </Radio>
            ))}
            {variants?.add_different_question && (
              <>
                <Radio
                  value={"different"}
                  onChange={(e) => e.target.checked && setActive(true)}
                >
                  Інше
                </Radio>
                {active && (
                  <Input
                    type={"text"}
                    placeholder="Ваша відповідь"
                    {...register(name, { required })}
                    onChange={(e) => setValue(name, e.target.value)}
                  />
                )}
              </>
            )}
          </Stack>
        </RadioGroup>
      );
    case "tel":
      return (
        <Input
          type={"text"}
          placeholder="Ваша відповідь"
          {...registerWithMask(name,['+**(***) ***-**-**'], {
            required,
            minLength:{value:18,message:'Мінімальна довжина'}
          })}
        />
      );
    case "text":
      return (
        <Input
          type={"text"}
          {...register(name, { required })}
          placeholder="Ваша відповідь"
          
        />
      );
  }
};
