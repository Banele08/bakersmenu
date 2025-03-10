import CustomImage from "./CustomImage"

export default function Home(){
    const images = [
        "/img/gallery/img_1.jpeg"
    ]

    return(
        <div className="section home">
            <div className="col typography">
            <h1 className="title"> WELCOME TO BAKERS!!</h1>
            <p className="info"> Your one stop destinantion to get all baking amenities. Ranging from Cupcakes, Baked Cakes, Baked Bread, Cookies & Pies. </p>
            <button className="btn">Explore Now! </button>
            <div className="col gallery"> 
                {images.map ((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"70%"}/>
                ))}
                
                


            </div>
            </div>
             </div>
    )
}