import React from "react";
import { Box } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssueAction from "./IssueAction";
import { Status } from "@prisma/client";
import Pagination from "@/app/components/Pagination";
import IssueTable, { columnsName, IssueQuery } from "./IssueTable";

interface Props {
  searchParams: IssueQuery;
}

const IssuePage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const where = { status };

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const orderBy = columnsName.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const items_number = await prisma.issue.count({ where });

  return (
    <div>
      <IssueAction />
      <IssueTable searchParams={searchParams} issues={issues} />

      <Box mt="4">
        <Pagination
          itemCount={items_number}
          pageSize={pageSize}
          currentPage={page}
        />
      </Box>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuePage;
