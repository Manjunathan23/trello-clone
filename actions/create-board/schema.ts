import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Title is Required",
      invalid_type_error: "Expected string",
    })
    .min(3, {
      message: "Title is too short.",
    }),
  image: z.string({
    required_error: "Image is required",
    invalid_type_error: "Invalid input provided",
  }),
});
