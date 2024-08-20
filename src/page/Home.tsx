import { useEffect, useState } from "react";
import { CategoryServices } from "../api/services/category/CategoryServices";
import { CategoryDto } from "../models/CategoryDto";
import { Card, Carousel, Col, Row, Skeleton } from "antd";
import Link from "antd/es/typography/Link";
import { ProductServices } from "../api/services/product/ProductServices";
import { ProductDto } from "../models/ProductDto";
import { HeartOutlined } from "@ant-design/icons";

const categoryService = new CategoryServices();
const productService = new ProductServices();

const ImageBanner = [{
    Url: "img-banner1.jpg",
    name: "img-banner1"
},
{
    Url: "img-banner2.jpg",
    name: "img-banner2"
},
{
    Url: "img-banner3.jpg",
    name: "img-banner3"
},
{
    Url: "img-banner4.jpg",
    name: "img-banner4"
}]
const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
type SizeType = 'default' | 'small' | 'large';


const Home: React.FC = () => {
    const [categories, setCategories] = useState<CategoryDto[]>();
    const [products, setProducts] = useState<ProductDto[]>();
    const [active, setActive] = useState(true);
    const [size, setSize] = useState<SizeType>('default');

    useEffect(() => {
        CategoriesData();
        ProductData();
    }, [])

    const CategoriesData = async () => {
        const res = await categoryService.getAll();
        setCategories(res.result?.items)
    }
    const ProductData = async () => {
        const res = await productService.getAll();
        setProducts(res.result?.items)
    }
    const outstandingproducts = products?.slice(0, 6);
    // .filter(p=>p.SoldNumber >= 50);
    return (
        <div className="home">

            <Carousel autoplay style={{ padding: "0px 78px" }}>
                {
                    ImageBanner?.map(i => {
                        return (
                            <img src={i.Url} alt={i.name} height={300} />
                        )
                    })
                }
            </Carousel>
            <div className="categories">
                <div className="title-category">
                    Categories
                </div>
                <div className="list-category">
                    {
                        categories?.map(c => {
                            return (
                                <Link href='#'>
                                    <div className="category" key={c.id}>
                                        <div className="imgCategory">
                                            <img src={c.urlPath} alt="imgCategory" />
                                        </div>
                                        <div className="nameCategory">
                                            {c.name}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
            <div className="products">
                <div className="title-product">
                    outstanding products
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24 }} style={{ margin: "0px" }}>

                    {
                        outstandingproducts?.map(op => {
                            console.log(op)
                            return (
                                <Col className="gutter-row" span={4}>
                                    {/* <div className="iconheart" onClick={() => { }}>
                                        <HeartOutlined />
                                    </div> */}
                                    <Card
                                        hoverable
                                        style={{ width: "100%" }}
                                        cover={
                                            <img className="img-product" src={op.images[0].url} alt={op.name} />
                                        }
                                    >
                                        <div className="name-product">
                                            <a href={`/product/${op.id}`}>
                                                {op.name}
                                            </a>
                                        </div>
                                        <div className="price-soldNumber">
                                            <div className="priceSale">
                                                {op.salePrice}.00 $
                                            </div>
                                            <div className="soldNumber">
                                                SoldNumber : {op.soldNumber}
                                            </div>
                                        </div>
                                    </Card>
                                    {/* <div className="product">
                                        <div className="iconheart" onClick={() => { }}>
                                            <HeartOutlined />
                                        </div>
                                        <div className="iconheart" onClick={() => { }}>
                                            <HeartOutlined color="red" />
                                        </div>
                                        <div className="imgproduct">
                                            <img src={op.image[0].url} alt={op.name} />
                                        </div>
                                        <div className="productname">
                                            {op.name}
                                        </div>
                                        <div className="price">
                                            <div className="priceSale">
                                                {op.salePrice}
                                            </div>
                                            <div className="priceOriginal">
                                                {op.originalPrice}
                                            </div>
                                        </div>

                                    </div> */}
                                </Col>

                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}
export default Home;