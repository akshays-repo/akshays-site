import { FC, useState, useCallback } from 'react'
import { Container } from './Container'

export const DeskTop: FC = () => {
  return (
    <div>
      <Container hideSourceOnDrag={false} />
    </div>
  )
}
