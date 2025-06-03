/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from ".";

export const registerAttendee = async (data: any) => {
  return (await API.post(`/register`, data)).data;
};
