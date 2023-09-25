import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <div className='no-page-found-animation-wrapper'>
                <img className="no-page-found-animation" src='/assets/no-page-found.gif' alt='no page found' />
            </div>
            <h1>Oops! Something went wrong.</h1>
            <p>We apologize, but an error occurred while processing your request.</p>
            <p>Please try again later or contact support if the problem persists.</p>
        </div>
    );
};

export default ErrorPage;
