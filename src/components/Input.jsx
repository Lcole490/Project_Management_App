


export default function Input({label, textArea}){

    return(
        <p>
            <label>{label}</label>
            {textArea ? <textarea {...props}/> : <input {...props} />}
        </p>
    )
}