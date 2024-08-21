import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";
const LoadingIssueDetailPage = () => {
  return (
    <div>
      <Heading>
        <Skeleton className="max-w-7"/>
      </Heading>
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailPage;
