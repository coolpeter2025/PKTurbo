import React from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
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
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {statusCode
          ? `Error ${statusCode}`
          : 'An error occurred'}
      </h1>
      <p style={{ marginBottom: '2rem' }}>
        {statusCode
          ? `A server-side error occurred (${statusCode})`
          : 'An error occurred on client'}
      </p>
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
