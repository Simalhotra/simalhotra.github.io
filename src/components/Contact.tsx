import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:malhotrasimran2000@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'malhotrasimran2000@gmail.com',
      link: 'mailto:malhotrasimran2000@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Urbana-Champaign, IL',
      link: '', // no link, renders a <div>
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-indigo-600 text-[36px] font-bold">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6 text-foreground">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info) =>
                info.link ? (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                    aria-label={info.label}
                    title={info.value}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-500">{info.label}</div>
                      <div className="text-gray-900">{info.value}</div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow group"
                    aria-label={info.label}
                    title={info.value}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-500">{info.label}</div>
                      <div className="text-gray-900">{info.value}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    style={{ color: 'black' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    style={{ color: 'black' }}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-input-background border-gray-300 text-black"
                    style={{ color: 'black' }}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-input-background border-gray-300 text-black"
                    style={{ color: 'black' }}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
