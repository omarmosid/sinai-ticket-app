import React from 'react'
import Layout from '../../../components/reusable/layout/layout'
import UsersList from '../users-list/users-list'

const UsersPage = () => {
  return (
    <Layout>
      <UsersList isAdminHidden={true}/>
    </Layout>
  )
}

export default UsersPage
