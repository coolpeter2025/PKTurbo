import { Metadata } from 'next';
import ApplicationForm from '@/components/ApplicationForm';

export const metadata: Metadata = {
  title: 'Employment Opportunities - PK Turbo LLC',
  description: 'Explore career opportunities with PK Turbo LLC. We are looking for reliable, skilled professionals to join our transportation and logistics team.',
  keywords: 'jobs at PK Turbo, transportation careers, truck driver jobs, logistics employment, employment opportunities',
};

export default function EmploymentPage() {
  return (
    <div className="py-12">
      <div className="container">
        <h1>Employment Opportunities</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-6">
            At PK Turbo LLC, we believe our team is our greatest asset. We are constantly looking for dedicated, 
            reliable, and skilled professionals to join our growing company. As a member of our team, you'll 
            have the opportunity to work in a dynamic environment with competitive compensation and room for growth.
          </p>
          <p className="text-lg mb-6">
            We pride ourselves on maintaining a positive work culture that values safety, reliability, 
            efficiency, and excellent customer service. Our ideal candidates share these values and are 
            committed to helping us maintain our reputation for quality transportation services.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-pk-blue">We're Hiring!</h2>
          <h3 className="text-xl font-bold mb-6 text-center">If you're interested in one of our open positions, start by applying here and attaching your resume.</h3>
          
          <div className="mb-8">
            <ApplicationForm />
          </div>
        </div>
        
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Benefits of Working With Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex">
              <div className="mr-4 text-pk-blue">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Competitive Compensation</h3>
                <p className="text-gray-600">Salary packages based on experience and performance</p>
              </div>
            </div>
            
            {/* Removed Health Benefits */}
            {/* Removed Paid Time Off */}
            {/* Removed Retirement Plans */}
            
            <div className="flex">
              <div className="mr-4 text-pk-blue">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Career Development</h3>
                <p className="text-gray-600">Training opportunities and advancement potential</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-pk-blue">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Team Environment</h3>
                <p className="text-gray-600">Collaborative culture with supportive management</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            PK Turbo LLC is an equal opportunity employer and does not discriminate on the basis of race, color, religion,
            gender, sexual orientation, national origin, age, disability, or any other protected characteristic.
          </p>
        </div>
      </div>
    </div>
  );
}
