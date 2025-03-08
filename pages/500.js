import React from 'react';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>500 - Server Error</h1>
      <p style={{ marginBottom: '2rem' }}>Sorry, something went wrong on our server.</p>
      <Link href="/" style={{ 
        padding: '0.75rem 1.5rem', 
        backgroundColor: '#4A5568', 
        color: 'white', 
        borderRadius: '0.375rem',
        textDecoration: 'none'
      }}>
        Return to Home
      </Link>
    </div>
  );
}
