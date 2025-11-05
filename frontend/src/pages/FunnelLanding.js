import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, Shield, Clock, TrendingUp, Users, DollarSign, Zap, Award, Lock, ArrowRight, BarChart3, Calendar, PhoneCall, Star, Briefcase, Target, TrendingDown } from 'lucide-react';
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
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' });

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

      toast.success('Information saved! Redirecting to checkout...');
      
      // Redirect to checkout with query params
      setTimeout(() => {
        const checkoutUrl = `https://arisolutionsinc.vercel.app/checkout/course-001?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&source=course-landing`;
        window.location.href = checkoutUrl;
      }, 1500);
    } catch (error) {
      console.error('Error saving lead:', error);
      toast.error('Something went wrong. Please try again.');
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
      name: 'Sophia Chen',
      result: '$12,200 in 30 Days',
      timeframe: 'First deal closed Day 9',
      quote: "The dashboard alone is worth 10x the course price. I closed my first deal in 9 days with a dental office. They're thrilled, I'm making recurring revenue, and I work 4 hours a week on this.",
      image: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHN8ZW58MHx8fHwxNzYyMzY3MjEwfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Derek Washington',
      result: '$6,800 in 60 Days',
      timeframe: 'First deal closed Day 14',
      quote: "I was skeptical about 'zero to deal in 14 days' but it actually works. The outreach templates and demo scripts are gold. I hit my first deal exactly on day 14. Life-changing.",
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

              {/* VIDEO PLACEHOLDER */}
              <div className="video-container">
                <div className="video-placeholder">
                  <div className="video-placeholder-content">
                    <div className="video-play-icon">
                      <div className="play-triangle"></div>
                    </div>
                    <p className="video-placeholder-text">⬆️ ADD 60-SECOND VIDEO HERE ⬆️</p>
                    <p className="video-placeholder-subtext">Replace this placeholder in the code</p>
                  </div>
                </div>
              </div>

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
                <p className="body-large">
                  We're <span className="text-bold">not</span> trying to get rich selling courses. We already make money providing <span className="text-bold">AI automation solutions to companies.</span>
                </p>
                <p className="body-standard">
                  Our mission? <span className="text-bold">Change lives and empower entrepreneurs.</span> We want to put this system in the hands of <span className="text-bold">as many people as possible</span> — not break the bank with a $997 course that sits on a shelf.
                </p>
                <p className="body-standard">
                  At $27, there's <span className="text-urgent text-bold">no excuse</span> not to start. We're removing every barrier between you and your first deal. The only question is: <span className="text-bold">will you take action?</span>
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
          </motion.div>

          <div className="dashboard-carousel-container">
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
          </div>

          <div className="dashboard-value">
            <h3 className="heading-medium">This System Alone Is Worth <span className="text-urgent">$500+/Month</span></h3>
            <p className="body-large">You get it <span className="text-bold">FREE for 30 days</span>, then $19.99/month — giving you a <span className="text-bold">professional edge</span> over competitors</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="cta-section gradient-waitlist">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="cta-content"
          >
            <Award className="cta-icon" />
            <h2 className="display-hero cta-heading">Your Financial Future Starts <span className="text-urgent">Today</span></h2>
            <p className="body-large cta-description">
              Stop watching others succeed. Join <span className="text-bold">847+ students</span> who've transformed their income with AI in just <span className="text-bold text-urgent">14 days.</span>
            </p>
            
            <div className="cta-stats-grid">
              <div className="cta-stat">
                <div className="cta-stat-number">$2.4M+</div>
                <p className="cta-stat-label">Revenue Generated by Students</p>
              </div>
              <div className="cta-stat">
                <div className="cta-stat-number">97%</div>
                <p className="cta-stat-label">Haven't Implemented AI Yet</p>
              </div>
              <div className="cta-stat">
                <div className="cta-stat-number">14 Days</div>
                <p className="cta-stat-label">From Zero to First Deal</p>
              </div>
            </div>

            <div className="cta-features">
              <div className="cta-feature">
                <Briefcase className="feature-icon" />
                <div>
                  <h4 className="body-standard font-medium">Build a Real Business</h4>
                  <p className="body-small text-muted">Not a side hustle. A legitimate AI consulting business.</p>
                </div>
              </div>
              <div className="cta-feature">
                <BarChart3 className="feature-icon" />
                <div>
                  <h4 className="body-standard font-medium">Recurring Revenue Model</h4>
                  <p className="body-small text-muted">Monthly retainers that compound your income.</p>
                </div>
              </div>
              <div className="cta-feature">
                <Calendar className="feature-icon" />
                <div>
                  <h4 className="body-standard font-medium">Work Your Own Schedule</h4>
                  <p className="body-small text-muted">4-10 hours per week. Location independent.</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => setShowModal(true)}
              className="btn-primary btn-large cta-button"
            >
              <span className="text-bold">Start Your 14-Day Journey Now</span>
              <ArrowRight className="btn-icon" />
            </Button>

            <div className="final-value-props">
              <div className="value-prop-item">
                <CheckCircle2 className="value-icon" />
                <span><span className="text-bold">Lifetime Access</span> to All Course Materials</span>
              </div>
              <div className="value-prop-item">
                <CheckCircle2 className="value-icon" />
                <span><span className="text-bold">Copy-and-Ship</span> Templates, Scripts & SOPs</span>
              </div>
              <div className="value-prop-item">
                <CheckCircle2 className="value-icon" />
                <span><span className="text-bold">Step-by-Step</span> Implementation Guides</span>
              </div>
              <div className="value-prop-item">
                <CheckCircle2 className="value-icon" />
                <span><span className="text-bold">14-Day Sprint</span> to First Closed Deal</span>
              </div>
            </div>

            <div className="final-guarantee">
              <Shield className="guarantee-icon" />
              <div>
                <h3 className="heading-medium">14-Day Money-Back Guarantee</h3>
                <p className="body-standard">Try it risk-free. If you're not satisfied within 14 days, we'll refund every penny. No questions asked.</p>
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