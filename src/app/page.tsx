'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const personalityTypes = [
  { type: 'INTJ', title: '건축가', emoji: '🏗️', color: 'from-purple-500 to-violet-600', description: '상상력이 풍부하면서도 결단력이 있는 전략가' },
  { type: 'INTP', title: '논리술사', emoji: '🧪', color: 'from-green-500 to-emerald-600', description: '혁신적인 발명가로, 지식에 대한 갈증이 넘치는 사색가' },
  { type: 'ENTJ', title: '통솔자', emoji: '👑', color: 'from-red-500 to-rose-600', description: '대담하고 상상력이 풍부하며 의지가 강한 지도자' },
  { type: 'ENTP', title: '변론가', emoji: '💡', color: 'from-orange-500 to-amber-600', description: '똑똑하고 호기심이 많은 사색가' },
  { type: 'INFJ', title: '옹호자', emoji: '🕊️', color: 'from-teal-500 to-cyan-600', description: '선의의 옹호자이며, 항상 대의를 위해 노력하는 성격' },
  { type: 'INFP', title: '중재자', emoji: '🌙', color: 'from-blue-500 to-indigo-600', description: '항상 선을 행할 준비가 되어 있는 부드럽고 친근한 성격' },
  { type: 'ENFJ', title: '선도자', emoji: '🌟', color: 'from-pink-500 to-rose-600', description: '카리스마 있고 영감을 주는 지도자' },
  { type: 'ENFP', title: '활동가', emoji: '🎭', color: 'from-yellow-500 to-orange-600', description: '열정적이고 창의적인 사교적 자유로운 영혼' },
  { type: 'ISTJ', title: '논리주의자', emoji: '📋', color: 'from-indigo-500 to-purple-600', description: '사실과 신뢰성을 중시하는 실용적이고 현실적인 성격' },
  { type: 'ISFJ', title: '수호자', emoji: '🛡️', color: 'from-cyan-500 to-blue-600', description: '따뜻하고 헌신적인 보호자' },
  { type: 'ESTJ', title: '경영자', emoji: '📊', color: 'from-emerald-500 to-green-600', description: '뛰어난 관리자로, 사물과 사람을 관리하는 데 타의 추종을 불허' },
  { type: 'ESFJ', title: '집정관', emoji: '🤝', color: 'from-rose-500 to-pink-600', description: '인기가 많고 사교적인 성격으로, 항상 열심히 도우려 함' },
  { type: 'ISTP', title: '장인', emoji: '🔧', color: 'from-amber-500 to-yellow-600', description: '대담하고 실용적인 실험정신이 풍부한 장인' },
  { type: 'ISFP', title: '모험가', emoji: '🎨', color: 'from-lime-500 to-green-600', description: '유연하고 매력적인 예술가' },
  { type: 'ESTP', title: '사업가', emoji: '⚡', color: 'from-orange-500 to-red-600', description: '똑똑하고 에너지 넘치며 인식이 뛰어난 성격' },
  { type: 'ESFP', title: '연예인', emoji: '🎪', color: 'from-red-500 to-pink-600', description: '자발적이고 열정적이며 사교적인 성격' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="flex justify-center lg:justify-start mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200">
                  ✨ 과학적으로 검증된 성격 분석
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  MBTI 성격 유형
                </span>
                <br />
                <span className="text-slate-700">테스트</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                20개의 정교한 질문을 통해 당신만의 고유한 성격을 발견하세요. 
                <br />
                <span className="font-semibold text-slate-700">전 세계가 인정한 16가지 성격 유형</span> 중 어디에 속하는지 알아보세요.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">16</div>
                  <div className="text-sm text-slate-600">성격 유형</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">20</div>
                  <div className="text-sm text-slate-600">정밀 질문</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">5분</div>
                  <div className="text-sm text-slate-600">소요 시간</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <Button 
                  onClick={() => {
                    document.getElementById('age-selection')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  테스트 시작하기
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full opacity-20 absolute -top-4 -left-4"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <div className="relative w-72 h-72 md:w-88 md:h-88 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center">
                  <motion.div 
                    className="text-8xl mb-4"
                    animate={{ 
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    🧠
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">
                    나는 누구일까?
                  </h3>
                  <p className="text-slate-600 text-center leading-relaxed">
                    과학적 분석으로 
                    <br />
                    진짜 나를 발견해보세요
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personality Types Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              16가지 성격 유형
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              각각의 고유한 특성을 가진 16가지 성격 유형 중 당신은 어디에 속할까요?
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {personalityTypes.map((type, index) => (
              <motion.div
                key={type.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="p-4 md:p-6 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="text-3xl md:text-4xl mb-3">{type.emoji}</div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{type.type}</h3>
                      <p className="text-sm md:text-base font-medium text-slate-700 mb-3">{type.title}</p>
                    </div>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              왜 우리의 MBTI 테스트를 선택해야 할까요?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              과학적 근거와 현대적 기술이 만나 가장 정확한 성격 분석을 제공합니다.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "정확한 분석",
                description: "심리학 연구를 바탕으로 한 검증된 질문으로 정확한 성격 유형을 파악합니다.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: "📊",
                title: "상세한 리포트",
                description: "강점, 약점, 추천 직업까지 포함한 종합적인 성격 분석 리포트를 제공합니다.",
                color: "from-purple-50 to-pink-50"
              },
              {
                icon: "⚡",
                title: "빠른 결과",
                description: "단 5분만에 완료하고 즉시 결과를 확인할 수 있는 효율적인 테스트입니다.",
                color: "from-green-50 to-emerald-50"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${feature.color} h-full`}>
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      <motion.div 
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-3xl">{feature.icon}</span>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Selection Section */}
      <section id="age-selection" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              연령대를 선택해주세요
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              각 연령대에 맞는 맞춤형 질문으로 더 정확한 성격 분석을 제공합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                age: 'teens',
                title: '10대',
                description: '학교생활과 친구관계 중심의 질문',
                icon: '🎓',
                color: 'from-pink-500 to-rose-500'
              },
              {
                age: 'young_adult',
                title: '2~30대',
                description: '직장생활과 사회활동 중심의 질문',
                icon: '💼',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                age: 'middle_aged',
                title: '4~50대',
                description: '가족과 책임감 중심의 질문',
                icon: '👨‍👩‍👧‍👦',
                color: 'from-green-500 to-emerald-500'
              },
              {
                age: 'senior',
                title: '60대 이상',
                description: '여가활동과 인생경험 중심의 질문',
                icon: '🌅',
                color: 'from-orange-500 to-amber-500'
              }
            ].map((ageGroup, index) => (
              <motion.div
                key={ageGroup.age}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-r ${ageGroup.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-4xl">{ageGroup.icon}</span>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{ageGroup.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {ageGroup.description}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        asChild 
                        className={`w-full bg-gradient-to-r ${ageGroup.color} hover:shadow-lg text-white font-semibold py-3 transition-all duration-300`}
                      >
                        <Link href={`/test?age=${ageGroup.age}`}>
                          테스트 시작
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  MBTI 성격 유형 테스트
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                  과학적이고 신뢰할 수 있는 성격 분석으로 진짜 나를 발견하세요. 
                  전 세계적으로 인정받은 MBTI 이론을 바탕으로 한 정확한 테스트입니다.
                </p>
                <div className="flex space-x-4">
                  <motion.div 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">📧</span>
                  </motion.div>
                  <motion.div 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">🐦</span>
                  </motion.div>
                  <motion.div 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">📘</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">빠른 링크</h4>
                <ul className="space-y-2">
                  <li><Link href="/test" className="hover:text-white transition-colors">테스트 시작</Link></li>
                  <li><a href="#types" className="hover:text-white transition-colors">성격 유형</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">서비스 소개</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
                </ul>
              </motion.div>
            </div>
            
            {/* Contact */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">문의하기</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span>📧</span>
                    <span>contact@mbtitest.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>02-1234-5678</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>🕒</span>
                    <span>평일 9:00-18:00</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="border-t border-slate-800 mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-slate-500">
              © 2024 MBTI 성격 유형 테스트. 모든 권리 보유. 
              <span className="mx-2">|</span>
              <a href="#privacy" className="hover:text-slate-300 transition-colors">개인정보처리방침</a>
              <span className="mx-2">|</span>
              <a href="#terms" className="hover:text-slate-300 transition-colors">이용약관</a>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
