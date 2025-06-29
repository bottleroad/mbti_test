import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Supabase configuration missing!')
  console.error('Please set the following environment variables:')
  console.error('- NEXT_PUBLIC_SUPABASE_URL')
  console.error('- NEXT_PUBLIC_SUPABASE_ANON_KEY')
  
  // 빌드 시에는 에러를 던지지 않고, 런타임에서 처리
  if (typeof window !== 'undefined') {
    // 브라우저에서 실행 시 사용자에게 알림
    throw new Error('서비스 설정이 완료되지 않았습니다. 관리자에게 문의하세요.')
  }
}

export const supabase = createClient(
  supabaseUrl!,
  supabaseAnonKey!
)

// Supabase 연결 상태 확인 함수
export const checkSupabaseConnection = () => {
  return !!(supabaseUrl && supabaseAnonKey)
} 