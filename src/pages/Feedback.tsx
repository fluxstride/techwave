/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type FormEvent } from "react";
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
import { CheckCircle, Loader } from "lucide-react";
import { registerFeedback } from "../api/feedback";
import { toast } from "sonner";

const Feedback = () => {
  const [formValues, setFormValues] = useState({
    rating: "",
    feedback: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: { rating: string; feedback: string }) =>
      await registerFeedback(data),
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
            Share Your Thoughts
          </h2>
          <p className="text-sm md:text-base text-center mt-7">
            Your feedback will helps us improve future events.
          </p>
          <form
            className="mt-4 flex gap-3 flex-col max-w-[500px] mx-auto"
            onSubmit={onSumbit}
          >
            <Select
              onValueChange={(value) =>
                setFormValues((prev) => ({ ...prev, rating: value }))
              }
              required
            >
              <SelectTrigger className="w-full ring-0! border-[#DBE0E5] ">
                <SelectValue placeholder="Rating (1-5)" className="" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#DBE0E5]">
                <SelectGroup>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <textarea
              name="feedback"
              placeholder="Feedback"
              onChange={(e) =>
                setFormValues((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="border border-[#DBE0E5] p-2 text-sm w-full rounded-lg placeholder:text-[#DBE)] h-30"
              required
            />
            <Button
              disabled={isPending}
              className="bg-[#0A80ED]/80 text-white disabled:bg-[#0A80ED]/50 hover:bg-[#0A80ED]"
            >
              Submit
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
            Share Your Thoughts
          </h2>
          <CheckCircle className="text-[#0A80ED] mx-auto mt-4 w-15 h-15" />
          <p className="text-sm md:text-base text-center mt-7">
            Thanks for sharing your thoughts!
          </p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
