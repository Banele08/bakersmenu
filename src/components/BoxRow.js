import '../styles/BoxRow.css';

export default function BoxRow() {
    const boxes = [
        { id: 1, title: 'Cupcakes', imgSrc: '/img/bakers/cupcakes.jpeg' },
        { id: 2, title: 'Baked Cakes', imgSrc: '/img/bakers/bakedcake.jpeg' },
        { id: 3, title: 'Baked Bread', imgSrc: '/img/bakers/bakedbread.jpeg' },
        { id: 4, title: 'Cookies', imgSrc: '/img/bakers/cookies.jpeg' },
        { id: 5, title: 'Pies', imgSrc: '/img/bakers/pies.jpeg' },
    ];

    return (
        <div className="container">
            {boxes.map(box => (
                <div className="box" key={box.id}>
                    <img src={box.imgSrc} alt={`Img ${box.id}`} />
                    <h3>{box.title}</h3>
                </div>
            ))}
        </div>
    );
}
