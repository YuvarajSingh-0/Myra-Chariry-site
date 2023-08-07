import { useEffect, useState } from "react";
import axios from 'axios';

const GiftOptions = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://40cnxsort0.execute-api.ap-south-1.amazonaws.com/dev/api/products').then((res) => {
            console.log(res.data);
            setProducts(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className="gift-options">
            <div className="gift-options-content">
                <h1 className="gift-options-h1"> <span className="gradient-txt">GIFT OPTIONS</span></h1>
            </div>
            <div className="provisions">
                {
                    products.map((product, key) => {
                        return (
                            <div className="provision" key={key}>
                                <img src={product.images[0]} alt='' className="provision-img" />
                                <h3 className="provision-h3">{product.name}</h3>
                                <p className="provision-p">{product.description}</p>
                                <button className="provision-btn">Select</button>
                            </div>
                        )
                    })
                }
                {/* <div className="provision">
                    <img src="./provisions.png" className="provision-img" />
                    <h3 className="provision-h3">Charity for Education</h3>
                    <p className="provision-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className="provision-btn">Read More</button>
                </div>
                <div className="provision">
                    <img src="./provisions.png" className="provision-img" />
                    <h3 className="provision-h3">Charity for Education</h3>
                    <p className="provision-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="provision">
                    <img src="./provisions.png" className="provision-img" />
                    <h3 className="provision-h3">Charity for Education</h3>
                    <p className="provision-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="provision">
                    <img src="./provisions.png" className="provision-img" />
                    <h3 className="provision-h3">Charity for Education</h3>
                    <p className="provision-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div> */}
            </div>
        </div>
    )
}
export default GiftOptions;
