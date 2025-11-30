import { VetSampleRequestForm } from '@/components/vet/VetSampleRequestForm'
import {
  Award,
  BookOpen,
  FileText,
  Microscope,
  Shield,
  Users,
  CheckCircle,
  TrendingUp,
} from 'lucide-react'

export const metadata = {
  title: 'For Veterinarians - CANNHEAL CBD Products',
  description:
    'Evidence-based CBD products for veterinary professionals. Request free samples, access research, and learn about CBD for pet health.',
}

export default function ForVeterinariansPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Veterinarians</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Evidence-based CBD products you can trust for your patients. Request free
            samples and access research-backed information.
          </p>
        </div>
      </div>

      {/* Why Veterinarians Choose CANNHEAL */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Why Veterinarians Choose CANNHEAL
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Partner with a manufacturer that prioritizes science, safety, and transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <Microscope className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">
              Third-Party Lab Tested
            </h3>
            <p className="text-sm text-text-secondary">
              Every batch is tested by ISO-certified independent labs for potency, purity,
              and safety. COAs are publicly accessible via batch-specific QR codes.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">
              100% THC-Free Verified
            </h3>
            <p className="text-sm text-text-secondary">
              Guaranteed 0.0% THC in every product. Safe for all pets with no risk of
              psychoactive effects or failed drug tests.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">
              Texas DSHS Licensed
            </h3>
            <p className="text-sm text-text-secondary">
              Fully licensed manufacturer and distributor in Texas. We handle all compliance
              and regulatory requirements.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <FileText className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">
              Transparent Sourcing
            </h3>
            <p className="text-sm text-text-secondary">
              Organic, US-grown hemp extracted using CO2 (not chemical solvents). Full
              ingredient transparency and traceability.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <BookOpen className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">
              Evidence-Based Formulations
            </h3>
            <p className="text-sm text-text-secondary">
              Formulations based on published veterinary research and recommended dosing
              guidelines for different conditions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-bold text-lg text-text-primary mb-2">
              Professional Support
            </h3>
            <p className="text-sm text-text-secondary">
              Dedicated veterinary liaison team to answer questions and provide ongoing
              product education and support.
            </p>
          </div>
        </div>

        {/* Research & Education */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Research & Education
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Stay informed with the latest veterinary CBD research and clinical applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl text-text-primary mb-4">
                Common Clinical Applications
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      Osteoarthritis & Joint Pain
                    </span>
                    <p className="text-sm">
                      CBD may help reduce inflammation and improve mobility in dogs with
                      osteoarthritis (Gamble et al., 2018)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      Anxiety & Stress
                    </span>
                    <p className="text-sm">
                      May help reduce anxiety-related behaviors including separation anxiety
                      and noise phobias
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      Seizure Management
                    </span>
                    <p className="text-sm">
                      Adjunct therapy for dogs with idiopathic epilepsy (McGrath et al.,
                      2019)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      Inflammatory Conditions
                    </span>
                    <p className="text-sm">
                      May help reduce inflammation in IBD, dermatitis, and other conditions
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-text-primary mb-4">
                Dosing Guidelines
              </h3>
              <div className="bg-primary/5 rounded-lg p-6 mb-4">
                <p className="text-sm text-text-secondary mb-4">
                  General veterinary consensus recommends:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary">•</span>
                    <div>
                      <p className="font-semibold text-text-primary">Starting Dose</p>
                      <p className="text-sm text-text-secondary">
                        0.2 mg CBD per kg body weight, twice daily
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary">•</span>
                    <div>
                      <p className="font-semibold text-text-primary">Therapeutic Range</p>
                      <p className="text-sm text-text-secondary">
                        0.2-0.5 mg/kg twice daily for most conditions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary">•</span>
                    <div>
                      <p className="font-semibold text-text-primary">Titration</p>
                      <p className="text-sm text-text-secondary">
                        Increase gradually every 3-5 days based on clinical response
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-text-secondary italic">
                All CANNHEAL product pages include an interactive dosing calculator to help
                clients determine appropriate serving sizes.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-accent/10 border-2 border-accent rounded-lg">
            <h3 className="font-bold text-text-primary mb-3">
              Key Research References
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                • Gamble LJ, et al. (2018). "Pharmacokinetics, Safety, and Clinical Efficacy
                of Cannabidiol Treatment in Osteoarthritic Dogs." <em>Frontiers in
                Veterinary Science</em>
              </li>
              <li>
                • McGrath S, et al. (2019). "Randomized blinded controlled clinical trial
                to assess the effect of oral cannabidiol administration in addition to
                conventional antiepileptic treatment on seizure frequency in dogs with
                intractable idiopathic epilepsy." <em>Journal of the American Veterinary
                Medical Association</em>
              </li>
              <li>
                • Vaughn D, et al. (2020). "Cannabidiol (CBD) use in dogs with
                osteoarthritis." <em>International Journal of Pharmaceutical Sciences</em>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits for Your Practice */}
        <div className="bg-primary text-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Benefits for Your Practice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Additional Revenue Stream</h3>
                <p className="text-white/90">
                  Retail CBD products directly from your practice with veterinary-exclusive
                  pricing and 40-50% profit margins.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Client Satisfaction</h3>
                <p className="text-white/90">
                  Offer clients an evidence-based supplement option they're already asking
                  about, increasing client retention.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Treatment Compliance</h3>
                <p className="text-white/90">
                  Palatable formulations (chews, oils) improve compliance compared to
                  traditional medications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
                <p className="text-white/90">
                  Protect your clients from low-quality CBD products by recommending tested,
                  verified products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Request Form */}
        <div id="request-samples" className="max-w-3xl mx-auto">
          <VetSampleRequestForm />
        </div>
      </div>
    </div>
  )
}
