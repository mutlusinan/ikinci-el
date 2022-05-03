import LadyInBlue from "../components/LadyInBlue";
import LoginComp from "../components/LoginComp";

function Offer() {
    return (
        <>
            <div className="userCard">
                <span className="userAvatar">
                    <svg width="38" height="38" viewBox="0 0 38 38">
                        <g id="Group_6876" data-name="Group 6876" transform="translate(-201.224 -199.407)">
                            <g id="Group_6910" data-name="Group 6910">
                                <circle id="Ellipse_1306" data-name="Ellipse 1306" cx="19" cy="19" r="19"
                                    transform="translate(201.224 199.407)" fill="#ddd" />
                                <g id="Group_6873" data-name="Group 6873" transform="translate(213.502 206.619)">
                                    <g id="Group_6872" data-name="Group 6872" transform="translate(0 0)">
                                        <path id="Path_14459" data-name="Path 14459"
                                            d="M224.581,206.237a6.724,6.724,0,1,0,6.724,6.724A6.741,6.741,0,0,0,224.581,206.237Z"
                                            transform="translate(-217.857 -206.237)" fill="#f5f5f5" />
                                    </g>
                                </g>
                                <g id="Group_6875" data-name="Group 6875" transform="translate(208.633 220.547)">
                                    <g id="Group_6874" data-name="Group 6874" transform="translate(0 0)">
                                        <path id="Path_14460" data-name="Path 14460"
                                            d="M231.9,237.121a6.266,6.266,0,0,0-.675-1.233,8.359,8.359,0,0,0-5.784-3.641,1.238,1.238,0,0,0-.852.205,7.165,7.165,0,0,1-8.456,0,1.1,1.1,0,0,0-.852-.205,8.3,8.3,0,0,0-5.784,3.641,7.242,7.242,0,0,0-.675,1.233.624.624,0,0,0,.029.558,11.666,11.666,0,0,0,.793,1.175A11.12,11.12,0,0,0,211,240.38a17.539,17.539,0,0,0,1.35,1.175,13.391,13.391,0,0,0,15.973,0,12.967,12.967,0,0,0,1.35-1.175,13.556,13.556,0,0,0,1.351-1.527,10.324,10.324,0,0,0,.793-1.175A.5.5,0,0,0,231.9,237.121Z"
                                            transform="translate(-208.772 -232.229)" fill="#f5f5f5" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </span>
                <span className="userNameDisplay">account@name.com</span>
            </div>


            <div className="offerTable">
                <div className="offerSelection">
                    <span id="activeCategory">Teklif Aldıklarım</span><span>Teklif Verdiklerim</span>
                </div>
                <div className="offerCards">
                    <div className="takenCards">
                        <img src="/" alt="product"/>
                            <span className="namePrice">
                                <span className="takenName">Beli Uzun Trençkot Kareli</span>
                                <span className="takenPrice"><span className="first">Alınan Teklif</span><span className="second">100 TL</span></span>
                            </span>
                            <button>Onayla</button>
                            <button>Reddet</button>
                            <span></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offer;


