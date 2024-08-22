import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "@/app/validation-schema";
import prisma from "@/prisma/client";

export async function PATCH(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue)
    return NextResponse.json({ error: "invalid issue" }, { status: 400 });

  const updatedIssue = prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });
    
  return NextResponse.json(updatedIssue, { status: 201 })

}

