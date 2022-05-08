import React from "react";

function DummyListed(props) {
  return (
    <>
      <div className="offerCards">
        <div className="takenCards">
          {props.offerStatus === "offered"
            ? "Satışta olan ürünleriniz için şu anda bir teklif yok"
            : (props.offerStatus === "offering"
            ? "Verdiğiniz bir teklif yok"
            : "Ürününüz bulunmamakta")}
        </div>
      </div>
    </>
  );
}

export default DummyListed;
