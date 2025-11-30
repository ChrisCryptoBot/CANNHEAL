import { Shield, CheckCircle, FileText, Scale, Award, Building } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Texas Compliance & Licensing',
  description:
    'CANNHEAL is fully licensed by the Texas Department of State Health Services (DSHS) to manufacture and distribute hemp-derived CBD products. Learn about our commitment to compliance.',
}

export default function TexasCompliancePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Texas DSHS Licensed & Compliant
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're fully licensed by the Texas Department of State Health Services to
            manufacture and distribute hemp-derived CBD products in Texas.
          </p>
        </div>
      </div>

      {/* License Display */}
      <div className="container mx-auto px-4 -mt-8 mb-16">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-2">
              Our Texas DSHS Licenses
            </h2>
            <p className="text-text-secondary">
              Active licenses in good standing with the Texas Department of State Health
              Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-primary rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-text-secondary">Manufacturing License</p>
                  <p className="text-2xl font-bold text-text-primary font-mono">
                    MF-23-00001
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Status:</span>
                  <span className="font-semibold text-success flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Active
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Issued:</span>
                  <span className="font-semibold">January 15, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Expires:</span>
                  <span className="font-semibold">January 15, 2026</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-primary rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-text-secondary">Distributor License</p>
                  <p className="text-2xl font-bold text-text-primary font-mono">
                    DT-23-00001
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Status:</span>
                  <span className="font-semibold text-success flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Active
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Issued:</span>
                  <span className="font-semibold">January 15, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Expires:</span>
                  <span className="font-semibold">January 15, 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-text-secondary text-center">
              License verification available at{' '}
              <a
                href="https://www.dshs.texas.gov/texas-hemp-program"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover font-semibold underline"
              >
                dshs.texas.gov/texas-hemp-program
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* What This Means for Retailers */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              What This Means for Retailers
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-text-primary mb-2">
                    You Can Legally Sell Our Products in Texas
                  </h3>
                  <p className="text-text-secondary">
                    As a licensed manufacturer and distributor, we're authorized to sell
                    hemp-derived CBD products to retailers across Texas. When you partner
                    with CANNHEAL, you're working with a fully compliant supplier.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-text-primary mb-2">
                    We Handle the Compliance Burden
                  </h3>
                  <p className="text-text-secondary">
                    We maintain all required testing, documentation, and reporting so you
                    don't have to. Every product comes with a Certificate of Analysis (COA)
                    proving THC-free status and safety.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-text-primary mb-2">
                    Regular Audits & Inspections
                  </h3>
                  <p className="text-text-secondary">
                    The Texas DSHS conducts regular inspections of our facilities and
                    processes. We maintain good standing through rigorous quality control and
                    record-keeping.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-text-primary mb-2">
                    Age Restriction Compliance
                  </h3>
                  <p className="text-text-secondary">
                    Texas law requires retailers to verify that customers are 21+ before
                    selling CBD products. Our website includes compliant age verification, and
                    we provide guidance on retail point-of-sale requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Texas Hemp Laws - Plain English */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Texas Hemp Laws in Plain English
              </h2>
              <p className="text-text-secondary">
                Understanding the legal framework for CBD in Texas
              </p>
            </div>

            <div className="space-y-8">
              {/* House Bill 1325 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      House Bill 1325 (2019)
                    </h3>
                    <p className="text-text-secondary mb-3">
                      This law legalized hemp-derived CBD products in Texas, defining hemp as
                      cannabis with less than 0.3% THC by dry weight.
                    </p>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Hemp is no longer classified as a controlled substance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Products must contain 0.3% THC or less (CANNHEAL products are 0.0%
                          THC)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Manufacturers and distributors must be licensed by Texas DSHS
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Senate Bill 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      Senate Bill 3 (2023)
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Enhanced regulation of consumable hemp products, adding safety and
                      quality requirements.
                    </p>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>All products must be third-party lab tested</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Certificates of Analysis must be publicly accessible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Purchasers must be 21 years of age or older</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Products cannot contain synthetic cannabinoids (CANNHEAL uses only
                          natural hemp extract)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Strict labeling and packaging requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* DSHS Licensing Requirements */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      DSHS Licensing Requirements
                    </h3>
                    <p className="text-text-secondary mb-3">
                      To operate legally in Texas, hemp businesses must obtain licenses from
                      the Department of State Health Services.
                    </p>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Manufacturers must have a Manufacturing License (like our MF-23-00001)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Distributors must have a Distributor License (like our DT-23-00001)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Retailers do NOT need a license to sell our products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Licenses must be renewed every 3 years with good standing
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retailer Requirements */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              What Retailers Need to Know
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border-2 border-primary/20 rounded-lg p-6">
                <h3 className="font-bold text-lg text-text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  You DO Need To:
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Verify customers are 21+ before selling CBD products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep COAs available for customer review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ensure products are properly labeled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Only purchase from licensed manufacturers/distributors</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-primary/20 rounded-lg p-6">
                <h3 className="font-bold text-lg text-text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  You DON'T Need To:
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Obtain a Texas DSHS hemp license</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Conduct your own lab testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Register with the state as a retailer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>File special reports or documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 border-2 border-accent rounded-lg p-6">
              <h3 className="font-bold text-lg text-text-primary mb-3">
                CANNHEAL Handles Your Compliance
              </h3>
              <p className="text-text-secondary mb-4">
                When you partner with CANNHEAL, we provide everything you need to stay
                compliant:
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>
                    Certificates of Analysis with QR codes for instant customer access
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Properly labeled products meeting all Texas requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Documentation of our DSHS licenses for your records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Ongoing updates about regulatory changes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with a Compliant Supplier</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the retailers who trust CANNHEAL for fully compliant, THC-free CBD products
            backed by Texas DSHS licensing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/wholesale">
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Apply for Wholesale Account
              </Button>
            </Link>
            <Link href="/lab-results">
              <Button
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                View Lab Results
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
