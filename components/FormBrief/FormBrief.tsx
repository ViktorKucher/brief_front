"use client";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormType } from "../../types/form";
import { listQuestion } from "@/constants/questions";
import { FormElement } from "./FormElement";
import { sendBriefs } from "@/constants/axios";
import Link from "next/link";
import { ReactHTMLElement, useEffect, useRef } from "react";

export const FormBrief = () => {
  const toast = useToast();
  const {
    reset,
    handleSubmit,
    register,
    setValue,
    setFocus,
    unregister,
    formState: { errors, isSubmitting },
  } = useForm<FormType>();
  const myRef = useRef<null | HTMLDivElement>(null);
  const onSubmit = async (values: any, e: any) => {
    e.preventDefault();
    toast.promise(
      sendBriefs(values).then(() => {
        myRef.current != null && myRef.current.scrollIntoView();
      }),
      {
        success: { title: "Заявку надіслано", position: "bottom-left" },
        error: {
          title: "Помилка надсилання",
          duration: 1000,
          position: "bottom-left",
        },
        loading: {
          title: "Заявка відправляється",
          duration: 1000,
          position: "bottom-left",
        },
      }
    );
    reset();
  };
  const inputElement = useRef<any>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [inputElement.current]);
  return (
    <Box paddingX={10}>
      <Box display={"flex"} justifyContent={"right"} ref={myRef}>
        <Link href={"/admin"}>
          <Button width={150} colorScheme="telegram">
            ADMIN PANEL
          </Button>
        </Link>
      </Box>
      <Heading as={"h1"} size="2xl" textAlign={"center"}>
        Бриф
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        {listQuestion.map(({ name_block, questions }, key) => {
          return (
            <Box
              key={key}
              display={"flex"}
              flexDirection={"column"}
              marginBottom={4}
            >
              <Heading as={"h2"} size="xl" marginBottom={3}>
                {name_block}
              </Heading>
              {questions.map((item, index) => {
                return (
                  <FormControl
                    key={index}
                    isInvalid={errors[item.name] && true}
                    marginBottom={2}
                    ref={inputElement}
                  >
                    <FormLabel fontSize="lg" marginBottom={1}>
                      {item.question}
                      <Text as={'span'} color={'red'}>{item.required && "*"}</Text>
                    </FormLabel>
                    <FormElement
                      key={index}
                      register={register}
                      type={item.type}
                      name={item.name}
                      variants={item.variants}
                      required={item.required}
                      setValue={setValue}
                      unregister={unregister}
                      
                    />
                    <FormErrorMessage>
                      {errors[item.name] && errors[item.name]?.message}
                    </FormErrorMessage>
                  </FormControl>
                );
              })}
            </Box>
          );
        })}
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};
