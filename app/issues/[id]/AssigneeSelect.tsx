'use client'

import { Select } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
    
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assignee..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Sugestion</Select.Label>
          <Select.Item value="1">Bolaji</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
