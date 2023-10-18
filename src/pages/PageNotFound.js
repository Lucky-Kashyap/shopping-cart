import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfound.png";
import { Button } from "../components";
import { useTitle } from "../hooks/useTitle";
import './PageNotFound.css';

export const PageNotFound = ({title}) => {
  //eslint-disable-next-line
  const pageTitle = useTitle(title);
  // useEffect(()=>{
  //   document.title=`Page Not Found /Cineplus`
  // });
  return (
    <main>
      <section>
       
          <p>
            404, Oops!
          </p>
          <div>
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
       
        <div>
          <Link to="/">
            <Button>Back To Shoppin Cart</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
