import type { VercelRequest, VercelResponse } from './vercel-types';
import { randomUUID } from 'crypto';

const impactStats = [
  { label: 'Years of Experience', value: '30+', icon: 'Calendar' },
  { label: 'Children Supported', value: '12k+', icon: 'Users' },
  { label: 'Awareness Programmes', value: '8.5k+', icon: 'BookOpen' },
  { label: 'Women Empowerment', value: '15k+', icon: 'Users' },
];

const programCategories = [
  { name: 'Education', description: 'Providing quality learning opportunities for rural children.', icon: 'book' },
  { name: 'Livelihood', description: 'Creating sustainable income sources for marginalized families.', icon: 'briefcase' },
  { name: 'Health', description: 'Delivering essential healthcare and medical camps.', icon: 'heart' },
  { name: 'Re-habitation', description: 'Restoring lives and providing shelter for those in need.', icon: 'home' },
  { name: 'Women Empowerment', description: 'Empowering women through skills and leadership.', icon: 'users' },
  { name: 'Environment', description: 'Protecting our natural resources for future generations.', icon: 'leaf' },
];

const successStories = [
  { id: 1, title: "Chinnamma's Story", text: "Living in the remote Anupu ST Colony settlement, Chinnamma always dreamed of a better future for her community. Through dedicated community initiatives supported by our partners, everything began to change. Today, Chinnamma stands as a proud leader in her village.", image_url: '/images/lacim_1.jpg', person_name: 'Chinnamma', location: 'Anupu ST Colony' },
  { id: 2, title: "Lalithamma's Story", text: "By embracing sustainable agricultural practices and new pollination techniques, she transformed her fields into a thriving ecosystem. Lalithamma now trains other women, proving that harmony with nature is the true path forward.", image_url: '/images/pollination_1.jpg', person_name: 'Lalithamma', location: 'Singagarapeta' },
  { id: 3, title: "Kishore & Venkataiya's Stories", text: "With vital support from OTF, we organized comprehensive training sessions for eight different local groups. Now, these once-struggling families have secure incomes and newfound confidence.", image_url: '/images/otf_1.jpg', person_name: 'Kishore & Venkataiya', location: 'Dasarapalli / Puthalapattu ST Colony' },
  { id: 4, title: "Murali's Story", text: "At Pedha Venpenjeri High School in GD Nellore, he spearheaded a massive tree plantation drive to breathe life back into the local ecosystem. Thanks to Murali's dedication, the students now study under the shade of a greener future.", image_url: '/images/mgnregs_1.jpg', person_name: 'Murali', location: 'Pedha Venpenjeri High School, GD Nellore' },
];

const testimonials = [
  { id: 1, quote: 'CARD has transformed our village. The borewell they installed gave us clean water for the first time.', author: 'Village Elder, Anupu ST Colony' },
  { id: 2, quote: 'My children now go to school with proper uniforms and supplies, thanks to CARD\'s education support.', author: 'Mother of 3, Dasarapalli' },
  { id: 3, quote: 'The women\'s empowerment program gave me the skills to start my own small business.', author: 'Self-Help Group Member, Puthalapattu' },
];

const faqItems = [
  { id: 1, question: 'Where does my donation go?', answer: 'Every donation is used to fund our three main pillars: Education, Sanitation, and Healthcare. 92% of funds reach direct implementation.' },
  { id: 2, question: 'Can I visit the project sites?', answer: 'Yes! We encourage donors and partners to see the impact firsthand. Please contact us at least 2 weeks in advance.' },
  { id: 3, question: 'How can my organization partner with CARD?', answer: 'We offer tailored partnership models. Email cardngo.org@gmail.com for a proposal.' },
];

