import React from 'react';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

function PrivacyPolicy() {

    // Breadcrumb links
    const breadcrumbs = [
      { label: 'Home', link: '/', current: false },
      { label: 'Privacy Policy', link: null, current: true },
    ];

  return (
    <div className="bg-gray-100">

        {/* Page Header */}
        <PageHeader title="Privacy Policy" description="Your Data, Your Trust, Our Commitment" breadcrumbs={breadcrumbs} />

      <div className="max-w-screen-lg mx-auto px-4 py-16">
        <p className="text-gray-600 mb-8">
          This Privacy Policy explains how Squad of Creators ("we", "our", or "us") collects, uses, and protects your
          information when you use our services. By accessing or using our platform, you agree to the terms outlined
          below.
        </p>

        {/* Section 1: Information Collection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>
              <strong>Personal Information:</strong> Includes your name, email address, phone number, and other
              details you provide when registering or using our services.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our platform, such as pages visited, time
              spent, and interactions.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience and gather
              analytics.
            </li>
          </ul>
        </section>

        {/* Section 2: Use of Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            The information we collect is used to improve your experience and our services. This includes:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Providing, operating, and maintaining our platform.</li>
            <li>Personalizing your experience and delivering tailored content.</li>
            <li>Improving our services through analytics and feedback.</li>
            <li>Communicating with you about updates, promotions, and customer support.</li>
          </ul>
        </section>

        {/* Section 3: Sharing Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Sharing Your Information</h2>
          <p className="text-gray-600">
            We value your privacy and will not sell or share your personal information with third parties, except in
            the following cases:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>To comply with legal obligations or protect our legal rights.</li>
            <li>With trusted service providers who assist in operating our platform.</li>
            <li>During mergers, acquisitions, or transfers of business assets.</li>
          </ul>
        </section>

        {/* Section 4: Cookies and Tracking */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600">
            We use cookies to improve your experience on our platform. You can control or disable cookies through your
            browser settings, but this may affect your access to certain features.
          </p>
        </section>

        {/* Section 5: Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your data from unauthorized access, alteration, or
            disclosure. However, no method of transmission over the internet is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        {/* Section 6: Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your personal information. For any requests, please contact
            us at <a href="mailto:squadofcreators@gmail.com?subject=Your rights in Privacy Policy" className="text-indigo-500">squadofcreators@gmail.com</a>.
          </p>
        </section>

        {/* Section 7: Third-Party Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Third-Party Links</h2>
          <p className="text-gray-600">
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices or
            content of these sites. Please review their policies before engaging with them.
          </p>
        </section>

        {/* Section 8: Changes to This Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Privacy Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the
            "Last Updated" date at the top. Please review this page periodically for updates.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:squadofcreators@gmail.com?subject=Privacy Policy" className="text-indigo-500">squadofcreators@gmail.com</a>.
          </p>
        </section>
      </div>

      {/* Footer Section*/}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
