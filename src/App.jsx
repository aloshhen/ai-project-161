import { Shield, Star, Users, Globe, ChevronRight, Calendar, MessageSquare, Mail, Send, Image, Video, Award, Target, TrendingUp, Heart, CheckCircle, Menu, X } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const heroRef = useRef(null)
  const bioRef = useRef(null)
  const newsRef = useRef(null)
  const initiativesRef = useRef(null)
  const galleryRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const bioInView = useInView(bioRef, { once: true })
  const newsInView = useInView(newsRef, { once: true })
  const initiativesInView = useInView(initiativesRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })

  const smoothScroll = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Дякуємо за підписку! Email: ${email}`)
    setEmail('')
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    alert(`Дякуємо за повідомлення, ${formData.name}!`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-ukraine-blue via-blue-800 to-blue-900">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-ukraine-blue/95 backdrop-blur-xl z-50 border-b border-ukraine-yellow/30 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-10 h-10 text-ukraine-yellow" />
            <div>
              <span className="text-2xl font-black text-white tracking-tight">ПОТУЖНО</span>
              <p className="text-xs text-ukraine-yellow font-semibold">Володимир Зеленський</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#biography" onClick={(e) => smoothScroll(e, 'biography')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Біографія</a>
            <a href="#news" onClick={(e) => smoothScroll(e, 'news')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Новини</a>
            <a href="#initiatives" onClick={(e) => smoothScroll(e, 'initiatives')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Ініціативи</a>
            <a href="#gallery" onClick={(e) => smoothScroll(e, 'gallery')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Галерея</a>
            <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Контакти</a>
          </div>

          <button className="hidden md:block bg-ukraine-yellow hover:bg-yellow-500 text-ukraine-blue px-6 py-2 rounded-full font-black transition-all transform hover:scale-105 shadow-lg shadow-ukraine-yellow/50">
            Підтримати
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-ukraine-blue/98 backdrop-blur-xl border-t border-ukraine-yellow/30">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a href="#biography" onClick={(e) => smoothScroll(e, 'biography')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Біографія</a>
              <a href="#news" onClick={(e) => smoothScroll(e, 'news')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Новини</a>
              <a href="#initiatives" onClick={(e) => smoothScroll(e, 'initiatives')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Ініціативи</a>
              <a href="#gallery" onClick={(e) => smoothScroll(e, 'gallery')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Галерея</a>
              <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="text-white hover:text-ukraine-yellow transition-colors font-semibold">Контакти</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <motion.section 
        ref={heroRef}
        className="relative pt-32 pb-24 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ukraine-blue/80 via-blue-900/90 to-blue-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,87,183,0.3),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-7xl md:text-9xl font-black text-ukraine-yellow mb-6 tracking-tighter drop-shadow-2xl">
                ПОТУЖНО
              </h1>
              <p className="text-3xl md:text-5xl text-white mb-8 font-bold">
                Лідерство в дії
              </p>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Володимир Зеленський - Президент України, що об'єднує націю в найважчі часи та надихає світ своєю мужністю та рішучістю
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={(e) => smoothScroll(e, 'biography')} className="bg-ukraine-yellow hover:bg-yellow-500 text-ukraine-blue px-10 py-5 rounded-full text-lg font-black transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-ukraine-yellow/50">
                  Дізнатися більше
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={(e) => smoothScroll(e, 'contact')} className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full text-lg font-black transition-all backdrop-blur-sm border-2 border-white/30">
                  Зв'язатися
                </button>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              className="flex-1 max-w-md lg:max-w-lg"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: heroInView ? 0 : 30, opacity: heroInView ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-ukraine-yellow/20 rounded-3xl blur-3xl transform rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&q=80" 
                  alt="Володимир Зеленський" 
                  className="relative rounded-3xl shadow-2xl border-4 border-ukraine-yellow/30 hover:border-ukraine-yellow/60 transition-all transform hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 bg-ukraine-yellow text-ukraine-blue px-8 py-4 rounded-2xl font-black text-xl shadow-xl">
                  Президент України
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* BIOGRAPHY */}
      <motion.section 
        id="biography"
        ref={bioRef}
        className="py-24 px-6 bg-gradient-to-b from-blue-950 to-ukraine-blue"
        initial={{ opacity: 0 }}
        animate={{ opacity: bioInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            Біографія та <span className="text-ukraine-yellow">Досягнення</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-900/80 to-ukraine-blue/50 p-8 rounded-3xl border-2 border-ukraine-yellow/30 hover:border-ukraine-yellow transition-all transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: bioInView ? 0 : 30, opacity: bioInView ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="bg-ukraine-yellow/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-ukraine-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Народився 1978</h3>
              <p className="text-blue-100 leading-relaxed">
                Народився 25 січня 1978 року в Кривому Розі. Здобув юридичну освіту, але прославився як актор, продюсер та шоумен.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-900/80 to-ukraine-blue/50 p-8 rounded-3xl border-2 border-ukraine-yellow/30 hover:border-ukraine-yellow transition-all transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: bioInView ? 0 : 30, opacity: bioInView ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-ukraine-yellow/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-ukraine-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Кар'єра в медіа</h3>
              <p className="text-blue-100 leading-relaxed">
                Засновник студії "Квартал 95", актор і продюсер численних телепроектів, що принесли йому всенародну любов.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-900/80 to-ukraine-blue/50 p-8 rounded-3xl border-2 border-ukraine-yellow/30 hover:border-ukraine-yellow transition-all transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: bioInView ? 0 : 30, opacity: bioInView ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-ukraine-yellow/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-ukraine-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Президент з 2019</h3>
              <p className="text-blue-100 leading-relaxed">
                Обраний Президентом України в 2019 році з рекордною підтримкою 73%. Лідер нації в часи викликів.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* NEWS & SPEECHES */}
      <motion.section 
        id="news"
        ref={newsRef}
        className="py-24 px-6 bg-gradient-to-b from-ukraine-blue to-blue-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: newsInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            Новини та <span className="text-ukraine-yellow">Виступи</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div 
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-ukraine-yellow/30 hover:border-ukraine-yellow/60 transition-all"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: newsInView ? 0 : -30, opacity: newsInView ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-ukraine-yellow/20 p-3 rounded-xl">
                  <Calendar className="w-6 h-6 text-ukraine-yellow" />
                </div>
                <div className="flex-1">
                  <p className="text-ukraine-yellow font-semibold mb-2">15 Грудня 2024</p>
                  <h3 className="text-2xl font-bold text-white mb-3">Виступ перед Конгресом США</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Президент Зеленський звернувся до американських законодавців з подякою за підтримку та закликом до продовження співпраці в ім'я миру та демократії.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-ukraine-yellow/30 hover:border-ukraine-yellow/60 transition-all"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: newsInView ? 0 : -30, opacity: newsInView ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-ukraine-yellow/20 p-3 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-ukraine-yellow" />
                </div>
                <div className="flex-1">
                  <p className="text-ukraine-yellow font-semibold mb-2">10 Грудня 2024</p>
                  <h3 className="text-2xl font-bold text-white mb-3">Зустріч з лідерами ЄС</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Обговорення стратегічного партнерства, інтеграції України до Європейського Союзу та питань безпеки в регіоні.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-ukraine-yellow/30 hover:border-ukraine-yellow/60 transition-all"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: newsInView ? 0 : -30, opacity: newsInView ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-ukraine-yellow/20 p-3 rounded-xl">
                  <Globe className="w-6 h-6 text-ukraine-yellow" />
                </div>
                <div className="flex-1">
                  <p className="text-ukraine-yellow font-semibold mb-2">5 Грудня 2024</p>
                  <h3 className="text-2xl font-bold text-white mb-3">Міжнародний саміт з питань миру</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Презентація плану мирного врегулювання та відновлення країни за участі провідних світових лідерів.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* POLITICAL INITIATIVES */}
      <motion.section 
        id="initiatives"
        ref={initiativesRef}
        className="py-24 px-6 bg-gradient-to-b from-blue-900 to-ukraine-blue"
        initial={{ opacity: 0 }}
        animate={{ opacity: initiativesInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            Політичні <span className="text-ukraine-yellow">Ініціативи</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-ukraine-yellow/20 to-transparent p-8 rounded-2xl border-2 border-ukraine-yellow/40 hover:border-ukraine-yellow transition-all transform hover:scale-105"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: initiativesInView ? 0 : 30, opacity: initiativesInView ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Award className="w-12 h-12 text-ukraine-yellow mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Антикорупційна реформа</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Створення незалежних антикорупційних органів та посилення прозорості влади
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-ukraine-yellow/20 to-transparent p-8 rounded-2xl border-2 border-ukraine-yellow/40 hover:border-ukraine-yellow transition-all transform hover:scale-105"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: initiativesInView ? 0 : 30, opacity: initiativesInView ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Target className="w-12 h-12 text-ukraine-yellow mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Цифрова держава</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Запуск додатку "Дія" - всі державні послуги в смартфоні кожного громадянина
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-ukraine-yellow/20 to-transparent p-8 rounded-2xl border-2 border-ukraine-yellow/40 hover:border-ukraine-yellow transition-all transform hover:scale-105"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: initiativesInView ? 0 : 30, opacity: initiativesInView ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <TrendingUp className="w-12 h-12 text-ukraine-yellow mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Економічне зростання</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Підтримка бізнесу, залучення інвестицій та розвиток інфраструктури
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-ukraine-yellow/20 to-transparent p-8 rounded-2xl border-2 border-ukraine-yellow/40 hover:border-ukraine-yellow transition-all transform hover:scale-105"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: initiativesInView ? 0 : 30, opacity: initiativesInView ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Users className="w-12 h-12 text-ukraine-yellow mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Соціальна підтримка</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Програми допомоги сім'ям, пенсіонерам та захист прав громадян
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* GALLERY */}
      <motion.section 
        id="gallery"
        ref={galleryRef}
        className="py-24 px-6 bg-gradient-to-b from-ukraine-blue to-blue-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: galleryInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            Фото та <span className="text-ukraine-yellow">Відео Галерея</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className="relative group overflow-hidden rounded-2xl aspect-square"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: galleryInView ? 1 : 0.9, opacity: galleryInView ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80" 
                alt="Gallery 1" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ukraine-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <Image className="w-6 h-6 mb-2" />
                  <p className="font-bold">Офіційні заходи</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group overflow-hidden rounded-2xl aspect-square"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: galleryInView ? 1 : 0.9, opacity: galleryInView ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80" 
                alt="Gallery 2" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ukraine-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <Video className="w-6 h-6 mb-2" />
                  <p className="font-bold">Виступи та промови</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group overflow-hidden rounded-2xl aspect-square"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: galleryInView ? 1 : 0.9, opacity: galleryInView ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80" 
                alt="Gallery 3" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ukraine-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <Image className="w-6 h-6 mb-2" />
                  <p className="font-bold">Міжнародні зустрічі</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group overflow-hidden rounded-2xl aspect-square"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: galleryInView ? 1 : 0.9, opacity: galleryInView ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" 
                alt="Gallery 4" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ukraine-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <Heart className="w-6 h-6 mb-2" />
                  <p className="font-bold">З народом</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group overflow-hidden rounded-2xl aspect-square"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: galleryInView ? 1 : 0.9, opacity: galleryInView ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80" 
                alt="Gallery 5" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ukraine-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <CheckCircle className="w-6 h-6 mb-2" />
                  <p className="font-bold">Досягнення</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group overflow-hidden rounded-2xl aspect-square"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: galleryInView ? 1 : 0.9, opacity: galleryInView ? 1 : 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" 
                alt="Gallery 6" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ukraine-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <Globe className="w-6 h-6 mb-2" />
                  <p className="font-bold">Світове визнання</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* NEWSLETTER SUBSCRIPTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-950 to-ukraine-blue">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Підпишіться на <span className="text-ukraine-yellow">Новини</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Отримуйте найсвіжіші новини, виступи та оновлення безпосередньо на вашу електронну пошту
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ваша електронна пошта"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-ukraine-yellow/30 text-white placeholder-blue-200 focus:outline-none focus:border-ukraine-yellow transition-all"
            />
            <button type="submit" className="bg-ukraine-yellow hover:bg-yellow-500 text-ukraine-blue px-8 py-4 rounded-full font-black transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-ukraine-yellow/50">
              Підписатися
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-ukraine-blue to-blue-900">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            Зворотній <span className="text-ukraine-yellow">Зв'язок</span>
          </h2>

          <form onSubmit={handleContactSubmit} className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border-2 border-ukraine-yellow/30 space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Ім'я</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-ukraine-yellow/30 text-white placeholder-blue-200 focus:outline-none focus:border-ukraine-yellow transition-all"
                placeholder="Ваше ім'я"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-ukraine-yellow/30 text-white placeholder-blue-200 focus:outline-none focus:border-ukraine-yellow transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Повідомлення</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows="5"
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-ukraine-yellow/30 text-white placeholder-blue-200 focus:outline-none focus:border-ukraine-yellow transition-all resize-none"
                placeholder="Ваше повідомлення..."
              />
            </div>

            <button type="submit" className="w-full bg-ukraine-yellow hover:bg-yellow-500 text-ukraine-blue px-8 py-5 rounded-xl text-lg font-black transition-all transform hover:scale-105 shadow-lg shadow-ukraine-yellow/50 flex items-center justify-center gap-2">
              Надіслати повідомлення
              <Mail className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 border-t border-ukraine-yellow/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Shield className="w-10 h-10 text-ukraine-yellow" />
              <div>
                <span className="text-2xl font-black text-white">ПОТУЖНО</span>
                <p className="text-xs text-ukraine-yellow font-semibold">Володимир Зеленський</p>
              </div>
            </div>

            <div className="flex gap-8">
              <a href="#biography" onClick={(e) => smoothScroll(e, 'biography')} className="text-blue-200 hover:text-ukraine-yellow transition-colors">Біографія</a>
              <a href="#news" onClick={(e) => smoothScroll(e, 'news')} className="text-blue-200 hover:text-ukraine-yellow transition-colors">Новини</a>
              <a href="#initiatives" onClick={(e) => smoothScroll(e, 'initiatives')} className="text-blue-200 hover:text-ukraine-yellow transition-colors">Ініціативи</a>
              <a href="#gallery" onClick={(e) => smoothScroll(e, 'gallery')} className="text-blue-200 hover:text-ukraine-yellow transition-colors">Галерея</a>
            </div>
          </div>

          <div className="text-center text-blue-300 text-sm pt-8 border-t border-ukraine-yellow/20">
            © 2024 ПОТУЖНО - Володимир Зеленський. Всі права захищені.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App