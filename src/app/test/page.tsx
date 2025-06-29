import MBTITest from "@/components/MBTITest";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestPageProps {
  searchParams: Promise<{
    age?: string
  }>
}

export default async function TestPage({ searchParams }: TestPageProps) {
  const { age } = await searchParams
  const ageGroup = age || 'general'
  
  const ageLabels: { [key: string]: string } = {
    'teens': '10대',
    'young_adult': '2~30대',
    'middle_aged': '4~50대',
    'senior': '60대 이상',
    'general': '일반'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-4 py-2 text-lg">
            {ageLabels[ageGroup]} 맞춤형 MBTI 테스트
          </Badge>
        </div>
        <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/70 backdrop-blur-sm">
          <CardContent className="p-0">
            <MBTITest ageGroup={ageGroup} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 