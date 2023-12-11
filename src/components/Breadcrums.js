import { useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation();
    const pathname = location.pathname.split("/");
    let breadcrumbs = `${toSentenceCase(pathname[1])} - `;
    if (pathname[2].length > 0)
        breadcrumbs += toSentenceCase(pathname[2]);
    
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
        <div>
            { breadcrumbs }
        </div>
    );
}

