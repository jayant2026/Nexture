
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabaseClient';

interface CallbackFormProps {
  inline?: boolean;
}

const CallbackForm = ({ inline = false }: CallbackFormProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('callback_requests')
        .insert([
          {
            name,
            phone,
            created_at: new Date().toISOString(),
            status: 'pending',
            source: 'courses_page'
          }
        ]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setName('');
      setPhone('');

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={inline ? "" : "max-w-md mx-auto"}>
      {success ? (
        <div className="bg-green-100 border border-green-300 text-green-700 p-3 rounded-md">
          Thank you! Our counselor will call you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-md">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="name" className={`block ${inline ? 'text-gray-500' : 'text-gray-700'}`}>
              Your Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full ${inline ? 'bg-white/90 text-gray-900' : ''}`}
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className={`block ${inline ? 'text-gray-500' : 'text-gray-700'}`}>
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full ${inline ? 'bg-white/90 text-gray-900' : ''}`}
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
            />
          </div>
          
          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-100" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Request Callback'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default CallbackForm;
