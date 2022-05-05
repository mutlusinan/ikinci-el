import axios from "axios";
import React from "react";

function DummyListed(props) {
  return (
    <>
      <div className="offerCards">
        <div className="takenCards">{props.offerStatus === "offered" ? "Satışta olan ürünleriniz için şu anda bir teklif yok" : "Verdiğiniz bir teklif yok"}</div>
      </div>
    </>
  );
}

export default DummyListed;
