import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className="w-2/4 " style={{ margin: "0 auto" }}>
      <div className="flex justify-between">
        <div className="bg-red-700">1</div>
        <div>2</div>
      </div>
    </div>
  );
};
export default Home;
