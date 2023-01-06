import React from 'react'
import { useParams } from 'react-router'

export const UserDetail = () => {

    const {userId} = useParams()
    
  return (
    <div>UserDetail Found!!!{userId}</div>
  )
}
export default UserDetail