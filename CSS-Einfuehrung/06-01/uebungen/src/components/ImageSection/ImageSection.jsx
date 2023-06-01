import ImageArticle from "../ImageArticle/ImageArticle";

const ImageSection = (props) => {

    const imageArray = [
        {img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg", product: "cocoil", price: 30},
        {img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", product: "Polaroid", price: 60},
        {img: "https://static.wixstatic.com/media/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg", product: "Maui Maisture", price: 20},
    ]

    return ( 
        <>
         <h1>{props.headline}</h1>

         <div className="imageSection">
        {imageArray.map((img, index) => <ImageArticle imgArticle={img} key={index}/>)}
        </div>
        </>
     );
}
 
export default ImageSection;