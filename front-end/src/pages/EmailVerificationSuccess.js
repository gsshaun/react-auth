import { useHistory } from "react-router-dom";

export const EmailVerificationSuccess = () => {
    const history = useHistory();


    return (
        <div className="content-container">
            <h1>Success!</h1>
            <p>Your email has been verified. You can now log in.</p>
            <button onClick={() => history.push('/')}>Go to home page</button>
        </div>
    )
}