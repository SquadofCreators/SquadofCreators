import React from 'react';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

function TermsAndServices() {
    
    // Breadcrumb Links
    const breadcrumbs = [
        { label: 'Home', link: '/', current: false },
        { label: 'Terms and Services', link: null, current: true },
      ];
    
  return (
    <div className="bg-gray-100">

        {/* Page Header */}
        <PageHeader title="Terms and Services" description="Understanding Our Commitments and Your Responsibilities" breadcrumbs={breadcrumbs} />

      <div className="max-w-screen-lg mx-auto px-4 py-16">
        <p className="text-gray-600 mb-8">
          Welcome to Squad of Creators ("SoC"). By accessing or using our platform, you agree to comply with and be bound
          by these Terms and Services. Please read them carefully before using our platform.
        </p>

        {/* Section 1: Acceptance of Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using the services provided by SoC, you agree to be bound by these terms. If you do not
            agree, you may not access or use our services.
          </p>
        </section>

        {/* Section 2: Use of Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of Services</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>You must be at least 18 years old to use our services, or have parental consent if underage.</li>
            <li>You agree to use our platform only for lawful purposes and in compliance with applicable laws.</li>
            <li>
              Unauthorized use, including attempting to access restricted areas or data, is prohibited and may result in
              legal action.
            </li>
          </ul>
        </section>

        {/* Section 3: Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600">
            All content on the SoC platform, including text, graphics, logos, and code, is the intellectual property of
            Squad of Creators and protected by copyright laws. Unauthorized reproduction or distribution is prohibited.
          </p>
        </section>

        {/* Section 4: User Content */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Content</h2>
          <p className="text-gray-600 mb-4">
            By submitting content to our platform, you grant SoC a non-exclusive, royalty-free license to use, modify,
            and distribute your content for operational purposes. You retain ownership of your content.
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>You are responsible for the content you upload or share on our platform.</li>
            <li>Content must not violate any third-party rights or applicable laws.</li>
          </ul>
        </section>

        {/* Section 5: Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            SoC will not be held liable for any direct, indirect, incidental, or consequential damages arising from your
            use of our platform. Your use of our services is at your own risk.
          </p>
        </section>

        {/* Section 6: Termination of Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Termination of Services</h2>
          <p className="text-gray-600">
            We reserve the right to terminate or suspend your access to our platform at any time, without notice, for
            violations of these terms or other reasons.
          </p>
        </section>

        {/* Section 7: Modifications to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Modifications to Terms</h2>
          <p className="text-gray-600">
            SoC reserves the right to modify these Terms and Services at any time. Changes will be posted on this page
            with the "Last Updated" date at the top. Continued use of the platform constitutes acceptance of the revised
            terms.
          </p>
        </section>

        {/* Section 8: Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
          <p className="text-gray-600">
            These terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes
            arising will be resolved in the courts of [Your Jurisdiction].
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns regarding these Terms and Services, please contact us at{' '}
            <a href="mailto:squadofcreators@gmail.com?subject=Terms%20and%20Services" className="text-indigo-500">squadofcreators@gmail.com</a>.
          </p>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default TermsAndServices;
