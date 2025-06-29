'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface Question {
  id: number
  question_text: string
  dimension: string
  is_positive: boolean
}

export default function SupabaseTest() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('mbti_questions')
        .select('*')
        .limit(5)

      if (error) throw error

      setQuestions(data || [])
    } catch (error) {
      setError(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Supabase 연결 테스트</h2>
        <p>데이터를 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-red-600">연결 오류</h2>
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-green-600">✅ Supabase 연결 성공!</h2>
      <h3 className="text-lg font-semibold mb-3">MBTI 질문 샘플 ({questions.length}개)</h3>
      <div className="space-y-3">
        {questions.map((question) => (
          <div key={question.id} className="p-3 bg-gray-50 rounded border-l-4 border-blue-400">
            <p className="font-medium">{question.question_text}</p>
            <div className="flex gap-2 mt-2 text-sm text-gray-600">
              <span className="px-2 py-1 bg-blue-100 rounded">
                {question.dimension}
              </span>
              <span className={`px-2 py-1 rounded ${
                question.is_positive ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {question.is_positive ? '긍정' : '부정'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 