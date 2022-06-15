import Axios from "axios";
import styles from "../../styles/Coin.module.css";

const CoinsList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div className={styles.container}>
      {coinData.coins.map((coin, index) => {
        return (
          <div className={styles.coin} key={index}>
            <h1>{coin.name}</h1>
            <img src={coin.icon} alt="" />
            <div>{coin.price}</div>
          </div>
        );
      })}
    </div>
  );
};

// SSG (Static Site Generation) Pre-render page at build time
export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};

// SSR (Server Side Rendering) Pre-render this page on each request
// export const getServerSideProps = async () => {
//   const data = await Axios.get(
//     "https://api.coinstats.app/public/v1/coins?skip=0"
//   );

//   return {
//     props: {
//       coinData: data.data,
//     },
//   };
// };



export default CoinsList;
