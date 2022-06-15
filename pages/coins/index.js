import Axios from "axios";

const CoinsList = ({coinData}) => {
    console.log(coinData)
  return <div>
    {coinData.coins.map((coin, index) => {
        return <div key={index}>
        <h1>{coin.name}</h1>
        <img src={coin.icon}  alt=""/>
        </div>
    })}
  </div>;
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
        coinData: data.data
    }
  }
};

export default CoinsList;
