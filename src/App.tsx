import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CloudVpsPage from '@/pages/CloudVpsPage';
import BusinessSolutionsPage from '@/pages/BusinessSolutionsPage';
import HostingPage from '@/pages/HostingPage';
import SecurityBackupPage from '@/pages/SecurityBackupPage';
import InfrastructurePage from '@/pages/InfrastructurePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import LegalPage from '@/pages/LegalPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function MetaManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta: Record<string, { title: string; desc: string }> = {
      '/': {
        title: 'C3 Cloud | Cloud, Data Center & Managed IT Infrastructure',
        desc: 'Access your applications, data and infrastructure securely from anywhere. Cloud servers, VPS, dedicated infrastructure and managed IT solutions.',
      },
      '/cloud-vps': {
        title: 'C3 Cloud VPS & Cloud Servers | Scalable Cloud Infrastructure',
        desc: 'Cloud server and VPS solutions with scalable compute, high-performance storage and managed cloud infrastructure for business and developer workloads.',
      },
      '/business-solutions': {
        title: 'C3 Cloud Business Solutions | Tally, BUSY, Marg ERP & CRM',
        desc: 'Host Tally, BUSY, Marg ERP and CRM on secure cloud infrastructure. Access your business applications from anywhere, on any device.',
      },
      '/hosting': {
        title: 'C3 Cloud Hosting | cPanel, Plesk, Zimbra & TSplus',
        desc: 'Web hosting, email hosting and remote desktop solutions. cPanel, Plesk, Zimbra and TSplus hosting for businesses.',
      },
      '/security-backup': {
        title: 'C3 Cloud Security & Backup | Cyber Security & Disaster Recovery',
        desc: 'Firewall, cyber security, backup and disaster recovery solutions. Protect your infrastructure at every layer.',
      },
      '/infrastructure': {
        title: 'C3 Cloud Infrastructure | Dedicated Servers & Managed IT',
        desc: 'Dedicated servers, virtual machines, DevOps and managed IT services. Build custom infrastructure around your business.',
      },
      '/about': {
        title: 'About C3 Cloud | Cloud & IT Infrastructure',
        desc: 'C3 Cloud is a cloud, data center and managed IT infrastructure provider focused on reliable, secure and scalable technology solutions for businesses.',
      },
      '/contact': {
        title: 'Contact C3 Cloud | Cloud & IT Infrastructure Solutions',
        desc: 'Contact C3 Cloud for cloud servers, VPS, dedicated infrastructure, business solutions, hosting and managed IT services.',
      },
      '/legal': {
        title: 'Legal | C3 Cloud',
        desc: 'Privacy policy, terms and conditions, and legal agreements for C3 Cloud services.',
      },
    };
    const info = meta[pathname] || meta['/'];
    document.title = info.title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    const setOG = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', info.desc);
    setOG('og:title', info.title);
    setOG('og:description', info.desc);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MetaManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cloud-vps" element={<CloudVpsPage />} />
          <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
          <Route path="/hosting" element={<HostingPage />} />
          <Route path="/security-backup" element={<SecurityBackupPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
