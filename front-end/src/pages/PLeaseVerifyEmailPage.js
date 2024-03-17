import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const PLeaseVerifyEmailPage = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, 4000);
    }, [history]);

    return (
        <div>
            <h1>Please verify your email</h1>
            <p>A verification email has been sent to your email address. Please click the link in the email to verify your email address.</p>
        </div>
    )
}