import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation();
    const pathname = location.pathname.slice(1).split("/");
    const linkArray = [];
    let path = "";
    pathname.forEach(item => {
        path += `/${item}`;
        linkArray.push(
            <>
                { linkArray.length > 0 ? <span> - </span> : "" }
                <Link to={path} key={Math.random()*1000}>{ toSentenceCase(item) }</Link>
            </>
        );
    });
    function toSentenceCase(lowercaseString) {
        let temp = lowercaseString.split("-");
        let sentenceCaseString = "";

        temp.forEach(item => {
            if (sentenceCaseString !== "")
                sentenceCaseString += " ";
            sentenceCaseString += item.charAt(0).toUpperCase() + item.slice(1);
        });

        return sentenceCaseString;
    };
    
    return (
        <div className="breadcrumbs">
            {linkArray}
        </div>
    );
}

