'use client'
import React, { useState, useEffect } from 'react'

import AuthModal from '@/components/AuthModal'
import UploadModal from '@/components/UploadModal'
import SubscribeModal from '@/components/SubscribeModal'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal />
    </>
  )
}

export default ModalProvider
