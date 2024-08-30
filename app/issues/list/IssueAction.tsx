import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFiltering from "./IssueStatusFiltering";

const IssueAction = () => {
  return (
    <Flex mb-5>
      <Button>
        <Link href="/issues/new"> New Issue</Link>
      </Button>
      <IssueStatusFiltering />
    </Flex>
  );
};

export default IssueAction;
