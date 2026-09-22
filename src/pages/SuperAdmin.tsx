import React, { useState } from 'react';
import { 
  ShieldCheck, Users, Heart, FileText, CheckCircle2, 
  Search, Download, Plus, AlertCircle, Phone, Mail, 
  ExternalLink, TrendingUp, BarChart3, Globe, Lock,
  Calendar, Building2, MapPin, Eye, Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface InquiryItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'New' | 'In Review' | 'Contacted' | 'Closed';
}

interface DonationRecord {
  id: string;
  donorName: string;
  pan: string;
  amount: number;
  program: string;
  receiptNumber: string;
  date: string;
  paymentMode: string;
  status: 'Issued' | 'Pending';
}

const INITIAL_INQUIRIES: InquiryItem[] = [
  {
    id: 'INQ-1042',
    name: 'Sunita Reddy',
    email: 'sunita.reddy@techcsr.org',
    phone: '+91 98490 12345',
    subject: 'CSR Partnership - Child Education',
    message: 'We are a Hyderabad-based IT foundation looking to sponsor 5 LACIM learning centers for tribal children under our FY 24-25 CSR budget.',
    date: '2026-09-22',
    status: 'New',
  },
  {
    id: 'INQ-1041',
    name: 'Dr. Ramesh Naidu',
    email: 'ramesh.naidu@chittoorhealth.com',
    phone: '+91 94401 88990',
    subject: 'Community Health Camp Collaboration',
    message: 'Interested in partnering with CARD to organize free pediatric and eye checkup camps across Gudipala and Anupu villages.',
    date: '2026-09-21',
    status: 'In Review',
  },
  {
    id: 'INQ-1040',
    name: 'K. Venkatesh',
    email: 'kvenkat92@gmail.com',
    phone: '+91 98854 33221',
    subject: 'Field Visit & Volunteering',
    message: 'I am visiting Chittoor next weekend and would love to visit the Yanadi housing colony and understand how we can contribute construction materials.',
    date: '2026-09-20',
    status: 'Contacted',
  },
  {
    id: 'INQ-1039',
    name: 'Ananya Sharma',
    email: 'ananya.s@globalimpact.in',
    phone: '+91 97110 55432',
    subject: '80G Tax Exemption Receipt Query',
    message: 'Completed a donation of ₹25,000 for rural water borewell maintenance. Looking to receive the signed 80G receipt for IT return filing.',
    date: '2026-09-18',
    status: 'Closed',
  }
];

const INITIAL_DONATIONS: DonationRecord[] = [
  {
    id: 'DON-8841',
    donorName: 'Rajesh & Meena Kumar',
    pan: 'ABCDE1234F',
    amount: 50000,
    program: 'LACIM Child Education Center',
    receiptNumber: 'CARD/80G/2026/0412',
    date: '2026-09-21',
    paymentMode: 'UPI / Razorpay',
    status: 'Issued',
  },
  {
    id: 'DON-8840',
    donorName: 'Dr. Mohan Babu',
    pan: 'BKMPB8721K',
    amount: 25000,
    program: 'Yanadi Housing Brick Supplies',
    receiptNumber: 'CARD/80G/2026/0411',
    date: '2026-09-20',
    paymentMode: 'Net Banking',
    status: 'Issued',
  },
  {
    id: 'DON-8839',
    donorName: 'Apex Soft Technologies CSR',
    pan: 'AAACA9928M',
    amount: 500000,
    program: 'Community RO Water Plant - Gudipala',
    receiptNumber: 'CARD/80G/2026/0410',
    date: '2026-09-18',
    paymentMode: 'NEFT / Direct Bank',
    status: 'Issued',
  },
  {
    id: 'DON-8838',
    donorName: 'Kavitha Narayanan',
    pan: 'CDEPN4391L',
    amount: 15000,
    program: 'Beekeeping & Rural Livelihoods',
    receiptNumber: 'CARD/80G/2026/0409',
    date: '2026-09-15',
    paymentMode: 'UPI',
    status: 'Issued',
  }
];

