// components
import Nav from "../components/Nav"
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import MainGrid from '../components/MainGrid'

function SellerMain({ list, moreData }) {
    const userType = localStorage.getItem("type")
    const isLogin = localStorage.getItem("token")

    return (
        <div>
            {userType === "SELLER" ?
                <Nav />
                :
                <Nav user_nav children={isLogin ? "마이페이지" : "로그인"} />
            }
            <Banner />
            <MainGrid list={list} moreData={moreData} />
            <Footer />
        </div>
    )
}

export default SellerMain