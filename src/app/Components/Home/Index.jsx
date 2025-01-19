import Link from "next/link";
import Header from "../Header/Header";
import "./Index.css";

function Index() {
    return (
        <>
            <Header />
            <div className="index-container">
            <div className="content">
            <h1>Make your Outfit wonderful</h1>
            <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, et asperiores officia obcaecati harum accusantium eius quo minima quidem.
          Enim ratione laboriosam blanditiis commodi facilis placeat minus repellat voluptatum ipsam?
            </p>
            <div className="buttons">
              <Link href="/products">
              <button>
              Start Shopping</button>
               </Link>
              <Link href="/about">
              <button>Learn More</button>
              </Link>
            </div>
            </div>
            </div>
        </>
  );
};

export default Index;



