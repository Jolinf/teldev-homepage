import React from 'react';
// import Image from 'next/image'; // Or use <img> if not using Next.js
import helpdesk from '../../assets/whatweoffer illustrations/whatweoffer-helpdesk-illustration.svg';
import network from '../../assets/whatweoffer illustrations/whatweoffer-network-illustration.svg';
import webdev from '../../assets/whatweoffer illustrations/whatweoffer-app&webdev-illustrations.svg';
import cloud from '../../assets/whatweoffer illustrations/whatweoffer-cloud-illustrations.svg';
import itconsulting from '../../assets/whatweoffer illustrations/whatweoffer-itconsulting-illustration.svg';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="box-border bg-black text-white px-[10%] pb-[8%]">
      <h2 className="text-[#FFFFFF] mb-[8%]" style={{ fontFamily: 'Poppins, sans-serif' }}>
        What we offer
      </h2>
      <div className="grid grid-cols-2 box-border no-underline gap-[5%] mb-[5%] ">
        <Link to="/Helpdesk" className="no-underline">
          <div className="p-[5%] border-[3px] border-[#0F1729] rounded-[10px] overflow-hidden shadow-md relative group transition duration-300 transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:border-[#1C6CFE]">
            <img src={helpdesk} alt="helpdesk-image" className="w-full" />
            <h3 className="text-left text-[#1C6CFE]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Helpdesk Support
            </h3>
            <p
              className="text-left text-[1.3em] text-[#FFFFFF]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Your first stop for swift and reliable IT help. From device issues to email setup, we
              offer step-by-step guidance to keep your business running smoothly. We're here to
              troubleshoot, resolve, and support—every step of the way.
            </p>
          </div>
        </Link>

        {/* Network */}
        <div className="p-[5%] border-[3px] border-[#0F1729] rounded-[10px] overflow-hidden shadow-md relative group transition duration-300 transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:border-[#1C6CFE] ">
          <img src={network} alt="helpdesk-image" className="w-full" />
          <h3 className="text-left text-[#1C6CFE]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Network and Infrastructure
          </h3>
          <p
            className="text-left text-[1.3em] text-[#FFFFFF]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Strong infrastructure is the backbone of a modern business. We design, monitor, and
            secure your network for maximum uptime and performance.From setup to maintenance, we
            make sure your systems work flawlessly.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 box-border gap-[5%] mb-[5%] ">
        {/* app and web dev */}
        <div className="p-[5%] border-[3px] border-[#0F1729] rounded-[10px] overflow-hidden shadow-md relative group transition duration-300 transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:border-[#1C6CFE]">
          <img src={webdev} alt="helpdesk-image" className="w-full h-[70%]" />
          <h3 className="text-left text-[#1C6CFE]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Application and Website Development
          </h3>
          <p
            className="text-left text-[1.3em] text-[#FFFFFF]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            We build and manage applications and websites tailored to your goals. From development
            to optimization, we handle it all. Keep your online presence fast, functional, and
            secure—with zero hassle.
          </p>
        </div>
        {/* cloud services */}
        <div className="p-[5%] border-[3px] border-[#0F1729] rounded-[10px] overflow-hidden shadow-md relative group transition duration-300 transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:border-[#1C6CFE]">
          <img src={cloud} alt="helpdesk-image" className="w-full" />
          <h3 className="text-left text-[#1C6CFE]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Cloud Services
          </h3>
          <p
            className="text-left text-[1.3em] text-[#FFFFFF]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Move your business to the cloud with confidence. We help with secure migration, storage,
            and disaster recovery strategies. Scale easily, access data from anywhere, and stay
            protected 24/7.
          </p>
        </div>
      </div>

      {/* it consulting */}
      <div className="grid grid-cols-1 justify-items-center">
        <div className="p-[5%] border-[3px] border-[#0F1729] rounded-[10px] w-[38%] overflow-hidden shadow-md relative group transition duration-300 transform hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:border-[#1C6CFE]">
          <img src={itconsulting} alt="helpdesk-image" className="w-full" />
          <h3 className="text-left text-[#1C6CFE]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            IT Consulting
          </h3>
          <p
            className="text-left text-[1.3em] text-[#FFFFFF]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get expert guidance on your IT strategy. We analyze your needs, recommend solutions, and
            help you make informed decisions about technology investments and digital
            transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
