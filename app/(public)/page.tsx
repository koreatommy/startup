"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Lightbulb,
  BookOpen,
  Users,
  Rocket,
  Target,
  CheckCircle2,
  Download,
  Mail,
  ArrowRight,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Presentation,
  Heart,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
} from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleDownload = () => {
    alert("워크북 다운로드 기능은 곧 제공됩니다.");
  };

  const handleInquiry = () => {
    alert("교육문의하기 기능은 곧 제공됩니다.");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("이메일 구독이 완료되었습니다!");
    setEmail("");
  };

  const features = [
    {
      icon: Target,
      title: "단계별 프로젝트형 학습",
      description: "체계적인 20차시 커리큘럼으로 창업 역량을 단계적으로 성장시킵니다.",
      color: "text-mint-500",
      bgColor: "bg-mint-50",
    },
    {
      icon: BookOpen,
      title: "실습 중심 워크북 체계",
      description: "이론보다 실습에 집중한 워크북으로 실제 경험을 통해 학습합니다.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      title: "청소년 친화형 사례 기반",
      description: "청소년의 눈높이에 맞춘 실제 사례와 콘텐츠로 몰입도를 높입니다.",
      color: "text-mint-500",
      bgColor: "bg-mint-50",
    },
    {
      icon: Sparkles,
      title: "STEAM 융합형 창의교육",
      description: "과학, 기술, 예술, 수학을 통합한 창의적 문제해결 교육을 제공합니다.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: MessageSquare,
      title: "협업·소통 중심",
      description: "팀워크와 의사소통 능력을 키우는 협업 프로젝트 중심 학습입니다.",
      color: "text-mint-500",
      bgColor: "bg-mint-50",
    },
    {
      icon: TrendingUp,
      title: "성장 중심 평가 구조",
      description: "결과보다 과정을 중시하며 학습자의 성장을 측정하는 평가 시스템입니다.",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
  ];

  const curriculum = [
    { session: 1, title: "문제 인식", description: "주변의 문제를 발견하고 정의합니다" },
    { session: 2, title: "아이디어 도출", description: "창의적 방법으로 해결 아이디어를 찾습니다" },
    { session: 3, title: "시장 조사", description: "타깃 고객과 시장을 분석합니다" },
    { session: 4, title: "가설 설정", description: "검증 가능한 비즈니스 가설을 수립합니다" },
    { session: 5, title: "프로토타입", description: "아이디어를 간단한 형태로 구현합니다" },
    { session: 6, title: "시장 검증", description: "실제 사용자 반응을 통해 검증합니다" },
    { session: 7, title: "비즈니스 모델", description: "지속 가능한 수익 모델을 설계합니다" },
    { session: 8, title: "마케팅 전략", description: "고객에게 다가갈 방법을 기획합니다" },
    { session: 9, title: "피칭 준비", description: "아이디어를 효과적으로 전달할 방법을 학습합니다" },
    { session: 10, title: "피칭 & 성찰", description: "최종 발표를 하고 전체 과정을 성찰합니다" },
  ];

  const workbookContents = [
    {
      number: "01",
      title: "창업 이해와 팀 기반 창의 활동",
      subtitle: "Entrepreneurship and Team Creativity",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-200",
    },
    {
      number: "02",
      title: "창업의 기초 및 개념 이해하기",
      subtitle: "Basics & Concepts of Entrepreneurship",
      color: "from-pink-500 to-red-500",
      borderColor: "border-pink-200",
    },
    {
      number: "03",
      title: "시장조사 및 분석",
      subtitle: "Market Research & Analysis",
      color: "from-orange-500 to-orange-400",
      borderColor: "border-orange-200",
    },
    {
      number: "04",
      title: "고객 문제와 해결 방안",
      subtitle: "Customer Pain & Solution",
      color: "from-yellow-400 to-lime-400",
      borderColor: "border-yellow-200",
    },
    {
      number: "05",
      title: "제품 서비스 설계",
      subtitle: "Product / Service Design",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-200",
    },
    {
      number: "06",
      title: "비즈니스 모델 설계",
      subtitle: "Business Model Design",
      color: "from-teal-400 to-cyan-400",
      borderColor: "border-teal-200",
    },
    {
      number: "07",
      title: "운영 계획 및 실행 전략",
      subtitle: "Operating & Execution Plan",
      color: "from-blue-500 to-blue-400",
      borderColor: "border-blue-200",
    },
    {
      number: "08",
      title: "마케팅 홍보 전략",
      subtitle: "Marketing & Promotion Strategy",
      color: "from-blue-600 to-indigo-500",
      borderColor: "border-blue-300",
    },
    {
      number: "09",
      title: "재무 계획",
      subtitle: "Financial Plan",
      color: "from-indigo-600 to-purple-600",
      borderColor: "border-indigo-300",
    },
    {
      number: "10",
      title: "발표 및 피칭 전략",
      subtitle: "Presentation & Pitching Strategy",
      color: "from-purple-700 to-purple-800",
      borderColor: "border-purple-400",
    },
  ];

  const effects = [
    { icon: Lightbulb, title: "문제해결력", description: "복잡한 문제를 체계적으로 분석하고 해결하는 능력" },
    { icon: Sparkles, title: "창의적 사고력", description: "새로운 관점에서 아이디어를 창출하는 능력" },
    { icon: Users, title: "협업·의사소통", description: "팀원과 효과적으로 소통하고 협력하는 능력" },
    { icon: Rocket, title: "자기주도성", description: "스스로 목표를 설정하고 추진하는 능력" },
    { icon: Heart, title: "사회적 책임 의식", description: "사회 문제를 해결하려는 의지와 책임감" },
  ];

  const operationTypes = [
    { type: "정규수업형", description: "학교 정규 수업 시간에 운영하는 형태", icon: GraduationCap },
    { type: "창업캠프형", description: "집중적인 단기 캠프 형태로 운영", icon: Briefcase },
    { type: "동아리형", description: "자율동아리 활동으로 진행하는 형태", icon: Users },
    { type: "공공기관형", description: "청소년 기관, 도서관 등에서 운영", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-mint-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-mint-500 to-orange-500 bg-clip-text text-transparent">
              Y·Start Up
            </span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })}>
              커리큘럼
            </Button>
            <Button variant="ghost" onClick={() => document.getElementById("workbook")?.scrollIntoView({ behavior: "smooth" })}>
              워크북
            </Button>
            <Button variant="ghost" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>
              특징
            </Button>
            <Button onClick={handleDownload} className="bg-mint-500 hover:bg-mint-600 text-white">
              다운로드
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-mint-50 via-white to-orange-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-mint-100 text-mint-700 border-mint-200">
                창업교육 워크북
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                미래의 문제해결가를 키우는
                <span className="block bg-gradient-to-r from-mint-500 to-orange-500 bg-clip-text text-transparent mt-2">
                  창의적 여정
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                청소년이 스스로 질문하고, 해결하고, 발표하는
                <br />
                <span className="font-semibold text-gray-900">경험 중심 창업교육 워크북</span>
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="bg-mint-500 hover:bg-mint-600 text-white shadow-lg shadow-mint-200"
                >
                  <Download className="mr-2 h-5 w-5" />
                  워크북 다운로드
                </Button>
                <Button
                  onClick={handleInquiry}
                  size="lg"
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50"
                >
                  교육문의하기
                </Button>
              </div>
              <p className="text-sm text-gray-500 italic">
                "배우는 창업이 아니라, 경험하는 창업."
              </p>
            </div>
            <div className="relative animate-fade-in-delay">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-mint-200 to-orange-200 rounded-3xl rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-mint-100 to-orange-100 rounded-3xl -rotate-3 shadow-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <BookOpen className="h-24 w-24 text-mint-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Y·Start Up</h3>
                    <p className="text-gray-600">창업교육과정 워크북</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 소개 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              창업은 단순 회사 설립이 아닌
              <br />
              <span className="text-mint-600">문제 해결 중심의 과정</span>입니다
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Y·Start Up 창업교육과정은 청소년이 실제로 마주하는 문제를 발견하고,
              창의적 해결책을 도출하며, 팀과 함께 프로젝트를 완성하는 경험 중심 교육입니다.
              이론보다 실습, 결과보다 과정을 중시하는 교육 철학으로 학습자의 역량을 키웁니다.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 특징 6가지 */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-mint-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              핵심 특징
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              체계적이고 실전적인 교육 시스템
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              6가지 핵심 특징으로 구성된 완성형 창업교육 프로그램
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 20차시 커리큘럼 */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-mint-100 text-mint-700 border-mint-200 mb-4">
              커리큘럼
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              총 10회 20차시 창업교육 로드맵
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              문제 인식부터 피칭까지 완성되는 단계별 학습 과정
            </p>
          </div>
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {curriculum.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="bg-white border-2 border-mint-100 hover:border-mint-400 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-mint-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                        {item.session}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-center">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 워크북 목차 */}
      <section id="workbook" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              워크북 목차
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              체계적인 학습 구성
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              10개 주제로 구성된 완성형 창업교육 워크북
            </p>
          </div>
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {workbookContents.map((item, index) => (
                <Card
                  key={index}
                  className={`bg-white border-2 ${item.borderColor} hover:border-opacity-60 transition-all duration-300 hover:shadow-lg`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-md`}>
                      {item.number}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-center">{item.subtitle}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 교수자 가이드 */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-mint-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                교수자 가이드
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                교사의 역할은 멘토, 코치, 촉진자입니다
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center border-2 border-orange-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">20%</span>
                  </div>
                  <CardTitle>이론</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>핵심 개념과 방법론 중심의 간결한 강의</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-mint-400">
                <CardHeader>
                  <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-mint-600">60%</span>
                  </div>
                  <CardTitle>실습</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>워크북 중심의 직접 경험과 프로젝트 활동</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-orange-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">20%</span>
                  </div>
                  <CardTitle>발표·성찰</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>피드백과 성찰을 통한 학습 내재화</CardDescription>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-white border-2 border-mint-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Presentation className="h-5 w-5 text-mint-500" />
                  진행 팁
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-mint-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">학습자의 자율성을 최대한 보장하며 적절한 시점에 코칭을 제공합니다</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-mint-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">팀워크와 협업을 촉진하는 분위기를 조성합니다</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-mint-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">실패를 학습 기회로 전환하며 성장을 격려합니다</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 학습자 안내 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-mint-500 to-orange-500 text-white border-0 shadow-2xl">
              <CardHeader className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  이 수업의 주인공은 바로 당신입니다
                </h2>
                <p className="text-xl text-white/90">
                  적극적인 참여와 소통이 성공적인 학습의 열쇠입니다
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { icon: Lightbulb, title: "생각하기", desc: "스스로 질문하고 탐구하세요" },
                    { icon: BookOpen, title: "기록하기", desc: "워크북에 과정을 남기세요" },
                    { icon: Users, title: "협업하기", desc: "팀원과 함께 아이디어를 발전시키세요" },
                    { icon: Presentation, title: "발표하기", desc: "생각과 결과를 나누세요" },
                    { icon: Heart, title: "성찰하기", desc: "경험을 통해 배움을 내재화하세요" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-white/80">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 교육 효과 */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-mint-100 text-mint-700 border-mint-200 mb-4">
              교육 효과
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5가지 핵심 역량 향상
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              경험 중심 창업교육을 통해 기를 수 있는 핵심 역량들
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {effects.map((effect, index) => {
              const Icon = effect.icon;
              return (
                <Card key={index} className="text-center border-2 border-mint-100 hover:border-mint-400 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-mint-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      <Icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-xl">{effect.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{effect.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 권장 운영 형태 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
              운영 형태
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              다양한 형태로 운영 가능합니다
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              학교와 기관의 상황에 맞게 유연하게 적용할 수 있습니다
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {operationTypes.map((op, index) => {
              const Icon = op.icon;
              return (
                <Card key={index} className="border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{op.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{op.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 교육 로드맵 */}
      <section className="py-20 bg-gradient-to-br from-mint-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-mint-100 text-mint-700 border-mint-200 mb-4">
              전체 프로세스
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              문제 해결에서 성찰까지
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-mint-300 via-orange-300 to-mint-300 transform -translate-y-1/2"></div>
              <div className="grid md:grid-cols-5 gap-4 relative">
                {[
                  { step: "문제 인식", icon: Lightbulb },
                  { step: "아이디어", icon: Sparkles },
                  { step: "시장 검증", icon: Target },
                  { step: "제품 설계", icon: Rocket },
                  { step: "피칭·성찰", icon: Award },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white border-4 border-mint-400 rounded-full flex items-center justify-center mb-3 shadow-lg z-10">
                        <Icon className="h-8 w-8 text-mint-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 text-center">{item.step}</p>
                      {index < 4 && (
                        <ArrowRight className="hidden md:block absolute top-8 left-1/2 transform translate-x-4 text-orange-400 h-6 w-6" style={{ left: `${(index + 1) * 20}%` }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-mint-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-white/90">
              워크북을 다운로드하거나 교육문의하기를 이용해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-white text-mint-600 hover:bg-gray-100 shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                워크북 다운로드
              </Button>
              <Button
                onClick={handleInquiry}
                size="lg"
                className="bg-orange-600 text-white border-2 border-orange-700 hover:bg-orange-700 shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                교육문의하기
              </Button>
            </div>
            <div className="pt-8 border-t border-white/20">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  required
                />
                <Button type="submit" className="bg-white text-mint-600 hover:bg-gray-100">
                  구독하기
                </Button>
              </form>
              <p className="text-sm text-white/80 mt-3">
                새로운 소식과 업데이트를 이메일로 받아보세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-6 w-6 text-mint-400" />
                <span className="text-xl font-bold">Y·Start Up</span>
              </div>
              <p className="text-gray-400">
                미래의 문제해결가를 키우는 창의적 여정
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">빠른 링크</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-mint-400 transition-colors">
                    특징
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-mint-400 transition-colors">
                    커리큘럼
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("workbook")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-mint-400 transition-colors">
                    워크북
                  </button>
                </li>
                <li>
                  <button onClick={handleDownload} className="hover:text-mint-400 transition-colors">
                    다운로드
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">문의</h3>
              <p className="text-gray-400">
                프로그램 교육 문의
              </p>
              <Button onClick={handleInquiry} className="mt-4 bg-mint-500 hover:bg-mint-600">
                교육문의하기
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Y·Start Up 창업교육과정. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <Button
          onClick={handleDownload}
          size="lg"
          className="bg-mint-500 hover:bg-mint-600 text-white shadow-2xl rounded-full px-6"
        >
          <Download className="mr-2 h-5 w-5" />
          다운로드
        </Button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}
