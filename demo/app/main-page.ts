import * as observable from "tns-core-modules/data/observable";
import * as pages from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import * as app from "tns-core-modules/application";
import { View } from "tns-core-modules/ui/core/view";
import * as keyFrame from "tns-core-modules/ui/animation/keyframe-animation";
let page;
import * as enums from "tns-core-modules/ui/enums";
import { Page } from "tns-core-modules/ui/page";
import { clearInterval } from "tns-core-modules/timer";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Image } from "tns-core-modules/ui/image";
import * as imgSrc from "tns-core-modules/image-source";
import { Color } from "tns-core-modules/color";
import { Button } from "tns-core-modules/ui/button";
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}
