import Header from "../components/header";

export default (props) => (
  <>
    <Header />
    <div className="pt-20 text-center text-primary">{props.children}</div>
  </>
);
