'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  address: string;
  driversLicenseNumber: string;
  driversLicenseState: string;
  driversLicenseExpiration: string;
  licenseSuspended: string;
  dui: string;
  felony: string;
  drivingExperience: string;
  // We would handle file upload separately
};

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Create FormData object for multipart/form-data (for file upload)
      const formData = new FormData();
      
      // Add all text fields
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Resume file upload has been removed as requested

      // Send to API endpoint
      const response = await fetch('/api/application', {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header; browser will set it with boundary for FormData
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }
      
      setSubmitStatus({
        success: true,
        message: result.message || 'Thank you for your application! We will review it and contact you soon.',
      });
      
      // Reset form and file input
      reset();
      
    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'There was an error submitting your application. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus.message && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.success
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            {...register('fullName', { required: 'Full name is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.fullName ? 'border-red-500' : ''
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register('phoneNumber', { required: 'Phone number is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.phoneNumber ? 'border-red-500' : ''
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="dateOfBirth"
            {...register('dateOfBirth', { required: 'Date of birth is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.dateOfBirth ? 'border-red-500' : ''
            }`}
          />
          {errors.dateOfBirth && (
            <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            {...register('address', { required: 'Address is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.address ? 'border-red-500' : ''
            }`}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="driversLicenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Driver's License Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="driversLicenseNumber"
            {...register('driversLicenseNumber', { required: 'Driver\'s license number is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.driversLicenseNumber ? 'border-red-500' : ''
            }`}
          />
          {errors.driversLicenseNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.driversLicenseNumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="driversLicenseState" className="block text-sm font-medium text-gray-700 mb-1">
            Driver's License State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="driversLicenseState"
            {...register('driversLicenseState', { required: 'Driver\'s license state is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.driversLicenseState ? 'border-red-500' : ''
            }`}
          />
          {errors.driversLicenseState && (
            <p className="mt-1 text-sm text-red-600">{errors.driversLicenseState.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="driversLicenseExpiration" className="block text-sm font-medium text-gray-700 mb-1">
            Driver's License Expiration <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="driversLicenseExpiration"
            {...register('driversLicenseExpiration', { required: 'Driver\'s license expiration date is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.driversLicenseExpiration ? 'border-red-500' : ''
            }`}
          />
          {errors.driversLicenseExpiration && (
            <p className="mt-1 text-sm text-red-600">{errors.driversLicenseExpiration.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="licenseSuspended" className="block text-sm font-medium text-gray-700 mb-1">
            Has your license been suspended/revoked? <span className="text-red-500">*</span>
          </label>
          <select
            id="licenseSuspended"
            {...register('licenseSuspended', { required: 'This field is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.licenseSuspended ? 'border-red-500' : ''
            }`}
          >
            <option value="">Select an option</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          {errors.licenseSuspended && (
            <p className="mt-1 text-sm text-red-600">{errors.licenseSuspended.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="dui" className="block text-sm font-medium text-gray-700 mb-1">
            Have you ever received a DUI / DWI? <span className="text-red-500">*</span>
          </label>
          <select
            id="dui"
            {...register('dui', { required: 'This field is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.dui ? 'border-red-500' : ''
            }`}
          >
            <option value="">Select an option</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          {errors.dui && (
            <p className="mt-1 text-sm text-red-600">{errors.dui.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="felony" className="block text-sm font-medium text-gray-700 mb-1">
            Have you ever been convicted of a felony? <span className="text-red-500">*</span>
          </label>
          <select
            id="felony"
            {...register('felony', { required: 'This field is required' })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue ${
              errors.felony ? 'border-red-500' : ''
            }`}
          >
            <option value="">Select an option</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          {errors.felony && (
            <p className="mt-1 text-sm text-red-600">{errors.felony.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="drivingExperience" className="block text-sm font-medium text-gray-700 mb-1">
            Driving Experience
          </label>
          <textarea
            id="drivingExperience"
            {...register('drivingExperience')}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:ring-pk-blue focus:border-pk-blue resize-none"
            placeholder="Please describe your driving experience, including years of commercial driving, types of vehicles operated, etc."
          ></textarea>
        </div>

        {/* Resume attachment section removed as requested */}
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-pk-blue text-white py-3 px-4 rounded-md hover:bg-blue-900 transition duration-300 text-lg font-medium ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>

      <p className="mt-2 text-sm text-gray-500 text-center">
        <span className="text-red-500">*</span> indicates required fields
      </p>
    </form>
  );
}
