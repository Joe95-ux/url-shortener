import { z } from "zod";

export const urlFormSchema = z.object({
  url: z.string({ message: "valid URL is required" }).url(),
});

export type UrlFormSchemaType = z.infer<typeof urlFormSchema>;                            