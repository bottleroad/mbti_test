'use client'

import { useSearchParams, useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

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

const mbtiDescriptions: Record<string, {
  title: string
  description: string
  strengths: string[]
  weaknesses: string[]
  careers: string[]
}> = {
  ENFJ: {
    title: "선도자 (The Protagonist)",
    description: "타고난 지도자로, 청중을 사로잡고 의욕을 불어넣는 능력이 있습니다. 이들은 다른 사람들이 더 나은 사람이 되도록 도와주는 것에서 자부심과 기쁨을 느낍니다.",
    strengths: ["뛰어난 의사소통 능력", "카리스마와 영감을 주는 능력", "이타적이고 관대함", "타인의 성장을 돕는 것을 좋아함"],
    weaknesses: ["지나치게 이상적임", "자신을 희생하는 경향", "비판에 민감함", "완벽주의 성향"],
    careers: ["교사", "상담사", "코치", "인사 관리자", "정치인", "언론인"]
  },
  ENFP: {
    title: "활동가 (The Campaigner)",
    description: "진정으로 자유로운 영혼의 소유자입니다. 활기차고 낙관적이며 창의적인 이들은 삶을 가능성으로 가득한 큰 그림으로 봅니다.",
    strengths: ["열정적이고 에너지가 넘침", "창의적이고 혁신적", "뛰어난 의사소통 능력", "호기심이 많고 개방적"],
    weaknesses: ["집중력 부족", "실용적인 일을 소홀히 함", "스트레스에 민감", "루틴을 싫어함"],
    careers: ["마케터", "저널리스트", "상담사", "예술가", "기업가", "연구원"]
  },
  ENTJ: {
    title: "통솔자 (The Commander)",
    description: "타고난 지도자입니다. 이들은 카리스마와 자신감, 권위를 바탕으로 공통된 목표를 위해 사람들을 하나로 모으는 능력이 있습니다.",
    strengths: ["뛰어난 리더십", "전략적 사고", "효율성 추구", "목표 지향적"],
    weaknesses: ["지나치게 비판적", "감정적 측면 간과", "참을성 부족", "권위적일 수 있음"],
    careers: ["CEO", "관리자", "변호사", "컨설턴트", "투자 분석가", "기업가"]
  },
  ENTP: {
    title: "토론가 (The Debater)",
    description: "궁극적인 악마의 변호인으로, 논쟁이나 토론에서 상대방을 이기는 것보다는 지적 자극을 받는 것 자체를 즐깁니다.",
    strengths: ["빠른 사고력", "창의적이고 혁신적", "뛰어난 토론 능력", "적응력이 뛰어남"],
    weaknesses: ["일관성 부족", "세부사항 간과", "논쟁을 좋아함", "루틴을 싫어함"],
    careers: ["발명가", "변호사", "컨설턴트", "마케터", "언론인", "연구원"]
  },
  ESFJ: {
    title: "집정관 (The Consul)",
    description: "매우 인기가 많은 사람들로, 항상 열심히 도우려 하고 다른 사람들 앞에서 빛을 발하는 능력이 있습니다.",
    strengths: ["따뜻하고 배려심이 많음", "협력적이고 조화를 추구", "책임감이 강함", "실용적이고 현실적"],
    weaknesses: ["비판에 민감", "변화를 어려워함", "자신의 욕구를 무시", "갈등을 회피"],
    careers: ["간호사", "교사", "상담사", "인사 관리자", "사회복지사", "행정직"]
  },
  ESFP: {
    title: "연예인 (The Entertainer)",
    description: "자발적이고 에너지 넘치며 열정적인 사람들입니다. 삶을 즐기고 다른 사람들도 자신들의 즐거움에 동참하기를 바랍니다.",
    strengths: ["친근하고 사교적", "낙관적이고 열정적", "실용적이고 현실적", "융통성이 있음"],
    weaknesses: ["계획성 부족", "비판에 민감", "장기적 목표 설정 어려움", "갈등을 회피"],
    careers: ["배우", "음악가", "상담사", "교사", "이벤트 기획자", "판매직"]
  },
  ESTJ: {
    title: "경영자 (The Executive)",
    description: "뛰어난 관리자로, 사물이나 사람을 관리하는 데 타의 추종을 불허하는 능력을 발휘합니다.",
    strengths: ["조직력이 뛰어남", "책임감이 강함", "현실적이고 실용적", "목표 지향적"],
    weaknesses: ["융통성 부족", "감정적 측면 간과", "변화에 저항", "지나치게 비판적"],
    careers: ["관리자", "회계사", "변호사", "경찰관", "군인", "은행원"]
  },
  ESTP: {
    title: "사업가 (The Entrepreneur)",
    description: "진정한 삶의 달인입니다. 상황에 맞춰 능숙하게 적응하며 다른 사람들도 자신을 따라 하도록 이끄는 능력이 있습니다.",
    strengths: ["적응력이 뛰어남", "실용적이고 현실적", "사교적이고 활동적", "위기 상황에 강함"],
    weaknesses: ["장기 계획 부족", "규칙을 무시하는 경향", "집중력 부족", "민감함"],
    careers: ["영업직", "마케터", "기업가", "운동선수", "경찰관", "응급의료진"]
  },
  INFJ: {
    title: "옹호자 (The Advocate)",
    description: "매우 희귀한 성격으로, 높은 이상과 뚜렷한 도덕적 지침을 가지고 있습니다. 단순한 몽상가가 아니라 실제로 목표를 달성하고 지속적으로 선한 영향력을 발휘하는 사람들입니다.",
    strengths: ["통찰력이 뛰어남", "이상주의적", "창의적이고 독창적", "결단력이 있음"],
    weaknesses: ["완벽주의 성향", "지나치게 민감", "번아웃되기 쉬움", "비판에 민감"],
    careers: ["상담사", "심리학자", "작가", "예술가", "사회복지사", "종교인"]
  },
  INFP: {
    title: "중재자 (The Mediator)",
    description: "진정한 이상주의자로, 악한 사람에게서도 선한 면을 찾으며 더 나은 세상을 만들고자 노력합니다.",
    strengths: ["이상주의적", "창의적이고 개방적", "열정적", "개인의 가치를 중시"],
    weaknesses: ["지나치게 이상적", "실용성 부족", "자기비판적", "갈등을 회피"],
    careers: ["작가", "예술가", "상담사", "심리학자", "사회복지사", "언론인"]
  },
  INTJ: {
    title: "건축가 (The Architect)",
    description: "풍부한 상상력을 가지고 있으면서도 결단력이 있고, 야심차면서도 사생활을 중시하며, 호기심이 많으면서도 에너지를 함부로 쓰지 않습니다.",
    strengths: ["전략적 사고", "독립적", "결단력이 있음", "창의적이고 혁신적"],
    weaknesses: ["지나치게 비판적", "사회적 기술 부족", "완벽주의 성향", "감정 표현 어려움"],
    careers: ["과학자", "엔지니어", "건축가", "컨설턴트", "연구원", "전략기획자"]
  },
  INTP: {
    title: "논리술사 (The Thinker)",
    description: "자신의 독특한 관점과 왕성한 지적 호기심을 바탕으로 새로운 아이디어를 내놓는 혁신적인 발명가입니다.",
    strengths: ["논리적이고 분석적", "창의적이고 혁신적", "객관적", "독립적"],
    weaknesses: ["실용성 부족", "사회적 기술 부족", "일관성 부족", "감정 표현 어려움"],
    careers: ["연구원", "과학자", "프로그래머", "수학자", "철학자", "분석가"]
  },
  ISFJ: {
    title: "수호자 (The Protector)",
    description: "매우 헌신적이고 따뜻한 수호자로, 언제나 소중한 사람들을 지킬 준비가 되어 있습니다.",
    strengths: ["배려심이 많음", "책임감이 강함", "세심하고 신중", "충성심이 강함"],
    weaknesses: ["자기주장 부족", "변화를 어려워함", "과도한 겸손", "스트레스를 내재화"],
    careers: ["간호사", "교사", "상담사", "사회복지사", "의료진", "행정직"]
  },
  ISFP: {
    title: "모험가 (The Adventurer)",
    description: "진정한 예술가로, 삶의 모든 순간을 아름답고 의미 있게 만들고자 합니다.",
    strengths: ["창의적이고 예술적", "융통성이 있음", "배려심이 많음", "개방적"],
    weaknesses: ["자기주장 부족", "스트레스에 민감", "장기 계획 어려움", "경쟁을 싫어함"],
    careers: ["예술가", "디자이너", "음악가", "상담사", "사진작가", "작가"]
  },
  ISTJ: {
    title: "현실주의자 (The Logistician)",
    description: "사실에 기반한 결정을 내리며, 신뢰할 수 있고 성실한 성격입니다.",
    strengths: ["책임감이 강함", "체계적이고 조직적", "신뢰할 수 있음", "현실적"],
    weaknesses: ["융통성 부족", "변화에 저항", "감정 표현 어려움", "새로운 아이디어에 소극적"],
    careers: ["회계사", "변호사", "의사", "엔지니어", "관리자", "공무원"]
  },
  ISTP: {
    title: "장인 (The Virtuoso)",
    description: "대담하면서도 현실적인 사고를 가진 실험정신이 강한 사람들로, 모든 종류의 도구를 다루는 데 능숙합니다.",
    strengths: ["실용적이고 현실적", "논리적", "융통성이 있음", "위기 상황에 강함"],
    weaknesses: ["감정 표현 어려움", "장기 계획 부족", "약속을 어기는 경향", "고집이 셈"],
    careers: ["엔지니어", "기술자", "조종사", "외과의사", "경찰관", "소방관"]
  }
}

const dimensionDescriptions = {
  E: "외향성 (Extraversion) - 외부 세계에서 에너지를 얻습니다",
  I: "내향성 (Introversion) - 내면 세계에서 에너지를 얻습니다",
  S: "감각 (Sensing) - 구체적이고 실제적인 정보를 선호합니다",
  N: "직관 (Intuition) - 가능성과 의미, 관계를 중시합니다",
  T: "사고 (Thinking) - 논리와 객관적 분석을 중시합니다",
  F: "감정 (Feeling) - 가치와 조화를 중시합니다",
  J: "판단 (Judging) - 계획적이고 조직적인 생활을 선호합니다",
  P: "인식 (Perceiving) - 융통성 있고 적응적인 생활을 선호합니다"
}

export default function ResultPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  
  const type = params?.type as string
  const scoresParam = searchParams?.get('scores')
  
  let scores: MBTIScores | null = null
  if (scoresParam) {
    try {
      scores = JSON.parse(decodeURIComponent(scoresParam))
    } catch (error) {
      console.error('점수 파싱 오류:', error)
    }
  }

  const mbtiInfo = mbtiDescriptions[type] || {
    title: "알 수 없는 유형",
    description: "유형 정보를 찾을 수 없습니다.",
    strengths: [],
    weaknesses: [],
    careers: []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 헤더 */}
        <Card className="text-center">
          <CardHeader className="pb-8">
            <div className="flex justify-center mb-4">
              <Badge variant="secondary" className="bg-green-100 text-green-700 px-4 py-2">
                🎉 상세 결과
              </Badge>
            </div>
            <CardTitle className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              {type}
            </CardTitle>
            <h2 className="text-2xl font-semibold text-slate-700 mb-4">
              {mbtiInfo.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {mbtiInfo.description}
            </p>
          </CardHeader>
        </Card>

        {/* 성격 차원별 점수 */}
        {scores && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">성격 차원별 점수</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(scores).map(([key, value]) => (
                  <div key={key} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <Badge variant="outline" className="font-medium text-lg">
                          {key}
                        </Badge>
                        <p className="text-sm text-slate-600 mt-1">
                          {dimensionDescriptions[key as keyof typeof dimensionDescriptions]}
                        </p>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{value}</span>
                    </div>
                    <Progress 
                      value={Math.min(value * 10, 100)} 
                      className="h-4"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 강점 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-700 flex items-center gap-2">
              💪 주요 강점
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mbtiInfo.strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="text-green-600">✓</div>
                  <span className="text-slate-700">{strength}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 개선할 점 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-orange-700 flex items-center gap-2">
              🎯 개선할 점
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mbtiInfo.weaknesses.map((weakness, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="text-orange-600">⚠</div>
                  <span className="text-slate-700">{weakness}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 추천 직업 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-700 flex items-center gap-2">
              💼 추천 직업
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {mbtiInfo.careers.map((career, index) => (
                <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700 px-4 py-2 text-base">
                  {career}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 하단 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              홈으로 돌아가기
            </Button>
          </Link>
          <Link href="/test">
            <Button
              variant="outline"
              className="px-8 py-3 text-lg font-medium border-2 bg-gradient-to-r from-slate-50 to-gray-50 hover:from-slate-100 hover:to-gray-100 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              다시 테스트하기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 