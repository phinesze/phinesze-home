import React from "react";
import style from "./ImageViewer.css";

import Slider from "react-slick";

interface Props {
  /**
   * 表示する画像のURLの配列
   */
  images: string[];
}

interface State {
  /**
   * プレビューを表示するか否か
   */
  showPreview: boolean;

  /**
   * 画像の表示インデックス
   */
  imageIndex: number;
}

/**
 * 複数の画像を表示してプレビューする要素
 */
export default class ImageViewer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imageIndex: 0,
      showPreview: false,
    };
  }

  render(): JSX.Element {
    const slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={style.imageList}>
        <Slider {...slickSettings}>
          {this.props.images.map((img, index) => (
            <img
              key={index.toString()}
              className={style.image}
              src={img}
              alt={index.toString()}
              onClick={(): void => {
                this.setState({
                  showPreview: true,
                  imageIndex: index,
                });
              }}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
