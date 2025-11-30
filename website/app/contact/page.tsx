import { ContactForm } from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact CANNHEAL - Get in Touch',
  description:
    'Contact CANNHEAL for product questions, wholesale inquiries, or customer support. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-text-secondary">
            We're here to help with any questions about our products, wholesale programs, or
            general inquiries. We typically respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Email</h3>
                  <a
                    href="mailto:info@cannheal.com"
                    className="text-primary hover:underline"
                  >
                    info@cannheal.com
                  </a>
                  <p className="text-sm text-text-secondary mt-1">
                    For general inquiries
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">
                    Wholesale Inquiries
                  </h3>
                  <a
                    href="mailto:wholesale@cannheal.com"
                    className="text-primary hover:underline"
                  >
                    wholesale@cannheal.com
                  </a>
                  <p className="text-sm text-text-secondary mt-1">
                    For retail and vet partners
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Phone</h3>
                  <a href="tel:+15551234567" className="text-primary hover:underline">
                    (555) 123-4567
                  </a>
                  <p className="text-sm text-text-secondary mt-1">
                    Mon-Fri, 9am-5pm CT
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Address</h3>
                  <p className="text-text-secondary">
                    CANNHEAL Manufacturing
                    <br />
                    123 Hemp Street
                    <br />
                    Austin, TX 78701
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Business Hours</h3>
                  <div className="text-text-secondary text-sm space-y-1">
                    <p>Monday - Friday: 9:00am - 5:00pm CT</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6">
              <h3 className="font-bold text-text-primary mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/wholesale"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    → Apply for Wholesale Account
                  </a>
                </li>
                <li>
                  <a
                    href="/for-veterinarians#request-samples"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    → Request Vet Samples
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    → Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a
                    href="/lab-results"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    → View Lab Results
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Additional Help */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Other Ways We Can Help
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Product Questions</h3>
                <p className="text-sm text-text-secondary">
                  Need help choosing the right product for your pet? Our team can guide you
                  through our product line and dosing recommendations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Order Support</h3>
                <p className="text-sm text-text-secondary">
                  Questions about your order, shipping, or returns? We're here to make sure
                  you're completely satisfied.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">Partnership Opportunities</h3>
                <p className="text-sm text-text-secondary">
                  Interested in carrying CANNHEAL products in your store or practice? Let's
                  discuss wholesale pricing and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