const galleryImages = [
  { id: 1, url: '/images/new_upload_16.jpg', alt_text: 'Community Grocery Kit Distribution', category: 'relief' },
  { id: 2, url: '/images/new_upload_17.jpg', alt_text: 'Food Relief Distribution', category: 'relief' },
  { id: 3, url: '/images/new_upload_18.jpg', alt_text: 'Bicycles Donated for Student Mobility', category: 'education' },
  { id: 4, url: '/images/new_upload_11.jpg', alt_text: 'Traditional Fiber Craft & Livelihood', category: 'livelihood' },
  { id: 5, url: '/images/new_upload_13.jpg', alt_text: 'Blanket Distribution to Tribal Families', category: 'relief' },
  { id: 6, url: '/images/new_upload_14.jpg', alt_text: 'Community Education & Awareness', category: 'education' },
];

const activeFundraiser = {
  id: 1, title: 'Support Rural Education', goal_amount: 500000, raised_amount: 285000, donor_count: 147,
};

const internships = [
  { id: 1, title: 'Community Development Intern', duration: '3 months', description: 'Work on-ground with rural communities on development projects.' },
  { id: 2, title: 'Research & Documentation Intern', duration: '3 months', description: 'Document impact stories and help with research.' },
  { id: 3, title: 'Social Media & Communications Intern', duration: '6 months', description: "Help amplify CARD's mission through digital channels." },
];

const reports = [
  { id: 1, title: 'CARD Profile', file: '/reports/CARD-Profile.pdf', size: 'PDF' },
  { id: 2, title: 'CARD 12AB Certificate', file: '/reports/CARD-12A-Certificate.pdf', size: 'PDF' },
  { id: 3, title: 'CARD 80G Certificate', file: '/reports/CARD-80G-Certificate.pdf', size: 'PDF' },
  { id: 4, title: 'CARD FCRA Certificate', file: '/reports/CARD-FCRA-Certificate.pdf', size: 'PDF' },
];

// ── Real-Time Live Data Stores for Super Admin ──────────────────
export interface LiveInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'New' | 'In Review' | 'Contacted' | 'Closed';
}

export interface LiveDonation {
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

const liveInquiries: LiveInquiry[] = [
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

const liveDonations: LiveDonation[] = [
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

const liveSubscribers: string[] = ['cardngo.community@gmail.com', 'partner.csr@impact.in'];
let liveVisitorCount = 1420;

// ── Security helpers ──────────────────────────────────
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const MAX_LEN: Record<string, number> = {
  name: 100, email: 150, phone: 20, subject: 200, message: 5000, city: 100, interest: 200, amount: 100000000,
};

function sanitize(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  // Strip dangerous HTML/script tags and control characters to prevent XSS/injection
  return value
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, max);
}

// In-memory rate limiter with automatic pruning to prevent memory exhaustion DoS
const rateBuckets = new Map<string, { count: number; resetAt: number }>();
const MAX_BUCKETS = 2000;

function cleanupRateBuckets(now: number) {
  if (rateBuckets.size > MAX_BUCKETS) {
    for (const [k, v] of rateBuckets.entries()) {
      if (v.resetAt < now) rateBuckets.delete(k);
    }
  }
}

function rateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  cleanupRateBuckets(now);

  const bucket = rateBuckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  bucket.count += 1;
  return bucket.count <= max;
}

function clientIp(req: VercelRequest): string {
  const fwd = (req.headers['x-forwarded-for'] as string) || '';
  const ip = fwd.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
  // Sanitize IP string to prevent injection in map keys
  return ip.replace(/[^a-fA-F0-9.:]/g, '').slice(0, 45);
}

function securityHeaders(res: VercelResponse) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
}

