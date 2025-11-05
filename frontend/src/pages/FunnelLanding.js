import React, { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, Shield, Clock, TrendingUp, Users, DollarSign, Zap, Award, Lock, ArrowRight, BarChart3, Calendar, PhoneCall, Star, Briefcase, Target, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import useEmblaCarousel from 'embla-carousel-react';
import { database } from '../config/firebase';
import { ref, push } from 'firebase/database';
import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';

const FunnelLanding = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firebase
      const leadsRef = ref(database, 'leads');
      await push(leadsRef, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        timestamp: new Date().toISOString(),
        source: 'course-landing'
      });

      console.log('Lead saved successfully to Firebase');
      toast.success('Information saved! Redirecting to checkout...');
      
      // Redirect to checkout without query params (clean URL)
      setTimeout(() => {
        window.location.href = 'https://arisolutionsinc.vercel.app/checkout/course-001';
      }, 1500);
    } catch (error) {
      console.error('Firebase Error:', error);
      console.error('Error details:', error.message);
      toast.error(`Error: ${error.message}. Please try again or contact support.`);
      setIsSubmitting(false);
    }
  };

  const springConfig = {
    type: 'spring',
    damping: 80,
    stiffness: 400,
    mass: 1
  };

  const successStories = [
    {
      name: 'Marcus Thompson',
      result: '$8,450 in 45 Days',
      timeframe: 'First deal closed Day 11',
      quote: "I had zero AI experience. The step-by-step system made it ridiculously easy. Landed my first client on day 11 for $2,500 setup + $350/mo. Now I'm at 4 clients and growing.",
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHN8ZW58MHx8fHwxNzYyMzY3MjEwfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Michael Coy',
      result: '$12,200 in 30 Days',
      timeframe: 'First deal closed Day 9',
      quote: "The dashboard alone is worth 10x the course price. I closed my first deal in 9 days with a dental office. They're thrilled, I'm making recurring revenue, and I work 4 hours a week on this.",
      image: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHN8ZW58MHx8fHwxNzYyMzY3MjEwfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Deidra Mathews',
      result: '$6,800 in 60 Days',
      timeframe: 'First deal closed Day 14',
      quote: "I was skeptical about the timeline but it actually works. The outreach templates and demo scripts are gold. Hit my first deal exactly on day 14. Life-changing.",
      image: 'https://images.unsplash.com/photo-1657128344786-360c3f8e57e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHN8ZW58MHx8fHwxNzYyMzY3MjEwfDA&ixlib=rb-4.1.0&q=85'
    }
  ];

  const dashboardImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_539d18fa-c00b-44c7-a8a7-1ae9375d4377/artifacts/3f7wcvvm_Screenshot%202025-11-05%20124459.png',
      title: 'Lead Generation Control Center',
      description: 'Track campaigns and manage your entire client pipeline'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_539d18fa-c00b-44c7-a8a7-1ae9375d4377/artifacts/c7qi1gqv_Screenshot%202025-11-05%20124510.png',
      title: 'Client Portal & Analytics',
      description: 'Real-time performance data building trust and retention'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_539d18fa-c00b-44c7-a8a7-1ae9375d4377/artifacts/g1wwk1ek_Screenshot%202025-11-05%20124535.png',
      title: 'Revenue & Performance Tracking',
      description: 'Deep analytics on conversion funnels and revenue attribution'
    }
  ];

  return (
    <div className="funnel-landing">
      <Toaster position="top-center" />
      
      {/* Hero Section with Gradient */}
      <section className="gradient-hero">
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springConfig, delay: 0.1 }}
              className="hero-content"
            >
              <h1 className="display-hero">How To Make Money With AI</h1>
              <p className="hero-subtitle">Zero-to-Deal in 14 Days</p>
              <p className="body-large hero-description">
                The exact system to package and sell a <span className="text-bold">high-demand AI service</span> that local businesses <span className="text-bold text-urgent">desperately need</span> — starting with <span className="text-bold">zero experience.</span>
              </p>
              
              <p className="body-large hero-description-extended">
                While everyone's scrambling for ChatGPT gigs, you'll be building <span className="text-bold">automated appointment booking systems</span> that businesses will pay <span className="text-bold">$650-$2,500 to implement</span> plus <span className="text-bold">$350-$500 every single month.</span> No coding required. Just connecting proven tools that <span className="text-bold">work together seamlessly.</span> This is the AI opportunity hiding in plain sight — and you're about to master it in just 14 days.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springConfig, delay: 0.3 }}
                className="hero-cta"
              >
                <Button 
                  onClick={() => setShowModal(true)}
                  className="btn-primary btn-large"
                >
                  Get Instant Access — <span className="text-bold">$27</span>
                </Button>
                <div className="price-strike">
                  <span className="price-original">$197</span>
                  <span className="price-current">$27</span>
                  <span className="price-savings">Save $170 Today</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Opportunity Section */}
      <section className="opportunity-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="opportunity-content"
          >
            <h2 className="heading-large text-center">The AI Revolution Is Happening <span className="text-urgent text-bold">Right Now</span></h2>
            <p className="body-large text-center text-secondary opportunity-intro">
              While everyone's talking about AI, <span className="text-bold">97% of small businesses still haven't implemented it.</span> This is your window.
            </p>

            <div className="opportunity-grid">
              <div className="opportunity-card">
                <TrendingDown className="opportunity-icon opportunity-icon-problem" />
                <h3 className="heading-medium">The Problem</h3>
                <p className="body-standard">Local businesses are <span className="text-bold text-urgent">losing thousands</span> every month from missed appointments, no-shows, and manual booking chaos. They <span className="text-bold">need</span> a solution but don't know where to start.</p>
              </div>

              <div className="opportunity-card">
                <Zap className="opportunity-icon opportunity-icon-solution" />
                <h3 className="heading-medium">Your Solution: ABA</h3>
                <p className="body-standard">The <span className="text-bold">Appointment Booking Accelerator</span> saves businesses <span className="text-bold">10+ hours per week</span>, increases bookings by <span className="text-bold">40%</span>, and reduces no-shows by <span className="text-bold">80%</span>. It's what they're actively searching for.</p>
              </div>

              <div className="opportunity-card">
                <Target className="opportunity-icon opportunity-icon-opportunity" />
                <h3 className="heading-medium">Your Opportunity</h3>
                <p className="body-standard">Position yourself as the AI expert who <span className="text-bold">transforms their business.</span> Charge <span className="text-bold">$650-$2,500</span> setup + <span className="text-bold">$350-$500/month</span> recurring. This is the ground floor.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Image Section */}
      <section className="course-preview-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="course-preview-content"
          >
            <div className="course-preview-grid">
              <div className="course-preview-image">
                <img 
                  src="https://customer-assets.emergentagent.com/job_zero-to-deal/artifacts/1nf42ye2_aba.avif" 
                  alt="AI Business Course Preview"
                />
              </div>
              <div className="course-preview-info">
                <h2 className="heading-large">Why This Course Is Only <span className="text-urgent text-bold">$27</span></h2>
                
                <p className="body-large text-bold">
                  We're not trying to get rich selling courses.
                </p>
                
                <p className="body-standard">
                  Automation-Ready Income Solutions already generates <span className="text-bold">six figures annually</span> building custom AI automation systems for businesses. We don't need to charge $997 or $1,997 for a course to survive. That's the old-school guru playbook — price it high to "look premium" while the content sits unwatched on someone's hard drive.
                </p>
                
                <p className="body-standard">
                  Our mission is different: <span className="text-bold">We want to create 1,000 successful AI consultants</span> who go on to build real, profitable businesses. When you succeed, you become living proof that <span className="text-bold">this model works.</span> You become a referral source. You become part of a network where we all rise together.
                </p>
                
                <p className="body-standard">
                  At <span className="text-urgent text-bold">$27</span>, we've removed every excuse. You can't say "it's too expensive." You can't say "what if it doesn't work for me?" You can't rationalize putting it off another month. For the price of <span className="text-bold">two takeout meals</span>, you get lifetime access to a proven system, all templates, all tools, all future updates, and the exact playbook that's generated millions in revenue for our students.
                </p>
                
                <p className="body-standard">
                  <span className="text-bold">This is your chance.</span> We're betting $27 that you'll take action. That you'll follow the system. That you'll close your first deal and never look back. The only question left is: will you bet on yourself?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="section-header"
          >
            <h2 className="heading-large">Real People. Real Results.</h2>
            <p className="body-large text-secondary">Students who went from <span className="text-bold">zero to closed deals in weeks</span></p>
          </motion.div>

          <div className="success-stories-grid">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springConfig, delay: index * 0.1 }}
                className="success-card"
              >
                <div className="success-card-header">
                  <img src={story.image} alt={story.name} className="success-avatar-img" />
                  <div>
                    <h3 className="success-name">{story.name}</h3>
                    <p className="success-timeframe">{story.timeframe}</p>
                  </div>
                </div>
                <div className="success-result">{story.result}</div>
                <p className="success-quote">"{story.quote}"</p>
                <div className="success-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star-icon" fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="tech-stack-content"
          >
            <h2 className="heading-large text-center">Build Your ABA With <span className="text-bold">Zero Coding</span></h2>
            <p className="body-large text-center text-secondary">
              The exact tools and stack we teach you — <span className="text-bold">all free or minimal cost to start</span>
            </p>

            <div className="tech-stack-grid">
              <div className="tech-stack-item">
                <div className="tech-icon">📊</div>
                <h3 className="body-standard text-bold">Airtable</h3>
                <p className="body-small text-secondary">Your single source of truth for all client data and automation logic</p>
              </div>
              <div className="tech-stack-item">
                <div className="tech-icon">📅</div>
                <h3 className="body-standard text-bold">Calendly</h3>
                <p className="body-small text-secondary">Scheduling engine that syncs with your calendar in real-time</p>
              </div>
              <div className="tech-stack-item">
                <div className="tech-icon">📝</div>
                <h3 className="body-standard text-bold">Forms</h3>
                <p className="body-small text-secondary">Tally, Typeform, or Webflow for beautiful booking interfaces</p>
              </div>
              <div className="tech-stack-item">
                <div className="tech-icon">⚡</div>
                <h3 className="body-standard text-bold">Zapier</h3>
                <p className="body-small text-secondary">Your automation hub that connects everything together</p>
              </div>
              <div className="tech-stack-item">
                <div className="tech-icon">📧</div>
                <h3 className="body-standard text-bold">Email/SMS</h3>
                <p className="body-small text-secondary">Gmail, SendGrid, Postmark, or Twilio for automated communications</p>
              </div>
              <div className="tech-stack-item">
                <div className="tech-icon">💻</div>
                <h3 className="body-standard text-bold">Dashboard</h3>
                <p className="body-small text-secondary">Professional client portal and analytics system included</p>
              </div>
            </div>

            <div className="tech-stack-value">
              <h3 className="heading-medium">No Coding. No Complex Setup. No Expensive Developers.</h3>
              <p className="body-large">
                The course walks you through <span className="text-bold">connecting each tool step-by-step</span>. You'll have a working system in days, not months. We show you exactly which buttons to click, what to configure, and how to test everything before going live with your first client.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Carousel Section */}
      <section className="dashboard-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="section-header"
          >
            <h2 className="heading-large">Powerful Admin & Client Dashboard Included</h2>
            <p className="body-large text-secondary">
              Professional business management system — <span className="text-bold text-urgent">FREE for 30 days</span>, then just <span className="text-bold">$19.99/month</span>
            </p>
            <p className="body-small text-muted">Swipe or drag to explore all features</p>
          </motion.div>

          <div className="dashboard-carousel-container">
            <div className="embla-wrapper">
              <button 
                className="embla__button embla__button--prev" 
                onClick={scrollPrev}
                aria-label="Previous dashboard image"
              >
                <ChevronLeft className="embla__button-icon" />
              </button>
              
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {dashboardImages.map((dashboard, index) => (
                    <div className="embla__slide" key={index}>
                      <div className="dashboard-carousel-item">
                        <img src={dashboard.url} alt={dashboard.title} />
                        <div className="dashboard-carousel-info">
                          <h3 className="heading-medium">{dashboard.title}</h3>
                          <p className="body-standard text-secondary">{dashboard.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className="embla__button embla__button--next" 
                onClick={scrollNext}
                aria-label="Next dashboard image"
              >
                <ChevronRight className="embla__button-icon" />
              </button>
            </div>
            
            <div className="carousel-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          <div className="dashboard-value">
            <h3 className="heading-medium">This System Alone Is Worth <span className="text-urgent">$500+/Month</span></h3>
            <p className="body-large">You get it <span className="text-bold">FREE for 30 days</span>, then $19.99/month — giving you a <span className="text-bold">professional edge</span> over competitors</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Lifestyle Focused */}
      <section className="cta-section gradient-waitlist">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="cta-content"
          >
            <h2 className="display-hero cta-heading">Your Financial Future Starts <span className="text-urgent">Today</span></h2>
            
            <div className="lifestyle-content">
              <p className="body-large">
                This isn't just about making money. It's about <span className="text-bold">taking control of your life.</span>
              </p>
              
              <p className="body-standard">
                Imagine waking up without an alarm. No commute. No boss breathing down your neck. You check your phone and see <span className="text-bold">three new appointment confirmations</span> — that's $350 in recurring monthly revenue that just landed while you slept. Your clients are thrilled because their businesses are running smoother than ever. You're working <span className="text-bold">4-6 hours per week</span> maintaining systems that run on autopilot.
              </p>

              <p className="body-standard">
                Within 60 days, you've replaced your 9-5 income. Within 6 months, you're pulling <span className="text-bold">$8,000-$15,000 per month.</span> You book that trip you've been putting off for years. You spend afternoons with your kids. You work from coffee shops, beaches, or your living room. <span className="text-bold">This is what freedom looks like.</span>
              </p>

              <h3 className="heading-medium" style={{ marginTop: '48px' }}>Beyond the ABA: Your AI Empire</h3>
              
              <p className="body-standard">
                Once you've mastered the Appointment Booking Accelerator, you'll have the foundation to build <span className="text-bold">any AI automation:</span>
              </p>

              <div className="future-automations">
                <div className="automation-item">
                  <Zap className="automation-icon" />
                  <div>
                    <h4 className="body-standard text-bold">Lead Generation Machines</h4>
                    <p className="body-small text-secondary">Automated systems that capture, qualify, and nurture leads 24/7. Charge $1,500-$3,000 setup + $500-$800/month.</p>
                  </div>
                </div>
                <div className="automation-item">
                  <Zap className="automation-icon" />
                  <div>
                    <h4 className="body-standard text-bold">Customer Onboarding Flows</h4>
                    <p className="body-small text-secondary">Eliminate manual onboarding chaos with AI-powered workflows. Service businesses pay $2,000-$4,000 for this.</p>
                  </div>
                </div>
                <div className="automation-item">
                  <Zap className="automation-icon" />
                  <div>
                    <h4 className="body-standard text-bold">AI Customer Support</h4>
                    <p className="body-small text-secondary">Chatbots that handle 80% of customer questions instantly. Charge $2,500-$5,000 setup + retainers.</p>
                  </div>
                </div>
                <div className="automation-item">
                  <Zap className="automation-icon" />
                  <div>
                    <h4 className="body-standard text-bold">Data Enrichment & CRM Automation</h4>
                    <p className="body-small text-secondary">Keep sales teams organized and productive automatically. $1,500-$3,500 per implementation.</p>
                  </div>
                </div>
              </div>

              <p className="body-standard" style={{ marginTop: '32px' }}>
                The ABA is your <span className="text-bold">entry point.</span> Once you understand how to connect tools, build workflows, and deliver value, the opportunities are <span className="text-urgent text-bold">endless.</span> Our students are now running full AI consulting agencies generating <span className="text-bold">$20,000-$50,000+ per month.</span>
              </p>

              <h3 className="heading-medium" style={{ marginTop: '48px' }}>What's Inside: Build + Sell System</h3>
              
              <p className="body-standard">
                This course teaches you <span className="text-bold">two critical skills:</span> how to <span className="text-bold">build</span> the ABA system and how to <span className="text-bold">find and close clients.</span> Most courses teach you the tech but leave you clueless on sales. We give you both.
              </p>

              <div className="course-modules">
                <div className="module-group">
                  <h4 className="body-standard text-bold">Building the System:</h4>
                  <ul className="module-list">
                    <li>Complete tech stack setup (Airtable, Zapier, Calendly, Forms)</li>
                    <li>Workflow design and automation logic</li>
                    <li>Payment integration and reminder systems</li>
                    <li>Testing, QA, and go-live checklists</li>
                    <li>Client dashboard configuration</li>
                  </ul>
                </div>
                <div className="module-group">
                  <h4 className="body-standard text-bold">Finding & Closing Clients:</h4>
                  <ul className="module-list">
                    <li>Outbound lead generation strategies that work</li>
                    <li>Discovery call scripts and frameworks</li>
                    <li>Demo presentation that converts 60%+ of prospects</li>
                    <li>Pricing, proposals, and closing techniques</li>
                    <li>Objection handling and negotiation tactics</li>
                  </ul>
                </div>
              </div>

              <div className="included-bonus">
                <CheckCircle2 className="bonus-icon" />
                <div>
                  <h4 className="body-standard text-bold">Lifetime Access + All Future Updates</h4>
                  <p className="body-standard">
                    Pay once, access forever. As we improve the course, add new modules, and update for 2025 tools and strategies, <span className="text-bold">you get every update at no additional cost.</span> Your $27 investment today grows in value over time.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => setShowModal(true)}
              className="btn-primary btn-large cta-button"
            >
              <span className="text-bold">Get Instant Access — $27</span>
              <ArrowRight className="btn-icon" />
            </Button>

            <div className="cta-stats-grid" style={{ marginTop: '48px' }}>
              <div className="cta-stat">
                <div className="cta-stat-number">$2.4M+</div>
                <p className="cta-stat-label">Revenue Generated by Students</p>
              </div>
              <div className="cta-stat">
                <div className="cta-stat-number">847+</div>
                <p className="cta-stat-label">Successful Students</p>
              </div>
              <div className="cta-stat">
                <div className="cta-stat-number">4.9/5</div>
                <p className="cta-stat-label">Average Course Rating</p>
              </div>
            </div>

            <div className="final-guarantee">
              <Shield className="guarantee-icon" />
              <div>
                <h3 className="heading-medium">14-Day Money-Back Guarantee</h3>
                <p className="body-standard">We're confident this will change your life. But if you go through the course, follow the system, and don't see the value, we'll refund every penny within 14 days. No questions. No hassle. You risk nothing.</p>
              </div>
            </div>

            <p className="company-name">Automation-Ready Income Solutions Inc.</p>
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="modal-content">
          <DialogHeader>
            <DialogTitle className="heading-medium">Get Instant Access</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <Label htmlFor="name" className="body-standard">Full Name</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <Label htmlFor="email" className="body-standard">Email Address</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
                placeholder="you@example.com"
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <Label htmlFor="phone" className="body-standard">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
                placeholder="(555) 123-4567"
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="btn-primary btn-large w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Continue to Checkout →'}
            </Button>
            <p className="modal-guarantee">
              <Lock className="inline-icon" />
              Secure checkout • Your information is safe
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FunnelLanding;
