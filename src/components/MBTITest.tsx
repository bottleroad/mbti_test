'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Question {
  id: number
  question_text: string
  dimension: string
  is_positive: boolean
}

interface Answer {
  questionId: number
  score: number // 1-5 점수
  dimension: string
  isPositive: boolean
}

interface MBTIScores {
  E: number
  I: number
  S: number
  N: number
  T: number
  F: number
  J: number
  P: number
}

interface MBTITestProps {
  ageGroup?: string
}

export default function MBTITest({ ageGroup = 'general' }: MBTITestProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [loading, setLoading] = useState(true)
  const [testComplete, setTestComplete] = useState(false)
  const [result, setResult] = useState<string>('')
  const [scores, setScores] = useState<MBTIScores | null>(null)

  useEffect(() => {
    fetchQuestions()
  }, [ageGroup])

  const fetchQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('mbti_questions')
        .select('*')
        .eq('age_group', ageGroup)
        .order('id')

      if (error) throw error
      setQuestions(data || [])
    } catch (error) {
      console.error('질문을 불러오는 중 오류 발생:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAnswer = (score: number) => {
    const question = questions[currentQuestion]
    const newAnswer: Answer = {
      questionId: question.id,
      score,
      dimension: question.dimension,
      isPositive: question.is_positive
    }

    const newAnswers = [...answers, newAnswer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1)) // 마지막 답변 제거
    }
  }

  const calculateResult = (allAnswers: Answer[]) => {
    const scores: MBTIScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }

    allAnswers.forEach(answer => {
      const { dimension, score, isPositive } = answer
      const adjustedScore = isPositive ? score : 6 - score // 부정 질문은 점수 반전

      switch (dimension) {
        case 'EI':
          scores.E += adjustedScore > 3 ? adjustedScore - 3 : 0
          scores.I += adjustedScore < 3 ? 3 - adjustedScore : 0
          break
        case 'SN':
          scores.S += adjustedScore > 3 ? adjustedScore - 3 : 0
          scores.N += adjustedScore < 3 ? 3 - adjustedScore : 0
          break
        case 'TF':
          scores.T += adjustedScore > 3 ? adjustedScore - 3 : 0
          scores.F += adjustedScore < 3 ? 3 - adjustedScore : 0
          break
        case 'JP':
          scores.J += adjustedScore > 3 ? adjustedScore - 3 : 0
          scores.P += adjustedScore < 3 ? 3 - adjustedScore : 0
          break
      }
    })

    // 결과 계산
    const personality = 
      (scores.E >= scores.I ? 'E' : 'I') +
      (scores.S >= scores.N ? 'S' : 'N') +
      (scores.T >= scores.F ? 'T' : 'F') +
      (scores.J >= scores.P ? 'J' : 'P')

    setResult(personality)
    setScores(scores)
    setTestComplete(true)
    
    // 결과 저장
    saveResult(personality, scores, allAnswers)
  }

  const saveResult = async (personality: string, scores: MBTIScores, allAnswers: Answer[]) => {
    try {
      await supabase
        .from('mbti_results')
        .insert({
          personality_type: personality,
          scores,
          answers: allAnswers
        })
    } catch (error) {
      console.error('결과 저장 중 오류 발생:', error)
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setTestComplete(false)
    setResult('')
    setScores(null)
  }

  if (loading) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-6"></div>
          <p className="text-slate-600 text-lg">질문을 불러오는 중...</p>
        </CardContent>
      </Card>
    )
  }

  if (testComplete) {
    const handleViewDetailedResult = () => {
      const scoresParam = encodeURIComponent(JSON.stringify(scores))
      window.location.href = `/result/${result}?scores=${scoresParam}`
    }

    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-700 px-4 py-2">
              🎉 테스트 완료!
            </Badge>
          </div>
          <CardTitle className="text-4xl font-bold text-slate-900 mb-4">
            당신의 성격 유형
          </CardTitle>
          <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {result}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <Separator />
          
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              성격 차원별 점수
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scores && Object.entries(scores).map(([key, value]) => (
                <div key={key} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="font-medium">
                      {key}
                    </Badge>
                    <span className="text-lg font-bold text-blue-600">{value}</span>
                  </div>
                  <Progress 
                    value={Math.min(value * 10, 100)} 
                    className="h-3"
                  />
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleViewDetailedResult}
              className="flex-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              상세 결과 보기
            </Button>
            <Button
              onClick={resetTest}
              variant="outline"
              className="flex-1 py-6 text-lg font-medium border-2 bg-gradient-to-r from-slate-50 to-gray-50 hover:from-slate-100 hover:to-gray-100 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              다시 테스트하기
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (questions.length === 0) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-16">
          <p className="text-slate-600 text-lg">질문을 불러올 수 없습니다.</p>
        </CardContent>
      </Card>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="pb-6">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            질문 {currentQuestion + 1} / {questions.length}
          </Badge>
          <Badge variant="outline">
            {Math.round(progress)}% 완료
          </Badge>
        </div>
        <Progress value={progress} className="h-3" />
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 leading-relaxed min-h-[4rem] flex items-center justify-center">
            {questions[currentQuestion]?.question_text}
          </h3>
        </div>

        <Separator />

        <div className="space-y-4">
          {[
            { score: 5, text: '매우 그렇다' },
            { score: 4, text: '그렇다' },
            { score: 3, text: '보통이다' },
            { score: 2, text: '그렇지 않다' },
            { score: 1, text: '전혀 그렇지 않다' }
          ].map((option) => (
            <Button
              key={option.score}
              onClick={() => handleAnswer(option.score)}
              variant="outline"
              className="w-full py-6 text-lg font-medium bg-white hover:bg-slate-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border-slate-200"
              size="lg"
            >
              {option.text}
            </Button>
          ))}
        </div>

        <Separator />

        {/* 하단 네비게이션 버튼 */}
        <div className="flex justify-between items-center pt-4">
          <Button
            onClick={handlePreviousQuestion}
            variant="outline"
            disabled={currentQuestion === 0}
            className="bg-gradient-to-r from-slate-50 to-gray-50 hover:from-slate-100 hover:to-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            이전 문제
          </Button>
          
          <Button
            onClick={resetTest}
            variant="outline"
            className="bg-gradient-to-r from-slate-50 to-gray-50 hover:from-slate-100 hover:to-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            다시 시작하기
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 