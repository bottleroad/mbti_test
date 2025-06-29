'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Auth callback error:', error)
          router.push('/?error=auth_failed')
          return
        }

        if (data.session) {
          // 인증 성공 - 홈페이지로 리다이렉트
          router.push('/')
        } else {
          // 세션이 없음 - 홈페이지로 리다이렉트
          router.push('/')
        }
      } catch (error) {
        console.error('Unexpected error:', error)
        router.push('/?error=unexpected')
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-slate-600 text-lg">인증 처리 중...</p>
        <p className="text-slate-500 text-sm mt-2">잠시만 기다려주세요.</p>
      </div>
    </div>
  )
} 