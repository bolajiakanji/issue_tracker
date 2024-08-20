import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap: Record<Status, { label: string, color: 'violet' | 'green' | 'red' }> = {
    OPEN: { label: 'Open', color: 'red' },
    CLOSED: { label: 'Close', color: 'green' },
    PROGRESS: { label: 'In Progree', color: 'violet' },
    
}

const IssueStatusBadge = ({ status }: { status: Status } ) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  )
}

export default IssueStatusBadge