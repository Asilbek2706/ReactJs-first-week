
export default function Button() {

    function handleClick() {
        alert("Hello Button!")
    }

    return (
        <button onClick={handleClick}>
            I don't do anything
        </button>
    )
}