import HeaderBox from "@/components/HeaderBox";
import TotalBalancBox from "@/components/TotalBalancBox";

const loggedIn = { firstName: "David" };
const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficinetly."
          />
          <TotalBalancBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
