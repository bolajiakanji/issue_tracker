import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Tittle is required").max(255),
  description: z.string().min(1, "Description is required").max(65535),
});

export const PatchIssueSchema = z.object({
  title: z.string().min(1, "Tittle is required").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "assign to user ID is required")
    .max(255)
    .optional()
    .nullable(),
});
