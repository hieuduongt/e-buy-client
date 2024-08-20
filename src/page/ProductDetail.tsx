import { useParams } from "react-router-dom";
import { ProductServices } from "../api/services/product/ProductServices";
import { useEffect, useState } from "react";
import { ProductDto } from "../models/ProductDto";
import { FieldTimeOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { InputNumber } from "antd";
import { getValue } from "@mui/system";
const productService = new ProductServices
const ProductDetail: React.FC = () => {
    const [product, setProduct] = useState<ProductDto>();
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();
    useEffect(() => {
        getProduct();
    },[])
    const getProduct = async () => {
        const res = productService.get(id!);
        setProduct((await res).result)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleChange = (value:number) => {
        setQuantity(value);
    };
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }; return (
        <div className="product">
            <div className="img-inf-product">
                <img src={product?.images[0]?.url} alt="" />
            </div>
            <div className="inf-product">
                <div className="name-inf-product">
                    {product?.name}
                </div>
                <div className="salePrice-originalPrice-inf-product">
                    <div className="originalPrice-inf-product">
                        {product?.originalPrice}.00$
                    </div>
                    <div className="salePrice-inf-product">
                        {product?.salePrice}.00$
                    </div>
                </div>
                <div className="return-policy">
                    <span>
                        Return Policy
                    </span>
                    <div className="content-policy">
                        <div className="policy-1">
                            <FieldTimeOutlined
                                style={{
                                    color: "red",
                                    marginRight: "7px"
                                }} />
                            <span>
                                15 days return
                            </span>
                        </div>
                        <div className="policy-2">
                            <QuestionCircleOutlined
                                style={{
                                    marginRight: "7px"
                                }} />
                            <span>
                                Free to change your mind
                            </span>
                        </div>
                    </div>
                </div>
                <div className="quantity">
                    <div className="title-quantity">
                        Quantity :
                    </div>
                    <InputNumber min={1} max={product?.quantity} defaultValue={quantity} value={quantity} controls={false} addonBefore={<button onClick={decreaseQuantity} className="decrease">
                        -
                    </button>} addonAfter={<button onClick={increaseQuantity} className="increase">
                        +
                    </button>} className="input-quantity" onChange={()=>handleChange}/>   
                </div>

                <div className="soldNumber-inf-product">
                    soldNumber:{product?.soldNumber}
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;