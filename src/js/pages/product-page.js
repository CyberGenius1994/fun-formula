import "../import/modules";
import "../import/components";
import "%components%/comments/comments";
import "%components%/big-banner/big-banner";
import "%components%/text-block/text-block";
import "%components%/tabs-block/tabs-block";
import "%components%/big-gallery/big-gallery";
import "%components%/small-slider/small-slider";

import Tobii from "tobii/src/js/tobii";

const tobiiNew= new Tobii({
    selector: ".lightbox",
    autoplayVideo: true,
    captions: false
});

