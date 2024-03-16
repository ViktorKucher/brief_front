import { Control, FieldErrors, UseFormRegister } from "react-hook-form";

export type FormType = {
    name_customer: string;
    phone_customer: string;
    messager_customer:string;
    time_to_speak:string;
    name_project:string;
    idea_project:string;
    unique_selling_proposition:string;
    value_of_the_product:string;
    benefit_value_of_the_product:string;
    project_clients:string;
    info_project_clients:string[];
    why_site_need:string;
    time_use_site:string;
    type_site:string;
    type_buy_project:string;
    opponents:string;
    opponents_details:string[];
    geolocation:string,
    shortTask:string,
    hostingNeed:string[],
    domainNeed:string[],
    needsAllSite:string,
    typeSite:string[],
    uiSite:string[],
    logo:string[],
    dataEnd:string,
    money:string,
    structureSite:string,
    languages:string,
    content:string,
    seo:string,
    different:string
  };
export type FormInputType = {
  register:UseFormRegister<any>,
  required:boolean,
  errors:FieldErrors<FormType>,
  question: QuestionType;
  control:Control<FormType, any, any>;
}

export type QuestionVariants = {
  elements: string[];
  add_different_question: boolean;
};
export type QuestionType = {
  name: keyof FormType;
  question: string;
  required:boolean,
  type: "checkbox" | "radio" | "tel" | "text" | "number";
  variants?: QuestionVariants;
};
export type QuestionListType = {
  name_block: string;
  questions: QuestionType[];
};