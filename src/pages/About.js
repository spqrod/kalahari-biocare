import "../styles/about.css";
import monica from "../resources/team/monica.jpeg";
import trevorWatson from "../resources/team/trevor-watson.jpeg";
import trevorRobson from "../resources/team/trevor-robson.jpeg";
import boyd from "../resources/team/boyd.jpeg";
import nicholas from "../resources/team/nicholas.jpeg";
import greyson from "../resources/team/greyson.jpeg";
// import monicaAtTraining from "../resources/monica-at-training.jpg";
import monicaWithVillagers from "../resources/monica-with-villagers.jpg";
import monicaWithVillagers2 from "../resources/monica-with-villagers-2.jpg";
import { InitialTransition } from "../components/InitialTransition";

export default function About() {
    return (
        <main className="aboutPage">
            <InitialTransition />
            <section className="mainSection">
                <div className="textContainer">
                    <h1>About Us</h1>
                    <p>
                        Kalahari Natural Oils Limited is a Limited Liability company registered in the Republic of Zambia in 2006. <br /><br />We work with communities in remote rural parts of Zambia. We source wild kernel and seed from the forests where collection and processing is done by hand to obtain the best raw materials for our products and create jobs where jobs are difficult to find.
                    </p>
                </div>
                <img className="image" src={monicaWithVillagers2} alt="monica with the villagers" />
            </section>

            <section className="teamSection">
                <h2>Our Team</h2>
                <div className="teamMembersContainer">
                    <div className="teamMemberContainer">
                        <img className="image" src={monica} alt="monica" />
                        <h5>
                            Monica Rydsmo Robson
                        </h5>
                        <h6>
                            Founder and CEO
                        </h6>
                        <p>
                            Monica has led Kalahari since 2006 successfully introducing Mongongo oil to the cosmetic industry and building relationships with the communities who benefit from working with the company.
                        </p>
                    </div>
                    <div className="teamMemberContainer">
                        <img className="image" src={greyson} alt="greyson" />
                        <h5>
                            Greyson Mwiinga
                        </h5>
                        <h6>
                            Production Foreman
                        </h6>
                        <p>
                            Greyson joined Kalahari fresh from school in 2007, oversees production at our Lusaka facility and controls inventory and traceability records.
                        </p>
                    </div>
                    <div className="teamMemberContainer">
                        <img className="image" src={boyd} alt="boyd" />
                        <h5>
                            Boyd Situmbeko
                        </h5>
                        <h6>
                            Field Coordinator
                        </h6>
                        <p>
                            Boyd has been working with Kalahari since its first days where he works with our communities and liaises with the local authorities.
                        </p>
                    </div>
                    <div className="teamMemberContainer">
                        <img className="image" src={trevorWatson} alt="trevor watson" />
                        <h5>
                            Trevor Watson
                        </h5>
                        <h6>
                            Expert
                        </h6>
                        <p>
                            Trevor is an entrepreneur and honey producer who has spent many years working with rural beekeepers and organic small farmers; he is a shareholder and brings his vast experience to the board.
                        </p>
                    </div>
                    <div className="teamMemberContainer">
                        <img className="image" src={nicholas} alt="nicholas" />
                        <h5>
                            Nicholas Tamba
                        </h5>
                        <h6>
                            Accountant
                        </h6>
                        <p>
                            Nicholas is responsible for Kalahari’s statutory compliance and monthly and annual financial reporting.
                        </p>
                    </div>
                    <div className="teamMemberContainer">
                        <img className="image" src={trevorRobson} alt="trevor robson" />
                        <h5>
                            Trevor Robson
                        </h5>
                        <h6>
                            Director
                        </h6>
                        <p>
                            Trevor has a lifelong interest in ecology and wilderness and is a former Chartered Secretary who takes care of finance and corporate affairs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="additionalSection">
                <p>
                    Kalahari has trained and appointed Internal Inspectors from each association who are tasked with carrying out refresher training in Organic Production Rules and who check on organic and production compliance in neighbouring villages associations.
                </p>
                <img className="image" src={monicaWithVillagers} alt="monica with the villagers" />
            </section>
        </main>
    );
}