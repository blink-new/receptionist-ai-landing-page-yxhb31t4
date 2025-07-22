import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap,
  Bot,
  Mic,
  BarChart3,
  Store,
  CheckCircle,
  Star,
  Play,
  ArrowRight,
  Users,
  DollarSign,
  Timer,
  Award
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentDemo, setCurrentDemo] = useState('bakery')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track scroll progress
  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-orange-500"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Receptionist AI</span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#features" 
                className="text-gray-600 hover:text-gray-900 transition-colors relative"
                whileHover={{ y: -2 }}
              >
                Features
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
              <motion.a 
                href="#demo" 
                className="text-gray-600 hover:text-gray-900 transition-colors relative"
                whileHover={{ y: -2 }}
              >
                Demo
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
              <motion.a 
                href="#pricing" 
                className="text-gray-600 hover:text-gray-900 transition-colors relative"
                whileHover={{ y: -2 }}
              >
                Pricing
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm">Sign In</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                <Users className="w-4 h-4 mr-1" />
                Trusted by 500+ Small Businesses
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Never Miss Another{' '}
              <span className="text-blue-600">Customer Call</span>{' '}
              Again
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              AI-Powered Virtual Receptionist for Small Businesses - Available 24/7, 
              Costs Less Than Your Coffee Budget
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>See Receptionist AI in Action</DialogTitle>
                    <DialogDescription>
                      Watch how our AI handles real customer calls
                    </DialogDescription>
                  </DialogHeader>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Demo video would be embedded here</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              variants={fadeInUp}
              className="relative max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <motion.div 
                    className="text-center"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <Phone className="w-8 h-8 text-orange-600" />
                      <motion.div
                        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">Customer Calls</p>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    animate={{ 
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <Bot className="w-10 h-10 text-white" />
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </motion.div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">AI Receptionist</p>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, -2, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <MessageSquare className="w-8 h-8 text-green-600" />
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">WhatsApp Alerts</p>
                  </motion.div>
                </div>
                
                {/* Animated connection lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <motion.path
                      d="M 100 100 Q 200 80 300 100"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.path
                      d="M 300 100 Q 200 120 100 100"
                      stroke="#F97316"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                    />
                  </svg>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-orange-600/5 rounded-2xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Stop Losing Customers to Missed Calls
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-600">Missing calls = losing $2,000+ in revenue monthly</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-600">Hiring receptionists costs $3,000+ per month</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-600">Limited business hours mean missed opportunities</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Meet Your AI Receptionist
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-600">Available 24/7, never takes a sick day</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-600">Costs less than $100/month - 30x cheaper</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-600">Handles bookings, messages, and follow-ups</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
              Everything Your Business Needs
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful AI features designed specifically for small businesses
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Bot,
                title: "24/7 AI Receptionist",
                description: "Never miss a call again with our always-available AI assistant"
              },
              {
                icon: Mic,
                title: "Natural Voice Conversations",
                description: "Sounds completely human with advanced voice technology"
              },
              {
                icon: MessageSquare,
                title: "WhatsApp Notifications",
                description: "Instant call summaries and follow-ups sent to your phone"
              },
              {
                icon: Store,
                title: "Multi-Business Support",
                description: "Perfect for any MSME - bakeries, salons, clinics, and more"
              },
              {
                icon: BarChart3,
                title: "Call Analytics",
                description: "Track every interaction with detailed insights and reports"
              },
              {
                icon: Zap,
                title: "Instant Setup",
                description: "Go live in under 10 minutes with our simple setup process"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
              Hear It In Action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Listen to real conversations between our AI and customers
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Tabs value={currentDemo} onValueChange={setCurrentDemo} className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="bakery">🧁 Bakery</TabsTrigger>
                <TabsTrigger value="salon">💇‍♀️ Hair Salon</TabsTrigger>
                <TabsTrigger value="clinic">🏥 Medical Clinic</TabsTrigger>
              </TabsList>
              
              {['bakery', 'salon', 'clinic'].map((type) => (
                <TabsContent key={type} value={type}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold capitalize">{type} Demo Call</h3>
                        <Badge variant="secondary" className="bg-green-50 text-green-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                          Live Demo
                        </Badge>
                      </div>
                      
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 mb-6 relative overflow-hidden">
                        <div className="flex items-center justify-center space-x-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              size="lg" 
                              className="bg-blue-600 hover:bg-blue-700 relative"
                              onClick={() => setIsPlaying(!isPlaying)}
                            >
                              {isPlaying ? (
                                <>
                                  <div className="w-5 h-5 mr-2 flex items-center justify-center">
                                    <div className="w-1 h-4 bg-white mr-1"></div>
                                    <div className="w-1 h-4 bg-white"></div>
                                  </div>
                                  Pause Demo
                                </>
                              ) : (
                                <>
                                  <Play className="w-5 h-5 mr-2" />
                                  Play Demo
                                </>
                              )}
                            </Button>
                          </motion.div>
                        </div>
                        
                        {/* Audio waveform visualization */}
                        {isPlaying && (
                          <div className="flex items-center justify-center mt-4 space-x-1">
                            {[...Array(20)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1 bg-blue-600 rounded-full"
                                animate={{
                                  height: [4, Math.random() * 20 + 4, 4],
                                }}
                                transition={{
                                  duration: 0.5,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="bg-white border rounded-lg p-4 relative">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">Live Transcript:</h4>
                          {isPlaying && (
                            <motion.div
                              className="w-3 h-3 bg-red-500 rounded-full"
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}
                        </div>
                        <div className="space-y-3 text-sm">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="bg-blue-50 rounded-lg p-3 flex-1">
                              <p><strong>AI:</strong> "Thank you for calling {type === 'bakery' ? 'Sweet Dreams Bakery' : type === 'salon' ? 'Bella Hair Studio' : 'Downtown Medical Clinic'}. How can I help you today?"</p>
                            </div>
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="flex items-start space-x-3 justify-end"
                          >
                            <div className="bg-gray-100 rounded-lg p-3 flex-1 max-w-md">
                              <p><strong>Customer:</strong> "Hi, I'd like to {type === 'bakery' ? 'order a birthday cake for tomorrow' : type === 'salon' ? 'book a haircut appointment for this week' : 'schedule a check-up for my family'}."</p>
                            </div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                              <Users className="w-4 h-4 text-gray-600" />
                            </div>
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="bg-blue-50 rounded-lg p-3 flex-1">
                              <p><strong>AI:</strong> "I'd be happy to help you with that! Let me check our availability and get some details from you..."</p>
                              {isPlaying && (
                                <motion.div
                                  className="mt-2 text-xs text-blue-600"
                                  animate={{ opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                >
                                  AI is typing...
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Try Your Own Demo Call
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your Small Business
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the immediate impact on your bottom line
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: DollarSign,
                title: "Save $2000/month",
                description: "vs hiring a receptionist",
                color: "green"
              },
              {
                icon: TrendingUp,
                title: "Capture 40% more leads",
                description: "from missed calls",
                color: "blue"
              },
              {
                icon: Award,
                title: "Sound like a big business",
                description: "on every call",
                color: "purple"
              },
              {
                icon: Timer,
                title: "Focus on your business",
                description: "not phone calls",
                color: "orange"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <CardContent className="p-6 relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-${benefit.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 relative`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className={`w-8 h-8 text-${benefit.color}-600`} />
                      <motion.div
                        className={`absolute inset-0 bg-${benefit.color}-200 rounded-full`}
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.2, opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}-50 to-${benefit.color}-100 opacity-0 group-hover:opacity-20`}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Setup takes less than 10 minutes
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "1",
                title: "Setup in Minutes",
                description: "Configure for your business type with our simple wizard"
              },
              {
                step: "2",
                title: "Forward Your Calls",
                description: "Simple phone forwarding setup - we'll guide you through it"
              },
              {
                step: "3",
                title: "AI Handles Everything",
                description: "Answers, books appointments, and notifies you via WhatsApp"
              }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories from Real Businesses
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how other small businesses are thriving with Receptionist AI
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Maria Rodriguez",
                business: "Sweet Dreams Bakery",
                result: "Increased bookings by 60%",
                quote: "I was missing so many cake orders before. Now every call gets answered perfectly, even at 2 AM!",
                image: "👩‍🍳"
              },
              {
                name: "James Chen",
                business: "Downtown Hair Studio",
                result: "Reduced missed calls to 0%",
                quote: "My clients love how professional we sound. The AI even handles complex scheduling better than I do!",
                image: "👨‍💼"
              },
              {
                name: "Dr. Sarah Kim",
                business: "Family Health Clinic",
                result: "Saved $2,400/month",
                quote: "Replaced our expensive receptionist service. Patients can't tell it's AI - it's that good!",
                image: "👩‍⚕️"
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{testimonial.image}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.business}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="mb-4 bg-green-50 text-green-700">
                      {testimonial.result}
                    </Badge>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Affordable Pricing
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                name: "Starter",
                price: "$49",
                period: "/month",
                description: "Perfect for small businesses",
                features: [
                  "Up to 100 calls/month",
                  "Basic AI responses",
                  "WhatsApp notifications",
                  "Email support"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "$99",
                period: "/month",
                description: "Most popular for growing businesses",
                features: [
                  "Up to 500 calls/month",
                  "Advanced AI conversations",
                  "Appointment booking",
                  "Call analytics",
                  "Priority support"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$199",
                period: "/month",
                description: "For high-volume businesses",
                features: [
                  "Unlimited calls",
                  "Custom AI training",
                  "Multi-location support",
                  "Advanced analytics",
                  "Dedicated support"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`h-full relative ${plan.popular ? 'border-blue-500 border-2' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Start Free Trial
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">14-day free trial, no credit card required</h3>
              <p className="text-gray-600 mb-4">Risk-free guarantee - cancel anytime</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>vs $3,000/month receptionist</span>
                <span>•</span>
                <span>Save 95% on staffing costs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Everything you need to know about Receptionist AI
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does the AI sound so human?",
                  answer: "We use advanced Google Gemini AI with natural language processing and voice synthesis technology. Most customers can't tell they're speaking with AI."
                },
                {
                  question: "What if the AI can't handle a complex request?",
                  answer: "The AI is trained to recognize when to escalate calls to you. It will take a detailed message and immediately notify you via WhatsApp for urgent matters."
                },
                {
                  question: "How quickly can I set this up?",
                  answer: "Most businesses are live within 10 minutes. Our setup wizard guides you through configuring your business type, hours, and call forwarding."
                },
                {
                  question: "Will this work with my existing phone system?",
                  answer: "Yes! Receptionist AI works with any phone system through simple call forwarding. No hardware changes needed."
                },
                {
                  question: "What happens during the free trial?",
                  answer: "You get full access to all features for 14 days. No credit card required. If you're not satisfied, simply cancel - no questions asked."
                },
                {
                  question: "Can the AI book appointments?",
                  answer: "Absolutely! The AI can check your calendar availability, book appointments, and send confirmations. It integrates with popular calendar systems."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-4">
              Join 500+ Businesses Already Using Receptionist AI
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let another customer call go unanswered. Start your free trial today.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                Start Free Trial Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                Schedule Demo Call
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-blue-100 mt-6 text-sm">
              14-day free trial • No credit card required • Cancel anytime
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: [
              "0 4px 20px rgba(37, 99, 235, 0.3)",
              "0 8px 30px rgba(37, 99, 235, 0.5)",
              "0 4px 20px rgba(37, 99, 235, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 shadow-2xl relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-20"
            />
            <Phone className="w-6 h-6 relative z-10" />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span className="text-xs text-white font-bold">!</span>
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">Receptionist AI</span>
              </div>
              <p className="text-gray-400">
                AI-powered virtual receptionist for small businesses. Never miss a customer call again.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp: +1-555-0123</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email: support@receptionistai.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Receptionist AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App