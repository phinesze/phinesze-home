import {SquareMenuItemParams} from "../components/common/SquareMenu/SquareMenuItem";
import Works1 from "../components/WorksDetail/pages/Works1/index";
import Works2 from "../components/WorksDetail/pages/Works2/index";

const works: SquareMenuItemParams[] = [
    {id: "0", img: "", url: '/works/coltvox', text: "ウェブサイトの作成", innerComponent: new Works1({})},
    {id: "1", img: "", url: "/works/sumashin", text: "あああああああああああああああああああああああああああああああああああああああああああああ", innerComponent: new Works2({})},
];

export default works;