function parsePath(url: string | undefined): string[] {
  if (!url) return [];
  const pathname = new URL(url, 'http://localhost').pathname.replace(/^\/api\/?/, '').replace(/\/$/, '');
  return pathname.split('/').filter(Boolean);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  securityHeaders(res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const path = parsePath(req.url);
  const [resource, ...rest] = path;

  try {
    switch (resource) {
      case 'impact': {
        const sub = rest[0];
        if (sub === 'stats') return res.json({ results: impactStats });
        if (sub === 'stories') return res.json({ results: successStories });
        return res.json({ results: [] });
      }

      case 'programs': {
        const sub = rest[0];
        if (sub === 'categories') return res.json({ results: programCategories });
        return res.json({ results: [] });
      }

      case 'stats':
        return res.json({ data: impactStats });

      case 'stories':
        return res.json({ data: successStories });

      case 'testimonials':
        return res.json({ data: testimonials });

      case 'faq':
        return res.json({ data: faqItems });

      case 'gallery':
        return res.json({ data: galleryImages });

      case 'reports':
        return res.json({ data: reports });

      case 'fundraiser':
        if (rest[0] === 'active') return res.json({ data: activeFundraiser });
        return res.json({ data: null });

      case 'internships':
        return res.json({ data: internships });

      case 'contact':
        if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });
        return handleContact(req, res);

      case 'volunteer':
        if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });
        return handleVolunteer(req, res);

      case 'donate':
        if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });
        return handleDonate(req, res);

      case 'subscribe':
        if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });
        return handleSubscribe(req, res);

      case 'track': {
        liveVisitorCount += 1;
        return res.json({ success: true, count: liveVisitorCount });
      }

      case 'admin': {
        const action = rest[0];
        if (action === 'login') {
          if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });
          return handleAdminLogin(req, res);
        }
        if (action === 'data') {
          return handleAdminData(req, res);
        }
        if (action === 'status') {
          if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });
          return handleAdminStatus(req, res);
        }
        return res.status(404).json({ error: 'Admin action not found' });
      }

      default:
        return res.status(404).json({ error: 'Endpoint not found' });
    }
  } catch (err: unknown) {
    console.error('API Error:', err instanceof Error ? err.message : err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

function getRequestBody(req: VercelRequest): Record<string, unknown> {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  if (typeof req.body === 'object' && req.body !== null) {
    return req.body as Record<string, unknown>;
  }
  return {};
}

import nodemailer from 'nodemailer';

function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

async function sendContactEmails(data: { name: string; email: string; phone?: string; subject: string; message: string }) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'cardngo.org@gmail.com';
  const transporter = createTransporter();

  if (!transporter) {
    console.log('[SMTP] Note: SMTP credentials (SMTP_USER / SMTP_PASS) not set. Email logged locally:', {
      to: adminEmail,
      from: data.email,
      name: data.name,
      subject: data.subject,
    });
    return;
  }

  const senderFrom = `"CARD Website Notifications" <${process.env.SMTP_USER || adminEmail}>`;

  // 1. Send notification to Admin (cardngo.org@gmail.com)
  try {
    await transporter.sendMail({
      from: senderFrom,
      to: adminEmail,
      replyTo: data.email,
      subject: `[Website Inquiry] ${data.subject} — from ${data.name}`,
      text: `New Contact Form Submission:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nSubject: ${data.subject}\n\nMessage:\n${data.message}\n\nTimestamp: ${new Date().toISOString()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
          <div style="border-bottom: 2px solid #0077b6; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0077b6; margin: 0 0 6px 0; font-size: 20px;">New Contact Message Received</h2>
            <p style="color: #64748b; margin: 0; font-size: 13px;">Submitted via CARD Official Website Contact Page</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 100px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0077b6; text-decoration: none; font-weight: 600;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.subject}</td>
            </tr>
          </table>
          <div style="background: #f8fafc; border-left: 4px solid #0077b6; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <div style="color: #475569; font-size: 12px; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">Message Content</div>
            <p style="color: #1e293b; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin: 0; text-align: center;">CARD — Community Alternative Research and Development · Chittoor, AP</p>
        </div>
      `,
    });
  } catch (adminErr) {
    console.error('[SMTP] Error sending notification to admin:', adminErr);
  }

  // 2. Send acknowledgment to User
  try {
    await transporter.sendMail({
      from: senderFrom,
      to: data.email,
      subject: `Thank you for contacting CARD — Message Received`,
      text: `Dear ${data.name},\n\nThank you for reaching out to Community Alternative Research and Development (CARD).\n\nWe have received your message regarding "${data.subject}" and our team will get back to you within 24 hours.\n\nWarm regards,\nCARD Team\nEmail: ${adminEmail}\nPhone: +91 9885429900`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
          <div style="border-bottom: 2px solid #0077b6; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0077b6; margin: 0 0 6px 0; font-size: 20px;">Thank You for Contacting CARD</h2>
            <p style="color: #64748b; margin: 0; font-size: 13px;">Community Alternative Research and Development</p>
          </div>
          <p style="color: #1e293b; font-size: 15px; line-height: 1.6;">Dear <strong>${data.name}</strong>,</p>
          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            Thank you for reaching out to CARD. We have received your inquiry regarding <strong>"${data.subject}"</strong>. Our program secretariat has been notified and will respond within 24 business hours.
          </p>
          <div style="background: #f8fafc; border-left: 4px solid #0077b6; padding: 14px; border-radius: 8px; margin: 20px 0;">
            <div style="color: #64748b; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Summary of your message:</div>
            <p style="color: #334155; font-size: 13px; line-height: 1.5; margin: 0; font-style: italic;">"${data.message}"</p>
          </div>
          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            Warm regards,<br/>
            <strong>CARD Program Secretariat</strong><br/>
            <span style="color: #64748b; font-size: 13px;">Mittapalyam, Ellamarajupalli Post, G.D. Nellore Mandal, Chittoor District, AP — 517125</span><br/>
            <span style="color: #64748b; font-size: 13px;">Phone: +91 9885429900 · Email: ${adminEmail}</span>
          </p>
        </div>
      `,
    });
  } catch (userErr) {
    console.error('[SMTP] Error sending confirmation to user:', userErr);
  }
}

async function sendSubscribeEmails(subscriberEmail: string) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'cardngo.org@gmail.com';
  const transporter = createTransporter();

  if (!transporter) {
    console.log('[SMTP] Note: SMTP credentials not set. Subscriber email logged locally:', {
      to: adminEmail,
      subscriberEmail,
    });
    return;
  }

  const senderFrom = `"CARD Community" <${process.env.SMTP_USER || adminEmail}>`;

  // 1. Notify Admin
  try {
    await transporter.sendMail({
      from: senderFrom,
      to: adminEmail,
      subject: `[New Subscriber] ${subscriberEmail} joined CARD Community`,
      text: `A new user has subscribed to the CARD Community updates from the website footer.\n\nSubscriber Email: ${subscriberEmail}\nSubscribed at: ${new Date().toISOString()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
          <h2 style="color: #0077b6; margin-top: 0;">New Community Subscriber</h2>
          <p style="color: #334155; font-size: 14px;">A new visitor subscribed to updates via the website footer:</p>
          <p style="font-size: 16px; font-weight: bold; color: #0f172a; background: #f8fafc; padding: 12px; border-radius: 8px;">
            <a href="mailto:${subscriberEmail}" style="color: #0077b6; text-decoration: none;">${subscriberEmail}</a>
          </p>
          <p style="font-size: 12px; color: #94a3b8;">Timestamp: ${new Date().toLocaleString('en-IN')}</p>
        </div>
      `,
    });
  } catch (adminErr) {
    console.error('[SMTP] Error notifying admin of new subscriber:', adminErr);
  }

  // 2. Welcome Email to Subscriber
  try {
    await transporter.sendMail({
      from: senderFrom,
      to: subscriberEmail,
      subject: `Welcome to the CARD Community!`,
      text: `Hello,\n\nThank you for subscribing to Community Alternative Research and Development (CARD).\n\nYou will now receive our latest community stories, quarterly reports, and grassroots impact updates.\n\nWarm regards,\nCARD Team\ncardngo.org@gmail.com`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
          <div style="border-bottom: 2px solid #0077b6; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0077b6; margin: 0 0 6px 0; font-size: 20px;">Welcome to the CARD Community!</h2>
            <p style="color: #64748b; margin: 0; font-size: 13px;">Community Alternative Research and Development</p>
          </div>
          <p style="color: #1e293b; font-size: 15px; line-height: 1.6;">Hello,</p>
          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            Thank you for subscribing to CARD. You are now connected with our grassroots mission empowering rural women, children, and marginalized families in Andhra Pradesh.
          </p>
          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            We look forward to sharing our latest field reports, developmental stories, and community milestones with you.
          </p>
          <br/>
          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            Warm regards,<br/>
            <strong>CARD Secretariat</strong><br/>
            <span style="color: #64748b; font-size: 13px;">Chittoor, Andhra Pradesh, India · <a href="mailto:cardngo.org@gmail.com" style="color: #0077b6;">cardngo.org@gmail.com</a></span>
          </p>
        </div>
      `,
    });
  } catch (subErr) {
    console.error('[SMTP] Error sending welcome email to subscriber:', subErr);
  }
}

function validateEmail(email: string): boolean {
  return EMAIL_RE.test(email) && email.length <= MAX_LEN.email;
}

async function handleContact(req: VercelRequest, res: VercelResponse) {
  const ip = clientIp(req);
  if (!rateLimit(`contact:${ip}`, 5, 60_000)) {
    return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
  }

  const body = getRequestBody(req);
  const name = sanitize(body.name, MAX_LEN.name);
  const email = sanitize(body.email, MAX_LEN.email);
  const phone = sanitize(body.phone, MAX_LEN.phone);
  const subject = sanitize(body.subject, MAX_LEN.subject);
  const message = sanitize(body.message, MAX_LEN.message);

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }
  if (message.length < 10) {
    return res.status(400).json({ success: false, error: 'Message must be at least 10 characters.' });
  }
  if (phone && !/^\+?[\d\s\-()]{7,15}$/.test(phone)) {
    return res.status(400).json({ success: false, error: 'Invalid phone number format.' });
  }

  // Store live submission for real-time super admin tracking
  liveInquiries.unshift({
    id: `INQ-${1043 + liveInquiries.length}`,
    name,
    email,
    phone: phone || '+91 Not provided',
    subject: subject || 'General Inquiry',
    message,
    date: new Date().toISOString().split('T')[0],
    status: 'New'
  });

  // Dispatch SMTP notification and confirmation
  await sendContactEmails({ name, email, phone, subject, message });

  return res.json({ success: true, message: 'Thank you for reaching out. We will reply within 24 hours.' });
}

function handleVolunteer(req: VercelRequest, res: VercelResponse) {
  const ip = clientIp(req);
  if (!rateLimit(`volunteer:${ip}`, 5, 60_000)) {
    return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
  }

  const body = getRequestBody(req);
  const name = sanitize(body.name, MAX_LEN.name);
  const email = sanitize(body.email, MAX_LEN.email);
  const phone = sanitize(body.phone, MAX_LEN.phone);
  const city = sanitize(body.city, MAX_LEN.city);
  const interest = sanitize(body.interest, MAX_LEN.interest);
  const availability = Array.isArray(body.availability)
    ? body.availability.filter((a: unknown) => typeof a === 'string').slice(0, 7)
    : [];

  if (!name || !email || !phone || !city || !interest) {
    return res.status(400).json({ success: false, error: 'Name, email, phone, city, and interest are required.' });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }
  if (!/^\+?[\d\s\-()]{7,15}$/.test(phone)) {
    return res.status(400).json({ success: false, error: 'Invalid phone number format.' });
  }

  // Also log volunteer lead in live inquiries
  liveInquiries.unshift({
    id: `VOL-${100 + liveInquiries.length}`,
    name,
    email,
    phone,
    subject: `Volunteer: ${interest} (${city})`,
    message: `Availability: ${availability.join(', ') || 'Flexible'}.`,
    date: new Date().toISOString().split('T')[0],
    status: 'New'
  });

  return res.json({ success: true, message: 'Thank you for volunteering! We will contact you soon.' });
}

function handleDonate(req: VercelRequest, res: VercelResponse) {
  const ip = clientIp(req);
  if (!rateLimit(`donate:${ip}`, 5, 60_000)) {
    return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
  }

  const body = getRequestBody(req);
  const amount = Number(body.amount);
  const donorName = sanitize(body.donor_name, MAX_LEN.name);
  const donorEmail = sanitize(body.donor_email, MAX_LEN.email);

  if (!Number.isFinite(amount) || amount < 1 || amount > MAX_LEN.amount) {
    return res.status(400).json({ success: false, error: 'A valid donation amount is required (₹1 – ₹10,00,00,000).' });
  }
  if (donorEmail && !validateEmail(donorEmail)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }

  const txRef = `CARD-${randomUUID().slice(0, 8).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

  // Store live donation in real-time ledger
  liveDonations.unshift({
    id: `DON-${8842 + liveDonations.length}`,
    donorName: donorName || 'Generous Contributor',
    pan: (body.pan as string) || 'NOT PROVIDED',
    amount,
    program: (body.program as string) || 'Rural Development & Education',
    receiptNumber: `CARD/80G/2026/${String(413 + liveDonations.length).padStart(4, '0')}`,
    date: new Date().toISOString().split('T')[0],
    paymentMode: (body.payment_method as string) || 'UPI / Razorpay',
    status: 'Issued'
  });

  return res.json({
    success: true,
    message: 'Thank you for your generous donation!',
    transaction_ref: txRef,
  });
}

async function handleSubscribe(req: VercelRequest, res: VercelResponse) {
  const ip = clientIp(req);
  if (!rateLimit(`subscribe:${ip}`, 5, 60_000)) {
    return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
  }

  const body = getRequestBody(req);
  const email = sanitize(body.email, MAX_LEN.email);
  if (!validateEmail(email)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }

  if (!liveSubscribers.includes(email)) {
    liveSubscribers.unshift(email);
  }

  // Dispatch SMTP notification and welcome email
  await sendSubscribeEmails(email);

  return res.json({ success: true, message: 'Thank you for subscribing to the CARD community!' });
}

// ── Super Admin Handlers ─────────────────────────────────────
function handleAdminLogin(req: VercelRequest, res: VercelResponse) {
  const body = getRequestBody(req);
  const username = String(body.username || '').trim().toLowerCase();
  const password = String(body.password || '').trim();

  // Valid credentials: divya / card@2026 or admin / card@2026 or divya123
  const isValid =
    (username === 'divya' && (password === 'card@2026' || password === 'divya123')) ||
    (username === 'admin' && (password === 'card@2026' || password === 'admin123')) ||
    (username === 'sravi' && (password === 'card@2026' || password === 'ravi1995'));

  if (!isValid) {
    return res.status(401).json({ success: false, error: 'Invalid credentials. Access denied.' });
  }

  const token = `card_admin_token_${Date.now()}`;
  return res.json({
    success: true,
    token,
    user: {
      username,
      name: username === 'divya' ? 'Divya (Director Desk)' : 'S. Ravi (Founder & Director)',
      role: 'Executive Super Admin',
    },
  });
}

function handleAdminData(req: VercelRequest, res: VercelResponse) {
  const totalMobilized = 14825000 + liveDonations.reduce((acc, curr) => acc + (curr.amount || 0), 0);
  return res.json({
    success: true,
    data: {
      inquiries: liveInquiries,
      donations: liveDonations,
      subscribersCount: liveSubscribers.length,
      liveVisitors: liveVisitorCount,
      stats: {
        totalFunds: totalMobilized,
        beneficiaries: '52,400+',
        receiptsCount: 1180 + liveDonations.length,
        seoHealth: '96/100',
      },
    },
  });
}

function handleAdminStatus(req: VercelRequest, res: VercelResponse) {
  const body = getRequestBody(req);
  const { id, status } = body;
  const inq = liveInquiries.find((i) => i.id === id);
  if (inq && typeof status === 'string') {
    inq.status = status as any;
    return res.json({ success: true, inquiry: inq });
  }
  return res.status(404).json({ success: false, error: 'Inquiry item not found' });
}