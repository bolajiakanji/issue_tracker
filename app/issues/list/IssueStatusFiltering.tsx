"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { log } from "console";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Nill = "nill";

const statuses: { label: string; value: Status | Nill }[] = [
  { label: "All", value: "nill" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In progress", value: "PROGRESS" },
];

const IssueStatusFiltering = () => {
  const router = useRouter();
    const searchParams = useSearchParams();
    const logic = (params: URLSearchParams) => {
        if (searchParams.get("orderBy"))
            params.append("orderBy", searchParams.get("orderBy")!);

     }

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || "nill"}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        let query;
        if (status && status !== "nill") {
          params.append("status", status);
          logic(params)
        } else {
            logic(params)

        }
        query = params.size ? "?" + params.toString() : "";

        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || ""}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFiltering;
