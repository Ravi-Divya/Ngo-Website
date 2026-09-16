/**
 * API client for communicating with the CARD backend.
 * All frontend components should use these functions instead of hardcoded data.
 */

const API_BASE = '/api';

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  return json.data;
}

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.error || `API error: ${res.status}`);
  }
  return json;
}

// ── Content APIs ────────────────────────────────────────

export interface Stat {
  key: string;
  value: string;
  label: string;
  icon: string;
  display_order: number;
}

export interface Story {
  id: number;
  title: string;
  text: string;
  image_url: string;
  person_name: string;
  location: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt_text: string;
  category: string;
}

export interface Fundraiser {
  id: number;
  title: string;
  goal_amount: number;
  raised_amount: number;
  donor_count: number;
}

export interface Internship {
  id: number;
  title: string;
  duration: string;
  description: string;
}

export const api = {
  getStats: () => fetchJson<Stat[]>('/stats'),
  getStories: () => fetchJson<Story[]>('/stories'),
  getTestimonials: () => fetchJson<Testimonial[]>('/testimonials'),
  getFaq: () => fetchJson<FaqItem[]>('/faq'),
  getGallery: () => fetchJson<GalleryImage[]>('/gallery'),
  getFundraiser: () => fetchJson<Fundraiser>('/fundraiser/active'),
  getInternships: () => fetchJson<Internship[]>('/internships'),

  submitContact: (data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => postJson<{ success: boolean; message: string }>('/contact', data),

  submitVolunteer: (data: {
    name: string;
    email: string;
    phone: string;
    city: string;
    interest: string;
    availability: string[];
    message?: string;
  }) => postJson<{ success: boolean; message: string }>('/volunteer', data),

  submitDonation: (data: {
    amount: number;
    payment_method: string;
    donor_name?: string;
    donor_email?: string;
  }) => postJson<{ success: boolean; message: string; transaction_ref: string }>('/donate', data),
};
