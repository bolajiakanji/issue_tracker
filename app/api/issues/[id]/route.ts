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
    return NextResponse.json({ error: "invalid issue" }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });
  console.log(updatedIssue?.title);

  return NextResponse.json(updatedIssue, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue)
    return NextResponse.json({ error: "invalid issue" }, { status: 404 });

  await prisma.issue.delete({
    where: { id: issue.id },
  });

  return NextResponse.json({}, { status: 200 });
}
