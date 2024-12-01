import React from "react";
import OfferBanner from "./OfferBanner";

function Four() {
  return (
    <div>
      <OfferBanner
        endTime={new Date().getTime() + 24 * 60 * 60 * 1000} // Offer for 24 hours
      />
    </div>
  );
}

export default Four;
