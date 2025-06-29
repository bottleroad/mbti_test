'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { FaGoogle, FaGithub } from 'react-icons/fa'

interface AuthDialogProps {
  children: React.ReactNode
  defaultMode?: AuthMode
}

type AuthMode = 'signin' | 'signup'

export function AuthDialog({ children, defaultMode = 'signin' }: AuthDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [socialLoading, setSocialLoading] = useState<string | null>(null)
  const [mode, setMode] = useState<AuthMode>(defaultMode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      if (mode === 'signup') {
        if (password !== confirmPassword) {
          throw new Error('비밀번호가 일치하지 않습니다.')
        }
        if (password.length < 6) {
          throw new Error('비밀번호는 최소 6자 이상이어야 합니다.')
        }

        const { error } = await supabase.auth.signUp({
          email,
          password,
        })
        
        if (error) throw error
        
        setSuccess('회원가입이 완료되었습니다! 이메일을 확인해주세요.')
        setTimeout(() => {
          setOpen(false)
          resetForm()
        }, 2000)
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        
        if (error) throw error
        
        setSuccess('로그인되었습니다!')
        setTimeout(() => {
          setOpen(false)
          resetForm()
          window.location.reload()
        }, 1000)
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : '오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const handleSocialAuth = async (provider: 'google' | 'github') => {
    setSocialLoading(provider)
    setError('')
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })
      
      if (error) throw error
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : '소셜 로그인 중 오류가 발생했습니다.')
      setSocialLoading(null)
    }
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setError('')
    setSuccess('')
    setMode(defaultMode)
  }

  const toggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin')
    setError('')
    setSuccess('')
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen: boolean) => {
      setOpen(isOpen)
      if (!isOpen) resetForm()
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'signin' ? '로그인' : '회원가입'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'signin' 
              ? 'MBTI 테스트를 시작하려면 로그인하세요.' 
              : '새 계정을 만들어 MBTI 테스트를 시작하세요.'
            }
          </DialogDescription>
        </DialogHeader>
        
        {/* 소셜 로그인 버튼들 */}
        <div className="space-y-3">
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center gap-3 py-6"
            onClick={() => handleSocialAuth('google')}
            disabled={socialLoading !== null}
          >
            {socialLoading === 'google' ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
            ) : (
              <FaGoogle className="text-red-600" size={20} />
            )}
            Google로 {mode === 'signin' ? '로그인' : '회원가입'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center gap-3 py-6"
            onClick={() => handleSocialAuth('github')}
            disabled={socialLoading !== null}
          >
            {socialLoading === 'github' ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
            ) : (
              <FaGithub className="text-gray-900" size={20} />
            )}
            GitHub로 {mode === 'signin' ? '로그인' : '회원가입'}
          </Button>
        </div>

        <div className="relative">
          <Separator />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white px-2 text-sm text-gray-500">또는</span>
          </div>
        </div>
        
        <form onSubmit={handleEmailAuth} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">비밀번호 확인</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="비밀번호를 다시 입력하세요"
                required
              />
            </div>
          )}
          
          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}
          
          {success && (
            <div className="text-green-600 text-sm bg-green-50 p-3 rounded-md">
              {success}
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading || socialLoading !== null}
          >
            {loading ? '처리 중...' : (mode === 'signin' ? '로그인' : '회원가입')}
          </Button>
        </form>

        <div className="text-center">
          <Button
            type="button"
            variant="link"
            onClick={toggleMode}
            className="text-sm"
            disabled={loading || socialLoading !== null}
          >
            {mode === 'signin' 
              ? '계정이 없으신가요? 회원가입' 
              : '이미 계정이 있으신가요? 로그인'
            }
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 