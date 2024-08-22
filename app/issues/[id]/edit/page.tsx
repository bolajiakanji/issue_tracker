import React from 'react'
import IssueForm from '../../_components/IssueForm'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

const EditIssuePage = ({ params: { id } }) => {
    const issue = prisma.issue.findUnique({
        where: { id: parseInt(id)}
    })

    if (!issue) notFound()
    
  return (
      <IssueForm status={ status } />
  )
}

export default EditIssuePage