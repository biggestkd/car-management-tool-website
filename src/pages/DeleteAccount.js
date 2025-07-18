import React, { useState } from 'react';

const DeleteAccountForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('_subject', 'Delete Account Request');
        formData.append('_captcha', 'false');
        formData.append('_template', 'box');

        const response = await fetch('https://formsubmit.co/kdowdy@kommunityworks.com', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            setSubmitted(true);
        } else {
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            {submitted ? (
                <div>
                    <h2 style={styles.heading}>Thank You</h2>
                    <p style={styles.text}>
                        Your request has been received. We will process your account deletion shortly.
                    </p>
                </div>
            ) : (
                <>
                    <h2 style={styles.heading}>Delete Your Account</h2>
                    <p style={styles.text}>
                        Enter the email address associated with your account. We’ll review your request and process the deletion.
                    </p>

                    <form onSubmit={handleSubmit} style={styles.form}>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                        />

                        <button type="submit" style={styles.button}>
                            Request Deletion
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: 500,
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
    },
    heading: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
    },
    text: {
        fontSize: '1rem',
        marginBottom: '1.5rem',
        color: '#555',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    input: {
        padding: '0.75rem',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '0.75rem',
        fontSize: '1rem',
        backgroundColor: '#e53935',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    },
};

export default DeleteAccountForm;
