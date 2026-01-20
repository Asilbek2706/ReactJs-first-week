function App() {
    // data
    const user = {
        firstName: 'Paloncha',
        lastName: 'Qulonchaeva',
        age: 20,
        isOnline: true,
        skills: ["ReactJS", "Typescript", "Vite"],
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
    };

//        inline style
    const cardStyle = {
        border: "2px solid #646cff",
        borderRadius: "15px",
        padding: "20px",
        maxWidth: "300px",
        textAlign: "center" as const, // TS uchun "as const"
        backgroundColor: "#242424",
        color: "white"
    };

    const balance = 500;

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                <div style={ cardStyle } className="user-card">
                    <img src={user.avatar} alt="Avatar" style={{ width: '100px' }} />

                    <h1>{user.firstName} {user.lastName}</h1>

                    <p>Yoshi: {user.age}</p>
                    <p>Yosh 5 yildan keyin: {user.age + 5}</p>

                    <p style={{ color: user.isOnline ? "#4caf50" : "#f44336" }}>
                        Holati: {user.isOnline ? "Hozir faol ✅" : "Oflayn ❌"}
                    </p>
                    <p>
                        { balance > 100 ? "Xarid qilish mumkin 🛒" : "Mablag' yetarli emas ❌"}
                    </p>
                    <hr />

                    <h3>Ko'nikmalar:</h3>
                    <p>{user.skills.join(" . ")}</p>

                    <small>Bugun: {new Date().toLocaleDateString()}</small>
                </div>
            </div>
        </>
    );
}

export default App;

