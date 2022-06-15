import Axios from "axios";

const CoinsList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coin, index) => {
        return (
          <div key={index}>
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
export const getStaticProps = async ({ params }) => {
  const id = params.id;
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
