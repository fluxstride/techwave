/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from ".";

export const registerFeedback = async (data: any) => {
  return (await API.post(`/feedbacks`, data)).data;
};
