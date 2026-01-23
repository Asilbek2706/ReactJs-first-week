function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            // Bu qator "Click" hodisasini div-ga o'tishini to'xtatadi
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

const Toolbar = () => {
    return (
        <div className="Toolbar" onClick={() => {
            alert("Siz Toolbar-ni bostingiz!");
        }} style={{ padding: '20px', background: '#eee' }}>

            <Button onClick={() => alert("Kino qo'yildi!")}>
                Play movie
            </Button>

            <Button onClick={() => alert("Rasm yuklanmoqda!")}>
                Upload Image
            </Button>

        </div>
    );
}

export default Toolbar;