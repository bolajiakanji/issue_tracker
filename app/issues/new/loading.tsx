import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";
import React from "react";

const loadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="28rem" />
    </Box>
  );
};

export default loadingNewIssuePage;