export default function SuperAdmin() {
  const [activeTab, setActiveTab] = useState<'leads' | 'donations' | 'programs' | 'compliance' | 'seo'>('leads');
  const [inquiries, setInquiries] = useState<InquiryItem[]>(INITIAL_INQUIRIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleUpdateStatus = (id: string, newStatus: InquiryItem['status']) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    showNotification(`Status updated to "${newStatus}" for inquiry ${id}`);
    if (selectedInquiry?.id === id) {
      setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const filteredInquiries = inquiries.filter((inq) =>
    inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-20">
      {/* Top Admin Navigation Header */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-16 md:top-20 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-md">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-xl font-display font-bold text-white tracking-tight">
                  CARD Executive Super Admin Portal
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  LIVE SECURE
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Authorized Session: <strong>S. Ravi (Founder &amp; Director)</strong> • NGO DARPAN: AP/2017/0158245
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 border border-slate-700"
            >
              <ExternalLink size={13} /> View Live Website
            </Link>
            <button
              onClick={() => showNotification('Audit report CSV successfully generated and downloaded.')}
              className="px-3.5 py-1.5 rounded-lg bg-brand-primary hover:bg-[#D95300] text-xs font-semibold text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Download size={13} /> Export All Logs
            </button>
          </div>
        </div>
      </header>

      {/* Floating Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-emerald-400/40">
          <CheckCircle2 size={16} />
          {notification}
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-8 space-y-8">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Funds Mobilized</span>
              <Heart size={16} className="text-rose-400" />
            </div>
            <div className="text-2xl font-bold font-display text-white">₹1,48,25,000</div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-2 font-medium">
              <TrendingUp size={12} />
              <span>+18.4% YoY Growth (100% Audited)</span>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Active Beneficiaries</span>
              <Users size={16} className="text-sky-400" />
            </div>
            <div className="text-2xl font-bold font-display text-white">52,400+</div>
            <div className="text-[11px] text-slate-400 mt-2">
              Spread across 150+ Villages in Chittoor
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>80G Receipts Issued</span>
              <FileText size={16} className="text-amber-400" />
            </div>
            <div className="text-2xl font-bold font-display text-white">1,180</div>
            <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
              <CheckCircle2 size={12} /> Zero pending donor receipts
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>SEO Health &amp; Traffic</span>
              <Globe size={16} className="text-indigo-400" />
            </div>
            <div className="text-2xl font-bold font-display text-white">96 / 100</div>
            <div className="text-[11px] text-indigo-300 mt-2">
              Rank #1 in Chittoor NGO Search Queries
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          {[
            { id: 'leads', label: 'Inquiries & CSR Leads', count: inquiries.filter((i) => i.status === 'New').length },
            { id: 'donations', label: 'Donations & 80G Vault', count: INITIAL_DONATIONS.length },
            { id: 'programs', label: 'Programs & Field Hubs', count: 5 },
            { id: 'compliance', label: 'Statutory & Compliance Vault', count: '100%' },
            { id: 'seo', label: 'SEO, GEO & Analytics', count: 'Live' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-brand-primary text-white shadow-lg'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-700 text-slate-300'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* TAB 1: Inquiries & Partner Leads */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/60">
              <div className="relative w-full sm:w-80">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter inquiries by name, phone, or subject..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                />
              </div>
              <div className="text-xs text-slate-400">
                Showing {filteredInquiries.length} of {inquiries.length} incoming submissions
              </div>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/80 text-slate-400 uppercase font-mono tracking-wider border-b border-slate-700">
                    <tr>
                      <th className="py-3.5 px-4">Lead ID / Date</th>
                      <th className="py-3.5 px-4">Sender Details</th>
                      <th className="py-3.5 px-4">Subject</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60 font-sans">
                    {filteredInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-slate-800/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="font-mono text-slate-300 font-semibold">{inq.id}</span>
                          <div className="text-[10px] text-slate-500">{inq.date}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-white">{inq.name}</div>
                          <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                            <span>{inq.phone}</span> • <span>{inq.email}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-slate-200">{inq.subject}</div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 max-w-sm mt-0.5">
                            {inq.message}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              inq.status === 'New'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : inq.status === 'In Review'
                                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                                : inq.status === 'Contacted'
                                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            }`}
                          >
                            {inq.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right space-x-2">
                          <button
                            onClick={() => setSelectedInquiry(inq)}
                            className="px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors font-semibold"
                          >
                            View
                          </button>
                          <a
                            href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors font-semibold inline-block"
                          >
                            WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Selected Inquiry Modal */}
            {selectedInquiry && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
                <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
                  <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        Inquiry Details • {selectedInquiry.id}
                      </span>
                      <h3 className="text-lg font-display font-bold text-white mt-1">
                        {selectedInquiry.subject}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedInquiry(null)}
                      className="text-slate-400 hover:text-white p-1"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="bg-slate-800/60 p-3.5 rounded-xl space-y-1 text-xs text-slate-300">
                    <div><strong>From:</strong> {selectedInquiry.name}</div>
                    <div><strong>Email:</strong> {selectedInquiry.email}</div>
                    <div><strong>Phone:</strong> {selectedInquiry.phone}</div>
                    <div><strong>Submitted Date:</strong> {selectedInquiry.date}</div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-400 block mb-1">Message Content:</label>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-200 leading-relaxed max-h-48 overflow-y-auto">
                      {selectedInquiry.message}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <div className="flex gap-1.5">
                      {(['New', 'In Review', 'Contacted', 'Closed'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => handleUpdateStatus(selectedInquiry.id, st)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                            selectedInquiry.status === st
                              ? 'bg-brand-primary text-white'
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedInquiry(null)}
                      className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-slate-300"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Donations & 80G Tax Receipts */}
        {activeTab === 'donations' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/60">
              <div>
                <h3 className="text-sm font-bold text-white">Verified 80G Donor Ledger</h3>
                <p className="text-xs text-slate-400">All contributions eligible under Section 80G of Income Tax Act</p>
              </div>
              <button
                onClick={() => showNotification('80G Consolidated Donor Report (FY 2024-25) prepared.')}
                className="px-3 py-1.5 bg-brand-primary text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
              >
                <Download size={13} /> Download 10BD IT Return File
              </button>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/80 text-slate-400 uppercase font-mono tracking-wider border-b border-slate-700">
                    <tr>
                      <th className="py-3.5 px-4">Receipt Number</th>
                      <th className="py-3.5 px-4">Donor Name &amp; PAN</th>
                      <th className="py-3.5 px-4">Allocated Program</th>
                      <th className="py-3.5 px-4">Amount (INR)</th>
                      <th className="py-3.5 px-4">Payment Channel</th>
                      <th className="py-3.5 px-4 text-right">Certificate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60 font-sans">
                    {INITIAL_DONATIONS.map((don) => (
                      <tr key={don.id} className="hover:bg-slate-800/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="font-mono text-emerald-400 font-bold">{don.receiptNumber}</span>
                          <div className="text-[10px] text-slate-500">{don.date}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-white">{don.donorName}</div>
                          <div className="text-[10px] font-mono text-slate-400">PAN: {don.pan}</div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-300 font-medium">
                          {don.program}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-white">
                          ₹{don.amount.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3.5 px-4 text-slate-400">
                          {don.paymentMode}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => showNotification(`80G Receipt PDF generated for ${don.donorName}`)}
                            className="px-2.5 py-1 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 font-semibold inline-flex items-center gap-1"
                          >
                            <Download size={11} /> 80G PDF
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Program & Field Operations */}
        {activeTab === 'programs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'MGNREGS Social Audits',
                reach: '85 Gram Panchayats',
                mandal: 'G.D. Nellore & Chittoor Rural',
                lead: 'K. Munirathnam',
                status: 'Ongoing Audit Cycle',
                progress: 88,
              },
              {
                title: 'LACIM Child Supplementary Education',
                reach: '1,200 Children in 14 village centers',
                mandal: 'Gudipala & Puthalapattu',
                lead: 'S. Divya',
                status: 'Classes Active Mon-Sat',
                progress: 94,
              },
              {
                title: 'OTF / FEP Yanadi Tribal Housing',
                reach: '340 Brick houses built & occupied',
                mandal: 'Anupu & Dasarapalli Habitations',
                lead: 'S. Ravi (Director)',
                status: 'Phase 4 Infrastructure',
                progress: 80,
              },
              {
                title: 'Melania Clean Drinking Water & RO Plants',
                reach: '22 Community RO stations',
                mandal: 'Drought-prone habitations',
                lead: 'P. Balaji',
                status: 'Water Quality Tested 09/2026',
                progress: 100,
              },
              {
                title: 'Pollination & Rural Beekeeping Livelihoods',
                reach: '450 Rural families trained',
                mandal: 'Singagarapeta & Gudipala',
                lead: 'R. Damodaram',
                status: 'Honey Harvest Seasonal Batch',
                progress: 75,
              },
            ].map((p, idx) => (
              <div key={idx} className="bg-slate-800/70 border border-slate-700 rounded-2xl p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-white text-base">{p.title}</h4>
                    <p className="text-xs text-brand-primary mt-0.5">{p.reach}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {p.status}
                  </span>
                </div>
                <div className="text-xs text-slate-400 space-y-1">
                  <div><strong>Operational Sector:</strong> {p.mandal}</div>
                  <div><strong>Field Coordinator:</strong> {p.lead}</div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Program Target Fulfillment</span>
                    <span>{p.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-primary rounded-full transition-all duration-500"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: Statutory & Compliance Vault */}
        {activeTab === 'compliance' && (
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="text-base font-display font-bold text-white">Government Registrations &amp; Statutory Vault</h3>
              <p className="text-xs text-slate-400 mt-1">Verifiable legal registrations under Indian Laws and NITI Aayog</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 size={16} /> Section 80G Exemption
                </div>
                <div className="text-xs text-slate-300">
                  Income Tax Department, Gov of India. Donors get 50% rebate.
                </div>
                <div className="text-[11px] font-mono text-slate-400">Status: Permanent / Active</div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 size={16} /> Section 12A Registration
                </div>
                <div className="text-xs text-slate-300">
                  Tax-exempt charitable non-profit entity status.
                </div>
                <div className="text-[11px] font-mono text-slate-400">Status: Registered</div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 size={16} /> NITI Aayog NGO-DARPAN
                </div>
                <div className="text-xs text-slate-300">
                  Government of India Unique ID: <strong>AP/2017/0158245</strong>
                </div>
                <div className="text-[11px] font-mono text-slate-400">Portal Verified: Active</div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 size={16} /> FCRA Registration
                </div>
                <div className="text-xs text-slate-300">
                  Ministry of Home Affairs authorization for foreign contributions.
                </div>
                <div className="text-[11px] font-mono text-slate-400">Bank: SBI New Delhi Main</div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 size={16} /> MCA CSR-1 Registration
                </div>
                <div className="text-xs text-slate-300">
                  Authorized for Section 135 Corporate Social Responsibility programs.
                </div>
                <div className="text-[11px] font-mono text-slate-400">Status: CSR Eligible</div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/70 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 size={16} /> Annual Audited Accounts
                </div>
                <div className="text-xs text-slate-300">
                  Independent Chartered Accountants report FY 2023-24, FY 2022-23.
                </div>
                <div className="text-[11px] font-mono text-slate-400">Clean Unqualified Opinion</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SEO, GEO & Marketing Performance */}
        {activeTab === 'seo' && (
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="text-base font-display font-bold text-white">Search Engine Optimization &amp; Geo-Targeting</h3>
              <p className="text-xs text-slate-400 mt-1">Live visibility signals, search query rankings, and geographic audience distribution</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Keyword Performance */}
              <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-700/80 space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Top Google Search Keywords</h4>
                <div className="space-y-2 text-xs">
                  {[
                    { term: 'NGO in Chittoor Andhra Pradesh', rank: '#1', volume: '1,800/mo', ctr: '14.2%' },
                    { term: '80G Tax Exemption Donation NGO', rank: '#2', volume: '4,200/mo', ctr: '8.6%' },
                    { term: 'Yanadi Tribal Housing NGO', rank: '#1', volume: '950/mo', ctr: '19.4%' },
                    { term: 'MGNREGS Social Audit Andhra Pradesh', rank: '#1', volume: '1,400/mo', ctr: '12.0%' },
                    { term: 'Child Education Charity Chittoor', rank: '#1', volume: '1,100/mo', ctr: '11.5%' },
                  ].map((kw, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-800">
                      <div>
                        <div className="font-semibold text-white">{kw.term}</div>
                        <div className="text-[10px] text-slate-500">Search Vol: {kw.volume} • CTR: {kw.ctr}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs">
                        {kw.rank}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geographic Footprint */}
              <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-700/80 space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Audience Geo Breakdown</h4>
                <div className="space-y-3 text-xs">
                  {[
                    { region: 'Andhra Pradesh (Tirupati, Chittoor, Vijayawada)', share: 44 },
                    { region: 'Telangana (Hyderabad CSR Hubs)', share: 22 },
                    { region: 'Karnataka (Bangalore Tech Donors)', share: 18 },
                    { region: 'Tamil Nadu (Chennai Partners)', share: 10 },
                    { region: 'NRI / International Supporters', share: 6 },
                  ].map((geo, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>{geo.region}</span>
                        <span className="font-mono font-bold text-white">{geo.share}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-sky-500 rounded-full"
                          style={{ width: `${geo.share}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
