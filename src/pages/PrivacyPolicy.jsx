import { motion } from 'framer-motion';
import { Section, Card, Icon } from '../components/ui';
import { storeInfo } from '../data/storeData';

export default function PrivacyPolicy() {
  return (
    <Section id="privacy-policy" background="dark" padding="lg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="prose prose-invert max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="shield" className="mr-3 text-accent" ariaLabel="Introduction" />
                  Introduction
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Welcome to {storeInfo.name}. We are committed to protecting your personal information
                  and your right to privacy. This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="mail" className="mr-3 text-accent" ariaLabel="Information collection" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2">Personal Information</h3>
                    <p className="text-text-muted leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside text-text-muted mt-2 space-y-1">
                      <li>Fill out contact forms</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Sign up for promotions or special offers</li>
                      <li>Contact us via email or phone</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2">Automatically Collected Information</h3>
                    <p className="text-text-muted leading-relaxed">
                      When you visit our website, we automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside text-text-muted mt-2 space-y-1">
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>IP address</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring website</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="settings" className="mr-3 text-accent" ariaLabel="Information usage" />
                  How We Use Your Information
                </h2>
                <p className="text-text-muted leading-relaxed">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-text-muted mt-2 space-y-1">
                  <li>Responding to your inquiries and requests</li>
                  <li>Sending you newsletters and promotional materials</li>
                  <li>Improving our website and services</li>
                  <li>Analyzing website usage and trends</li>
                  <li>Protecting against fraudulent or unauthorized activity</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              {/* Cookies and Tracking */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="tag" className="mr-3 text-accent" ariaLabel="Cookies" />
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-text-muted leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and
                  store certain information. You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not accept cookies, you may
                  not be able to use some portions of our website.
                </p>
                <div className="mt-4 p-4 bg-surface-card rounded-lg">
                  <h3 className="text-lg font-semibold text-text mb-2">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside text-text-muted space-y-1">
                    <li>
                      <strong>Necessary Cookies:</strong> Essential for the website to function properly
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how visitors interact with
                      our website
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Used to track visitors across websites for
                      advertising purposes
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Allow the website to remember your preferences
                    </li>
                  </ul>
                </div>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="externalLink" className="mr-3 text-accent" ariaLabel="Third-party services" />
                  Third-Party Services
                </h2>
                <p className="text-text-muted leading-relaxed">
                  We may employ third-party companies and individuals to facilitate our service, provide
                  the service on our behalf, perform service-related services, or assist us in analyzing
                  how our service is used. These third parties have access to your personal information
                  only to perform these tasks on our behalf and are obligated not to disclose or use it
                  for any other purpose.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="shield" className="mr-3 text-accent" ariaLabel="Data security" />
                  Data Security
                </h2>
                <p className="text-text-muted leading-relaxed">
                  We have implemented appropriate technical and organizational security measures designed
                  to protect the security of any personal information we process. However, please also
                  remember that we cannot guarantee that the internet itself is 100% secure.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="heart" className="mr-3 text-accent" ariaLabel="Your rights" />
                  Your Rights
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal
                  information, including:
                </p>
                <ul className="list-disc list-inside text-text-muted mt-2 space-y-1">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to restrict processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="shield" className="mr-3 text-accent" ariaLabel="Children's privacy" />
                  Children's Privacy
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Our website is not intended for individuals under the age of 21. We do not knowingly
                  collect personal information from children under 21. If you are a parent or guardian
                  and you are aware that your child has provided us with personal information, please
                  contact us.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="clock" className="mr-3 text-accent" ariaLabel="Policy changes" />
                  Changes to This Privacy Policy
                </h2>
                <p className="text-text-muted leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes
                  by posting the new Privacy Policy on this page and updating the "Last updated" date at
                  the top of this Privacy Policy.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text mb-4 flex items-center">
                  <Icon name="mail" className="mr-3 text-accent" ariaLabel="Contact us" />
                  Contact Us
                </h2>
                <p className="text-text-muted leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-surface-card rounded-lg">
                  <p className="text-text-muted">
                    <strong>{storeInfo.name}</strong>
                    <br />
                    {storeInfo.address.full}
                    <br />
                    Email:{' '}
                    <a
                      href={`mailto:${storeInfo.email}`}
                      className="text-accent hover:underline"
                    >
                      {storeInfo.email}
                    </a>
                    <br />
                    Phone:{' '}
                    <a
                      href={`tel:${storeInfo.phone}`}
                      className="text-accent hover:underline"
                    >
                      {storeInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
