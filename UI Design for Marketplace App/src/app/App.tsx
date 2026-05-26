import { Search, MapPin, ChevronDown, Wallet, ShoppingBag, Heart, BookOpen, PawPrint, TrendingUp, Phone, MessageCircle, Globe, DollarSign } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-primary">Etcetera</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:flex items-center gap-2">
            <div className="flex-1 flex items-center bg-input-background border border-border rounded-lg px-4 py-2.5 gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="পণ্য খুঁজুন / Search products..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
              <div className="flex items-center gap-2 border-l border-border pl-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <select className="bg-transparent outline-none text-sm cursor-pointer">
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Sylhet</option>
                  <option>Rajshahi</option>
                </select>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
              বিক্রি করুন / Post Ad
            </button>
            <div className="hidden lg:flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-lg border border-primary/20">
              <Wallet className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">৳1,500</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              আপনার পণ্য বিক্রি করুন এবং মাত্র ২ মিনিটে কাস্টমার পান
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Sell anything. Boost your business. Find customers instantly with Bangladesh's first unified marketplace platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-xl hover:shadow-2xl transition-all">
                Start Selling Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium text-lg border border-white/30 transition-all">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Pillar Features */}
      <section className="py-16 -mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Digital Marketing Card */}
            <div className="bg-gradient-to-br from-[#00C853] to-[#00A843] rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all cursor-pointer group hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Digital Marketing for SMEs</h3>
                  <p className="text-white/90 text-lg">কোনো ডলার কার্ড ছাড়াই বিকাশ/নগদে বুস্ট করুন</p>
                </div>
              </div>
              <p className="text-white/80 mb-6">
                Reach thousands of customers with targeted ads. Pay with bKash, Nagad, or Rocket. Get real results in BDT.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Local Payments</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">No Dollar Card Needed</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Real-time Analytics</span>
              </div>
            </div>

            {/* Pet Market Card */}
            <div className="bg-gradient-to-br from-[#FF6D00] to-[#F57C00] rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all cursor-pointer group hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <PawPrint className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Pet Market & Adoption Hub</h3>
                  <p className="text-white/90 text-lg">পোষা প্রাণী কিনুন, বিক্রি করুন বা দত্তক নিন</p>
                </div>
              </div>
              <p className="text-white/80 mb-6">
                Find your perfect companion. Verified sellers, health records, and safe adoption process.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Verified Healthy</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">In-app Chat</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Adoption Support</span>
              </div>
            </div>
          </div>

          {/* Secondary Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Buy & Sell Anything</h4>
              <p className="text-muted-foreground mb-4">Electronics, fashion, furniture, vehicles, and more. First 3 listings free!</p>
              <div className="text-accent font-medium">৳30 per listing →</div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Student Services</h4>
              <p className="text-muted-foreground mb-4">Buy/sell books, share notes, find tutors. Built for students, by students.</p>
              <div className="text-accent font-medium">Books from ৳20 →</div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Prepaid Wallet</h4>
              <p className="text-muted-foreground mb-4">Recharge once, use anytime. No repeated payment hassles. Like prepaid electricity!</p>
              <div className="text-accent font-medium">Recharge now →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Boost Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              বুস্ট করুন এবং দ্রুত বিক্রি করুন
            </h2>
            <p className="text-xl text-muted-foreground">
              Get more visibility, reach more customers, sell faster
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/30 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Basic Listing</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-accent">Free</span>
                </div>
                <p className="text-muted-foreground">First 3 listings, then ৳30</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-foreground">Standard listing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-foreground">30-day visibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-foreground">Basic support</span>
                </li>
              </ul>
              <button className="w-full bg-primary/10 text-primary py-3 rounded-lg font-medium hover:bg-primary/20 transition-colors">
                Post Free Ad
              </button>
            </div>

            {/* Premium Boost */}
            <div className="bg-gradient-to-br from-accent to-accent/90 rounded-2xl p-8 text-white shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6D00] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium Boost</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold">৳39</span>
                </div>
                <p className="text-white/90">3-day top placement</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span>Top search results</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span>5x more visibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span>Featured badge</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-white text-accent py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Boost Now
              </button>
            </div>

            {/* Mega Feature */}
            <div className="bg-card border-2 border-[#FF6D00]/30 rounded-2xl p-8 hover:border-[#FF6D00]/50 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Mega Feature</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-[#FF6D00]">৳79</span>
                </div>
                <p className="text-muted-foreground">7-day premium placement</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#FF6D00]/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#FF6D00] rounded-full" />
                  </div>
                  <span className="text-foreground">Homepage featured</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#FF6D00]/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#FF6D00] rounded-full" />
                  </div>
                  <span className="text-foreground">Highlighted border</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#FF6D00]/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#FF6D00] rounded-full" />
                  </div>
                  <span className="text-foreground">Social media push</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#FF6D00]/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#FF6D00] rounded-full" />
                  </div>
                  <span className="text-foreground">10x more reach</span>
                </li>
              </ul>
              <button className="w-full bg-[#FF6D00] text-white py-3 rounded-lg font-medium hover:bg-[#FF6D00]/90 transition-colors">
                Get Featured
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              সহজ পেমেন্ট সিস্টেম
            </h2>
            <p className="text-xl text-muted-foreground">
              Pay your way with trusted Bangladeshi payment methods
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Mobile Financial Services</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-[#E2136E]/5 rounded-lg border border-[#E2136E]/20">
                      <div className="w-12 h-12 bg-[#E2136E] rounded-lg flex items-center justify-center text-white font-bold">
                        bK
                      </div>
                      <span className="font-medium text-foreground">bKash</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-[#F68B1E]/5 rounded-lg border border-[#F68B1E]/20">
                      <div className="w-12 h-12 bg-[#F68B1E] rounded-lg flex items-center justify-center text-white font-bold">
                        N
                      </div>
                      <span className="font-medium text-foreground">Nagad</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-[#8B3A9C]/5 rounded-lg border border-[#8B3A9C]/20">
                      <div className="w-12 h-12 bg-[#8B3A9C] rounded-lg flex items-center justify-center text-white font-bold">
                        R
                      </div>
                      <span className="font-medium text-foreground">Rocket</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Cards & Wallet</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Prepaid Wallet</div>
                        <div className="text-sm text-muted-foreground">Instant payments</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        VISA
                      </div>
                      <span className="font-medium text-foreground">Credit/Debit Card</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-400 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                        MC
                      </div>
                      <span className="font-medium text-foreground">Mastercard</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Why Use Prepaid Wallet?</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Recharge once, use for all services</li>
                      <li>• Instant boost activation (no payment delays)</li>
                      <li>• Better tracking of your ad spend</li>
                      <li>• Avoid repeated bKash/Nagad popups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Listings</h2>
              <p className="text-muted-foreground">Browse what's trending on Etcetera</p>
            </div>
            <button className="text-accent font-medium hover:underline">View All →</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sample Item 1 */}
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all cursor-pointer group">
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc21hbGwlMjBidXNpbmVzc3xlbnwxfHx8fDE3Nzk3ODAwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-2 right-2 bg-accent text-white px-2 py-1 rounded text-xs font-medium">
                  Featured
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Electronics</span>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <h3 className="font-bold text-foreground mb-1">MacBook Pro 2023</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">M2 chip, 16GB RAM, like new condition</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-accent">৳1,85,000</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Dhaka
                  </span>
                </div>
              </div>
            </div>

            {/* Sample Item 2 - Pet */}
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all cursor-pointer group">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjdXRlJTIwcGV0cyUyMGRvZ3MlMjBjYXRzJTIwYWRvcHRpb258ZW58MXx8fHwxNzc5NzgwMDE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Pet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  Verified Healthy
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-[#FF6D00]/10 text-[#FF6D00] px-2 py-0.5 rounded">Pets</span>
                  <span className="text-xs text-muted-foreground">5 hours ago</span>
                </div>
                <h3 className="font-bold text-foreground mb-1">Golden Retriever Puppy</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">3 months, vaccinated, playful</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#FF6D00]">৳25,000</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Gulshan
                  </span>
                </div>
              </div>
            </div>

            {/* Sample Item 3 - Books */}
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all cursor-pointer group">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden flex items-center justify-center">
                <BookOpen className="w-20 h-20 text-blue-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded">Books</span>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
                <h3 className="font-bold text-foreground mb-1">CSE Textbooks Bundle</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">Data Structures, Algorithms, DBMS</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-accent">৳1,200</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    BUET
                  </span>
                </div>
              </div>
            </div>

            {/* Sample Item 4 */}
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all cursor-pointer group">
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-purple-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566701781618-42621bb67c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRwbGFjZSUyMHNob3BwaW5nJTIwb25saW5lJTIwYmFuZ2xhZGVzaHxlbnwxfHx8fDE3Nzk3ODAwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Fashion</span>
                  <span className="text-xs text-muted-foreground">3 days ago</span>
                </div>
                <h3 className="font-bold text-foreground mb-1">Designer Handbag</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">Brand new, never used</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-accent">৳3,500</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Banani
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Selling?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of sellers already using Etcetera to grow their business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-xl flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Post Your First Ad
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium text-lg border border-white/30 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold">Etcetera</span>
              </div>
              <p className="text-white/70">
                Bangladesh's unified marketplace for everything you need.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Sellers</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">Post Ad</a></li>
                <li><a href="#" className="hover:text-white">Boost Listing</a></li>
                <li><a href="#" className="hover:text-white">Marketing Tools</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">Electronics</a></li>
                <li><a href="#" className="hover:text-white">Pets</a></li>
                <li><a href="#" className="hover:text-white">Books & Education</a></li>
                <li><a href="#" className="hover:text-white">Fashion</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Safety Tips</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2026 Etcetera. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white">Facebook</a>
              <a href="#" className="text-white/70 hover:text-white">Instagram</a>
              <a href="#" className="text-white/70 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
