import { useHistory } from "react-router-dom";

export const EmailVerificationFail = () => {
    const history = useHistory();

    return (
        <div className="content-container">
            <h1>Sorry!</h1>
            <p>Something went wrong</p>
            <button onClick={() => history.push('/signup')}>Back to signup</button>
        </div>
    )
}