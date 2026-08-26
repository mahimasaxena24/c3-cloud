import { useState, type ReactNode } from 'react';
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface BaseField {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const INITIAL: BaseField = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const SERVICE_OPTIONS = [
  'Cloud Server & VPS',
  'Dedicated Servers',
  'Virtual Machines',
  'Tally / ERP on Cloud',
  'Zimbra Email Hosting',
  'cPanel / Plesk Hosting',
  'TSplus Remote Desktop',
  'Backup & Disaster Recovery',
  'Firewall & Cyber Security',
  'Managed IT Services',
  'Other',
];

interface EnquiryFormProps {
  formType?: 'enquiry' | 'contact';
  defaultService?: string;
  title?: string;
  description?: string;
  compact?: boolean;
}

export default function EnquiryForm({
  formType = 'enquiry',
  defaultService = '',
  title,
  description,
  compact = false,
}: EnquiryFormProps) {
  const [form, setForm] = useState<BaseField>(INITIAL);
  const [service, setService] = useState(defaultService);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('enquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        company: form.company || null,
        service: service || null,
        message: form.message,
        form_type: formType,
      });

      if (error) throw error;
      setStatus('success');
      setForm(INITIAL);
      setService('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`rounded-2xl border border-emerald-200 bg-emerald-50 ${compact ? 'p-6' : 'p-8'} text-center`}>
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-lg font-bold text-navy-900">Thank you for reaching out!</h3>
        <p className="mt-2 text-sm text-navy-600">
          We've received your {formType === 'contact' ? 'message' : 'enquiry'} and our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <FormShell title={title} description={description} compact={compact}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Full Name"
            required
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            placeholder="John Doe"
          />
          <Field
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            placeholder="john@company.com"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Phone"
            value={form.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
            placeholder="+91 98765 43210"
          />
          <Field
            label="Company"
            value={form.company}
            onChange={(v) => setForm({ ...form, company: v })}
            placeholder="Your company"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700">
            Requirement
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Select a service (optional)</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={compact ? 3 : 4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your requirements..."
            className="w-full resize-none rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-blue mt-1 disabled:opacity-60"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              {formType === 'contact' ? 'Send Enquiry' : 'Submit Enquiry'}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </FormShell>
  );
}

function FormShell({
  title,
  description,
  compact,
  children,
}: {
  title?: string;
  description?: string;
  compact?: boolean;
  children: ReactNode;
}) {
  if (!title) return <div>{children}</div>;
  return (
    <div className={`rounded-2xl border border-navy-100 bg-white shadow-sm ${compact ? 'p-6' : 'p-7 sm:p-8'}`}>
      <h3 className="text-xl font-bold text-navy-900">{title}</h3>
      {description && <p className="mt-2 text-sm text-navy-500">{description}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Field({
  label,
  type = 'text',
  required,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      />
    </div>
  );
}
