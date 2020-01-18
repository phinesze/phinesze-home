import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import style from "./WorksDetail.css";
import MainButton from "../../atoms/MainButton/index";
import { Work } from "../../../data/works";
import ImageViewer from "../../molecules/ImageViewer/index";
import DecoratedBlock from "../../atoms/DecoratedBlock/index";

interface WorksDetailProps extends RouteComponentProps {
  data: Work[];
  url: string;
  onBack: () => void;
}

interface WorksDetailState {
  opening: boolean;
  closing: boolean;
  showImage: boolean;
  imageIndex: number;
}

/**
 * Worksの各アイテムクリック時に表示されるオーバーレイウィンドウ
 */
class WorksDetail extends React.Component<WorksDetailProps, WorksDetailState> {
  get selectedItem(): Work | undefined {
    const path: string = this.props.history.location.pathname;
    return this.props.data.find(e => e.url == path);
  }

  /**
   * テキストを取得する。
   */
  get text(): string | undefined {
    const selectedItem = this.selectedItem;
    return selectedItem !== undefined ? selectedItem.text : "";
  }

  /**
   * 初期化する。
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      opening: true,
      closing: false,
      showImage: false,
      imageIndex: 0,
    };
  }

  /**
   * トップ画面に戻る。
   */
  back(): void {
    this.setState({ closing: true });
    window.setTimeout(() => {
      this.props.history.push("/");
    }, 500);
  }

  showLightbox(imageIndex: number): void {
    this.setState({
      showImage: true,
      imageIndex: imageIndex,
    });
  }

  /**
   * 出力する。
   */
  render(): JSX.Element {
    const images = this.selectedItem != null ? this.selectedItem.detail.images : null;

    return (
      <>
        <section className={style.worksDetail + (this.state.closing ? ` ${style.closing}` : "")}>
          <DecoratedBlock>
            <h1 className={style.worksDetailInnerText}>{this.text}</h1>
          </DecoratedBlock>

          {images !== null && <ImageViewer images={images} />}

          <div>
            {this.selectedItem != null && (
              <dl>
                {this.selectedItem.detail.descriptions.map(detail => {
                  return (
                    <React.Fragment key={detail.text}>
                      <dt>{detail.title}</dt>
                      <dd>{detail.text}</dd>
                    </React.Fragment>
                  );
                })}
              </dl>
            )}
          </div>
        </section>
        {!this.state.closing && <MainButton type="button" text="閉じる" onClick={(): void => this.back()} />}
      </>
    );
  }
}

export default withRouter(WorksDetail);
