import { useEffect, useState } from "react";
import axios from 'axios';

const About = () => {
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
        <div className="about" id="donate-section">
            <div className="about-content">
                <h1 className="about-h1"> <span className="gradient-txt">HOW IT WORKS</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="provisions">
                {
                    products.map((product,key) => {
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
export default About;
