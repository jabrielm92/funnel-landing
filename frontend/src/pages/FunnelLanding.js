import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, Shield, Clock, TrendingUp, Users, DollarSign, Zap, Award, Lock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const FunnelLanding = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to checkout with query params
    const checkoutUrl = `https://arisolutionsinc.vercel.app/checkout/course-001?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&source=course-landing`;
    window.location.href = checkoutUrl;
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
      avatar: 'MT'
    },
    {
      name: 'Sophia Chen',
      result: '$12,200 in 30 Days',
      timeframe: 'First deal closed Day 9',
      quote: "The dashboard alone is worth 10x the course price. I closed my first deal in 9 days with a dental office. They're thrilled, I'm making recurring revenue, and I work 4 hours a week on this.",
      avatar: 'SC'
    },
    {
      name: 'Derek Washington',
      result: '$6,800 in 60 Days',
      timeframe: 'First deal closed Day 14',
      quote: "I was skeptical about 'zero to deal in 14 days' but it actually works. The outreach templates and demo scripts are gold. I hit my first deal exactly on day 14. Life-changing.",
      avatar: 'DW'
    }
  ];

  return (
    <div className="funnel-landing">
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
              <div className="hero-badge">
                <Zap className="hero-badge-icon" />
                <span>Limited Time: Save $170</span>
              </div>
              
              <h1 className="display-hero">How To Make Money With AI</h1>
              <p className="hero-subtitle">Zero-to-Deal in 14 Days</p>
              <p className="body-large hero-description">
                The exact system to package and sell a high-demand AI service that local businesses desperately need — starting with zero experience.
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
                  Get Instant Access — $27
                </Button>
                <div className="price-strike">
                  <span className="price-original">$197</span>
                  <span className="price-current">$27</span>
                  <span className="price-savings">Save $170 Today</span>
                </div>
              </motion.div>

              <div className="trust-badges-inline">
                <div className="trust-badge-item">
                  <CheckCircle2 className="trust-icon" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
                <div className="trust-badge-item">
                  <Lock className="trust-icon" />
                  <span>Secure Checkout</span>
                </div>
              </div>
            </motion.div>
          </div>
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
            <p className="body-large text-secondary">Students who went from zero to closed deals in weeks</p>
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
                  <div className="success-avatar">{story.avatar}</div>
                  <div>
                    <h3 className="success-name">{story.name}</h3>
                    <p className="success-timeframe">{story.timeframe}</p>
                  </div>
                </div>
                <div className="success-result">{story.result}</div>
                <p className="success-quote">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section - Dashboard Showcase */}
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
              Professional business management system — <strong>FREE for 30 days</strong>, then just $19.99/month
            </p>
          </motion.div>

          <div className="dashboard-showcase">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springConfig}
              className="dashboard-feature"
            >
              <div className="dashboard-image">
                <img 
                  src="https://customer-assets.emergentagent.com/job_539d18fa-c00b-44c7-a8a7-1ae9375d4377/artifacts/3f7wcvvm_Screenshot%202025-11-05%20124459.png" 
                  alt="Lead Generation Control Center"
                />
              </div>
              <div className="dashboard-info">
                <TrendingUp className="dashboard-icon" />
                <h3 className="heading-medium">Lead Generation Control Center</h3>
                <p className="body-standard">Track campaigns, monitor lead delivery, and manage your entire client pipeline from one powerful dashboard.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.1 }}
              className="dashboard-feature dashboard-feature-reverse"
            >
              <div className="dashboard-info">
                <Users className="dashboard-icon" />
                <h3 className="heading-medium">Client Portal & Analytics</h3>
                <p className="body-standard">Give your clients real-time access to their performance data, bookings, and revenue metrics — building trust and retention.</p>
              </div>
              <div className="dashboard-image">
                <img 
                  src="https://customer-assets.emergentagent.com/job_539d18fa-c00b-44c7-a8a7-1ae9375d4377/artifacts/c7qi1gqv_Screenshot%202025-11-05%20124510.png" 
                  alt="Client Portal"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.2 }}
              className="dashboard-feature"
            >
              <div className="dashboard-image">
                <img 
                  src="https://customer-assets.emergentagent.com/job_539d18fa-c00b-44c7-a8a7-1ae9375d4377/artifacts/g1wwk1ek_Screenshot%202025-11-05%20124535.png" 
                  alt="Advanced Analytics"
                />
              </div>
              <div className="dashboard-info">
                <DollarSign className="dashboard-icon" />
                <h3 className="heading-medium">Revenue & Performance Tracking</h3>
                <p className="body-standard">Deep analytics on conversion funnels, lead sources, and revenue attribution — scale what works, cut what doesn't.</p>
              </div>
            </motion.div>
          </div>

          <div className="dashboard-value">
            <h3 className="heading-medium">This System Alone Is Worth $500+/Month</h3>
            <p className="body-large">You get it FREE for 30 days, then $19.99/month — giving you a professional edge over competitors</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            <h2 className="display-hero cta-heading">Your Financial Future Starts Today</h2>
            <p className="body-large cta-description">
              Stop watching others succeed. Join 847+ students who've transformed their income with AI in just 14 days.
            </p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <Clock className="feature-icon" />
                <div>
                  <h4 className="body-standard font-medium">14-Day Sprint</h4>
                  <p className="body-small text-muted">Close your first deal in 2 weeks</p>
                </div>
              </div>
              <div className="cta-feature">
                <Shield className="feature-icon" />
                <div>
                  <h4 className="body-standard font-medium">Zero Risk</h4>
                  <p className="body-small text-muted">30-day money-back guarantee</p>
                </div>
              </div>
              <div className="cta-feature">
                <DollarSign className="feature-icon" />
                <div>
                  <h4 className="body-standard font-medium">$27 One-Time</h4>
                  <p className="body-small text-muted">Lifetime access to all materials</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => setShowModal(true)}
              className="btn-primary btn-large cta-button"
            >
              Start Your 14-Day Journey Now
            </Button>

            <div className="trust-badges">
              <div className="trust-badge">
                <Shield className="trust-badge-icon" />
                <div>
                  <p className="trust-badge-title">30-Day Money-Back Guarantee</p>
                  <p className="trust-badge-text">Try it risk-free. Full refund if not satisfied.</p>
                </div>
              </div>
              <div className="trust-badge">
                <Award className="trust-badge-icon" />
                <div>
                  <p className="trust-badge-title">Trusted by 847+ Students</p>
                  <p className="trust-badge-text">4.9/5 average rating from real users.</p>
                </div>
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
              />
            </div>
            <Button type="submit" className="btn-primary btn-large w-full">
              Continue to Checkout →
            </Button>
            <p className="modal-guarantee">
              <Shield className="inline-icon" />
              30-day money-back guarantee • Secure checkout
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FunnelLanding;