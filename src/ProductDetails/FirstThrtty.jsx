
import ProductVariations from "./Dynamic_Product_Variations";
import ProductDetail from "./Image_zoom";
import MultiLayoutView from "./MultiLayoutView";
import ProductComparison from "./ProductComparison";
import ProductDetails from "./ProductDetails";
import ProductGrid from "./ProductGrid";
import ProductGridTwo from "./ProductGridTwo";
import ProductImageGallery from "./ProductImageGallery";
import ProductReviews from "./ProductReviews";
import FirstAll from "./Quick_View_Modal";

function FirstThrtty() {
  return (
    <div>
<FirstAll/>
<ProductReviews/>
<ProductImageGallery/>
<ProductGridTwo/>
<ProductGrid/>
<ProductDetails/>
<ProductComparison/>
<MultiLayoutView/>
<ProductDetail/>
<ProductVariations/>
    </div>
  );
}

export default FirstThrtty;
