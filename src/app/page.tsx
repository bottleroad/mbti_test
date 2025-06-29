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
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200 flex items-center gap-2">
                  <svg className="w-4 h-4 fill-blue-700" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  과학적으로 검증된 성격 분석
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
                      <div className="text-3xl mb-3">{type.emoji}</div>
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
                icon: (
                  <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 24 24">
                    <path d="M19.8 18.4L14 12.6l2.8-2.8c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L11.2 9.8 5.4 4c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l5.8 5.8L6.6 14.4c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l1.8-1.8 5.8 5.8c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                ),
                title: "정확한 분석",
                description: "심리학 연구를 바탕으로 한 검증된 질문으로 정확한 성격 유형을 파악합니다.",
                color: "from-blue-50 to-indigo-50"
              },
              {
                icon: (
                  <svg className="w-8 h-8 fill-purple-600" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                ),
                title: "상세한 리포트",
                description: "강점, 약점, 추천 직업까지 포함한 종합적인 성격 분석 리포트를 제공합니다.",
                color: "from-purple-50 to-pink-50"
              },
              {
                icon: (
                  <svg className="w-8 h-8 fill-green-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
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
                        {feature.icon}
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
      <section id="age-selection" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              연령대를 선택해주세요
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              각 연령대에 맞는 맞춤형 질문으로 더 정확한 성격 분석을 제공합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                age: 'teens',
                title: '10대',
                description: '학교생활과 친구관계 중심의 질문',
                icon: (
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                  </svg>
                ),
                color: 'from-blue-500 to-cyan-500'
              },
              {
                age: 'young_adult',
                title: '2~30대',
                description: '직장생활과 사회활동 중심의 질문',
                icon: (
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                    <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>
                  </svg>
                ),
                color: 'from-purple-500 to-indigo-500'
              },
              {
                age: 'middle_aged',
                title: '4~50대',
                description: '가족과 책임감 중심의 질문',
                icon: (
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-5c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5H16v6h4zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5-12c.83 0 1.5-.67 1.5-1.5S14.83 7.5 14 7.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm1.5 1h-3c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5H15v7h2v-7h1.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5z"/>
                  </svg>
                ),
                color: 'from-indigo-500 to-purple-500'
              },
              {
                age: 'senior',
                title: '60대 이상',
                description: '여가활동과 인생경험 중심의 질문',
                icon: (
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                    <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"/>
                  </svg>
                ),
                color: 'from-violet-500 to-purple-500'
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
                        {ageGroup.icon}
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
                  {/* Facebook */}
                  <motion.div 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.div>
                  {/* Instagram */}
                  <motion.div 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 cursor-pointer transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.div>
                  {/* Threads */}
                  <motion.div 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017C1.5 8.417 2.35 5.563 3.995 3.512 5.845 1.205 8.598.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.63 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.743-1.757-.438-.505-1.05-.769-1.821-.784-.73-.016-1.354.21-1.864.674-.53.482-.974 1.238-1.326 2.256l-1.875-.507c.438-1.278 1.098-2.295 1.964-3.028.865-.733 1.929-1.118 3.168-1.147 1.365-.03 2.473.299 3.295 1.004.897.769 1.441 1.921 1.617 3.429.176 1.508.089 3.205-.26 5.052-.349 1.847-.926 3.681-1.721 5.465l-1.79-.51c.697-1.563 1.202-3.054 1.508-4.442.306-1.388.414-2.674.322-3.827-.092-1.153-.372-2.165-.835-3.015-.463-.85-1.118-1.539-1.954-2.051-.836-.512-1.853-.784-3.026-.812-1.173-.028-2.285.214-3.311.722-1.026.508-1.966 1.277-2.798 2.289-.832 1.012-1.556 2.266-2.157 3.739-.601 1.473-1.079 3.165-1.424 5.036-.345 1.871-.557 3.931-.632 6.131-.075 2.2-.013 4.51.185 6.871l-1.979.324c-.218-2.6-.286-5.148-.203-7.58.083-2.432.324-4.747.719-6.891.395-2.144.943-4.117 1.634-5.874.691-1.757 1.525-3.296 2.484-4.587.959-1.291 2.042-2.334 3.225-3.107 1.183-.773 2.466-1.277 3.822-1.502 1.356-.225 2.784-.181 4.253.131 1.469.312 2.979.874 4.496 1.674 1.517.8 3.042 1.839 4.537 3.096l-1.387 1.54c-1.316-1.105-2.654-1.983-3.984-2.614-1.33-.631-2.651-1.025-3.932-1.173-1.281-.148-2.522-.05-3.695.293-1.173.343-2.277.965-3.286 1.853-.009.008-.018.016-.027.024-.009.008-.018.016-.027.024z"/>
                    </svg>
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
                  <li>
                    <button 
                      onClick={() => {
                        document.querySelector('section:first-child')?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }}
                      className="hover:text-white transition-colors text-left"
                    >
                      서비스 소개
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        document.querySelector('section:nth-child(2)')?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }}
                      className="hover:text-white transition-colors text-left"
                    >
                      성격 유형
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        document.getElementById('age-selection')?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }}
                      className="hover:text-white transition-colors text-left"
                    >
                      테스트 시작
            </button>
                  </li>
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
