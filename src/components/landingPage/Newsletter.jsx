import React from 'react'
import newsletterImg from '../../assets/newsletter.png'
import CustomModal from '../CustomModal'
import { RiCheckboxCircleLine } from "react-icons/ri";

function Newsletter() {

  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Please enter your email address.');
      return;
    }
    setError('');
    setSuccess('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section id='newsletter' className='max-w-screen-lg w-5/6 flex flex-col items-center justify-center py-6 md:py-20'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 px-4 py-6 md:p-12 border border-gray-400 rounded-xl'>
        <div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className="px-4 text-xl md:leading-tight md:text-4xl font-bold text-center text-gray-800">
              Join Our Community
            </h1>
            <p className="px-4 text-base md:text-xl text-center text-gray-400">
              Get the latest updates, resources, and exclusive offers directly to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
            <div className='flex flex-col items-center justify-center gap-4'>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-600"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Subscribe
            </button>

          </form>
        </div>
        <div className='hidden md:flex flex-col items-center justify-center'>
          <img src={newsletterImg} alt="Newsletter" className="w-full md:w-1/2 object-cover rounded-lg" />
        </div>
      </div>

      {
        success && (
          <CustomModal
            icon={<RiCheckboxCircleLine className='text-green-500' />}
            title={success}
            message={"Now you'll get the latest updates, resources, and exclusive offers directly to your inbox."}
            primaryBtn={{
              label: 'Close',
              onClick: () => setSuccess('')
            }}
          />
        )
      }
    </section>
  )
}

export default Newsletter