function ErrorMessage({error,resetErrorBoundary}){
    console.log(error);

    return(
        <div>
            <p> an Error occurred</p>
            <pre>{error.message}</pre>
            <button onClick={()=>resetErrorBoundary()}>Try Again</button>
        </div>
    )
}

export default ErrorMessage;