//Agar state dan foydalanilmasa react UI ga malumot bermaydi
// export default function Counter() {
//     let index = 0;
//
//     function handleClick() {
//         index = index + 1;
//     }
//
//     return (
//         <>
//             <button onClick={handleClick}>
//                 Increment
//             </button>
//             <h3>
//                 Qiymat: ({ index + 1 })
//             </h3>
//         </>
//     );
// };


// Ammo bu holatda biiz useStatedan foydalanganmiz uchun UI ishlaydi
import {useState} from "react";

const Counter = () => {
    // const [index, setIndex] = useState(0)
    //
    // const handleClick = () => {
    //     console.log(index)
    //     setIndex(index => index + 1)
    // };
    //
    // return (
    //     <>
    //         <button onClick={handleClick}>
    //             Increment
    //         </button>
    //         <h3>
    //             Qiymat: {index + 1}
    //         </h3>
    //     </>
    // )

    const [person, setPerson] = useState({
        name: "Asilbek",
        age: 20
    })

    function handleClick() {
        setPerson({
            ...person,
            age: person.age + 1
        })
    }

    return (
        <>
            <button onClick={handleClick}>Increment person age</button>
            <h3>Yosh: {person.age}</h3>
        </>
    )
}

export default Counter