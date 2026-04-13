/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Heart,
  Baby,
  Brain,
  Sparkles
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-bg/80 backdrop-blur-md border-b border-olive/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-olive rounded-full flex items-center justify-center text-cream">
          <Heart size={20} />
        </div>
        <span className="font-serif text-xl font-semibold tracking-tight text-olive">Joy Muriuki</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-olive/80">
        <a href="#about" className="hover:text-olive transition-colors">About</a>
        <a href="#training" className="hover:text-olive transition-colors">Training</a>
        <a href="#registration" className="hover:text-olive transition-colors">Registration</a>
        <a href="https://forms.gle/7G77zrUhMwAvoFZLA" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-olive text-cream rounded-full hover:bg-olive-light transition-all shadow-sm">
          Register Now
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive/10 text-olive text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles size={14} />
          <span>ABA Behavioral Therapy</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-serif leading-[1.1] text-olive mb-6">
          Parenting Behavior <br />
          <span className="italic">Skills Training</span>
        </h1>
        <p className="text-xl text-olive/70 max-w-xl leading-relaxed mb-8">
          Understanding Behavior; Teaching Daily Lifeskills with Confidence for Autistic Children ages 2-8 years.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://forms.gle/7G77zrUhMwAvoFZLA" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-olive text-cream rounded-full font-medium hover:bg-olive-light transition-all shadow-lg flex items-center gap-2">
            Secure Your Spot <ChevronRight size={18} />
          </a>
          <a href="#about" className="px-8 py-4 border border-olive/20 text-olive rounded-full font-medium hover:bg-olive/5 transition-all">
            Learn More
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000" 
            alt="Parent and child learning" 
            className="w-full h-[600px] object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-olive/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-6 -right-6 w-64 h-64 bg-olive/5 rounded-full blur-3xl -z-10" />
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const items = [
    {
      title: "Why Challenging Behavior Happens",
      description: "Learn the root causes and functions of behavior in children with autism.",
      icon: <Brain className="text-olive" />
    },
    {
      title: "Step-by-Step Skill Teaching",
      description: "Master the art of breaking down complex tasks into manageable steps.",
      icon: <Baby className="text-olive" />
    },
    {
      title: "Positive Behavior Support",
      description: "Implement strategies that focus on reinforcement rather than punishment.",
      icon: <Heart className="text-olive" />
    },
    {
      title: "Calm, Consistent Response",
      description: "Develop the tools to maintain a peaceful environment at home.",
      icon: <Sparkles className="text-olive" />
    }
  ];

  return (
    <section id="training" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-olive mb-4">What You'll Learn</h2>
          <p className="text-olive/60">Comprehensive training designed to empower parents with practical, evidence-based ABA strategies.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[32px] border border-olive/5 hover:border-olive/20 transition-all bg-warm-bg/30"
            >
              <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-olive mb-3">{item.title}</h3>
              <p className="text-olive/70 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LiveDemos = () => (
  <section className="py-24 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500" 
            alt="Handwashing demo" 
            className="pill-image w-full h-64"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=500" 
            alt="Learning activity" 
            className="pill-image w-full h-64 mt-12"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-serif text-olive mb-8">Live Demonstrations</h2>
          <div className="space-y-6">
            {[
              "Handwashing & Daily Hygiene",
              "Toilet Training Strategies",
              "Prompting & Reinforcement",
              "Fading Support for Independence"
            ].map((demo, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full border border-olive/20 flex items-center justify-center group-hover:bg-olive group-hover:border-olive transition-all">
                  <CheckCircle2 size={14} className="text-olive group-hover:text-cream" />
                </div>
                <span className="text-lg text-olive/80 font-medium">{demo}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-olive rounded-[32px] text-cream">
            <p className="text-sm uppercase tracking-widest opacity-70 mb-2 font-bold">Training Fee</p>
            <p className="text-4xl font-serif">KSH 1,500</p>
            <p className="mt-4 text-sm opacity-80 leading-relaxed">
              Invest in your child's future and your own confidence as a parent.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Registration = () => (
  <section id="registration" className="py-24 bg-olive text-cream relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 border border-cream rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 border border-cream rounded-full" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Join the Workshop</h2>
          <p className="text-cream/70 text-lg mb-12 max-w-md">
            Limited spaces available to ensure personalized attention for every participant.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-cream/10 flex items-center justify-center shrink-0">
                <Calendar className="text-cream" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest opacity-60 mb-1 font-bold">Date</p>
                <p className="text-xl font-medium">18th April</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-cream/10 flex items-center justify-center shrink-0">
                <Clock className="text-cream" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest opacity-60 mb-1 font-bold">Time</p>
                <p className="text-xl font-medium">10:00 AM – 2:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-cream/10 flex items-center justify-center shrink-0">
                <MapPin className="text-cream" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest opacity-60 mb-1 font-bold">Location</p>
                <p className="text-xl font-medium">Mercy Nairobi Church</p>
                <p className="text-cream/60 text-sm mt-1">
                  Kingsway Nairobi Centre 2nd Floor, Corner of Muindi Mbingu St & University Way
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-cream text-olive p-10 rounded-[40px] shadow-2xl">
          <h3 className="text-2xl font-serif mb-6">Registration Details</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-warm-bg border border-olive/10">
              <p className="text-xs uppercase tracking-widest text-olive/50 mb-2 font-bold">Payment Method</p>
              <p className="text-lg font-semibold">Till Number: 5378024</p>
              <p className="text-sm text-olive/60">Joy Nkirote Muriuki</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-olive/70 leading-relaxed italic">
                "To register, please make the payment to the till number above and send the confirmation message to our contact."
              </p>
              <a href="https://forms.gle/7G77zrUhMwAvoFZLA" target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-olive text-cream rounded-full font-bold hover:bg-olive-light transition-all shadow-lg text-center">
                Confirm Registration
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://raw.githubusercontent.com/MMuendo/joy-muriuki/main/src/assets/joy-muriuki.jpg" 
            alt="Joy Muriuki" 
            className="rounded-[40px] w-full h-[500px] object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-cream p-6 rounded-3xl shadow-lg border border-olive/5">
            <p className="text-olive font-serif text-xl italic">"Empowering families through understanding."</p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-olive mb-6">Meet Joy Muriuki</h2>
          <p className="text-sm uppercase tracking-widest text-olive/50 mb-6 font-bold">Behavior Therapist (ABA)</p>
          <div className="space-y-6 text-olive/70 leading-relaxed">
            <p>
              Joy Muriuki is a dedicated Applied Behavior Analysis (ABA) therapist with a passion for helping children with autism reach their full potential. With years of experience in behavioral intervention, she specializes in creating personalized strategies that foster independence and positive growth.
            </p>
            <p>
              Her approach is rooted in empathy and evidence-based practices, ensuring that both the child and the family feel supported throughout the journey. This workshop is a culmination of her expertise, designed to bring professional-grade behavioral tools into the home.
            </p>
          </div>
          <div className="mt-10 flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-olive/20 flex items-center justify-center text-olive hover:bg-olive hover:text-cream transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-olive/20 flex items-center justify-center text-olive hover:bg-olive hover:text-cream transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-12 border-t border-olive/10 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-olive rounded-full flex items-center justify-center text-cream">
          <Heart size={16} />
        </div>
        <span className="font-serif text-lg font-semibold text-olive">Joy Muriuki</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 text-sm text-olive/60">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>+254 7XX XXX XXX</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>joy@example.com</span>
        </div>
      </div>
      
      <p className="text-xs text-olive/40">
        &copy; {new Date().getFullYear()} Joy Muriuki Behavioral Therapy. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <LiveDemos />
      <Registration />
      <Footer />
    </div>
  );
}
