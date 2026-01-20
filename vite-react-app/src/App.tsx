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


    const product = {
        name: "iPhone 15 Pro",
        price: 999,
        discountPrice: 899, //chegirma bor
        category: "Smartfonlar",
        stock: 5, //qoldiq
        features: ["A17 Pro chip", "Titanium korpus", "48MP Camera"],
        image: "https://v-p.com.ua/wp-content/uploads/2023/09/iphone-15-pro-max-finish-select-202309-6-7-inch-black-titanium.webp",
        isAvailable: true
    };

    const styleObject = {
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "350px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center"
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
                    <p>{user.skills.join(" * ")}</p>

                    <small>Bugun: {new Date().toLocaleDateString()}</small>
                </div>
            </div>

            <div style={ styleObject }>
                <h4 style={{ color: "gray", textTransform: "uppercase", fontSize: "12px" }}>{product.category}</h4>
                <img src={product.image} alt={product.name} style={{ width: '150px', borderRadius: "8px" }} />

                <h2>{product.name}</h2>

                <div>
                    <span style={{ textDecoration: "line-through", color: "gray", marginRight: "10px" }}>
                        ${product.price}
                    </span>
                    <span style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                        ${product.discountPrice}
                    </span>
                </div>

                <div style={{ textAlign: "left", margin: "15px 0" }}>
                    <strong>Xususiyatlari:</strong>
                    <ul>
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <p style={{ color: product.stock > 0 ? "green" : "red", fontWeight: "bold" }}>
                    {product.stock > 0 ? `Sotuvda bor: ${product.stock} ta` : "Sotuvda yo'q"}
                </p>

                <button disabled={!product.isAvailable} style={{
                    backgroundColor: product.isAvailable ? "#007bff" : "#ccc",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: product.isAvailable ? "pointer" : "not-allowed"
                }}>
                    {product.isAvailable ? "Sotib olish" : "Mavjud emas"}
                </button>
            </div>
        </>
    );
}

export default App;

