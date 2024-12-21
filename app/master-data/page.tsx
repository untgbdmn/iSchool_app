import HeaderPage from '@/layouts/header-page'
import MainLayouts from '@/layouts/main-layout'
import React from 'react'

export default function page() {
  return (
    <MainLayouts>
        <HeaderPage title='Master Data' />
    </MainLayouts>
  )
}
