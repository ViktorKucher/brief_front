import axios from "axios";
import { createQuestionBlank } from "./questions";

export const INSTANCE_API = axios.create({
  baseURL: "http://localhost:3003/api",
});
export const getAllBriefs = () => INSTANCE_API.get("/brief");
export const sendBriefs = (data: any) =>{
  const brief_content = createQuestionBlank(data)
  return INSTANCE_API.post("/brief", { brief_content });
}
export const deleteBrief = (id:string) =>INSTANCE_API.delete(`/brief/${id}`)
