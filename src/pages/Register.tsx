/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "../component/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../component/select";
import { useMutation } from "@tanstack/react-query";
import { registerAttendee } from "../api/register";
import { toast } from "sonner";
import { CheckCircle, Loader } from "lucide-react";

const Register = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    department: "",
    level: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { isPending, mutate } = useMutation({
    mutationFn: (data: {
      fullName: string;
      email: string;
      phoneNumber: string;
      department: string;
      level: string;
    }) => registerAttendee(data),
    onSuccess: () => setSubmitSuccess(true),
    onError: (error: any) => toast.error(error.response.data.message),
  });

  const onSumbit = (e: FormEvent) => {
    e.preventDefault();

    mutate(formValues);
  };

  return (
    <div className="p-2">
      {!submitSuccess ? (
        <>
          <h1 className="text-[#0A80ED] text-sm text-center font-medium mt-10 md:text-base">
            TECH WAVE'<span className="font-black">25</span>
          </h1>
          <h2 className="text-center mt-1 text-xl md:text-2xl">
            Register for the Event
          </h2>

          <form
            className="mt-6 flex gap-3 flex-col max-w-[500px] mx-auto"
            onSubmit={onSumbit}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              onChange={onValueChange}
              className="border border-[#DBE0E5] p-2 text-sm w-full rounded-lg placeholder:text-[#DBE)]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onValueChange}
              className="border border-[#DBE0E5] p-2 text-sm w-full rounded-lg placeholder:text-[#DBE)]"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={onValueChange}
              className="border border-[#DBE0E5] p-2 text-sm w-full rounded-lg placeholder:text-[#DBE)]"
              required
            />

            <Select
              onValueChange={(value) =>
                setFormValues((prev) => ({ ...prev, department: value }))
              }
              required
            >
              <SelectTrigger className="w-full ring-0! border-[#DBE0E5] ">
                <SelectValue placeholder="Select Department" className="" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#DBE0E5]">
                <SelectGroup>
                  <SelectItem value="Computer Science and IT">
                    Computer Science and IT
                  </SelectItem>
                  <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                  <SelectItem value="Software Engineering">
                    Software Engineering
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              onValueChange={(value) =>
                setFormValues((prev) => ({ ...prev, department: value }))
              }
              required
            >
              <SelectTrigger className="w-full ring-0! border-[#DBE0E5] ">
                <SelectValue placeholder="Select Your Level" className="" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#DBE0E5]">
                <SelectGroup>
                  <SelectItem value="100">100</SelectItem>
                  <SelectItem value="200">200</SelectItem>
                  <SelectItem value="300">300</SelectItem>
                  <SelectItem value="400">400</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button
              disabled={isPending}
              className="bg-[#0A80ED]/80 text-white disabled:bg-[#0A80ED]/50 hover:bg-[#0A80ED]"
            >
              Register
              {isPending ? <Loader className="animate-spin" /> : null}
            </Button>
          </form>
        </>
      ) : (
        <div>
          {" "}
          <h1 className="text-[#0A80ED] text-sm text-center font-medium mt-10 md:text-base">
            TECH WAVE'<span className="font-black">25</span>
          </h1>
          <h2 className="text-center mt-1 text-xl md:text-2xl">
            Register for the Event
          </h2>
          <CheckCircle className="text-[#0A80ED] mx-auto mt-4 w-15 h-15" />
          <p className="text-sm md:text-base text-center mt-7">
            Thanks for joining us today!
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
