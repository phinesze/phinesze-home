import React from "react"
import style from "./ImageViewer.css"

interface ImageViewerProps {

    /**
     * 表示する画像のURLの配列
     */
    images: string[]
}

interface ImageViewerState {

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
export default class ImageViewer extends React.Component<ImageViewerProps , ImageViewerState> {

    constructor(props: ImageViewerProps) {
        super(props);

        this.state = {
            imageIndex: 0,
            showPreview: false
        }
    }

    render(): JSX.Element {

        return <div>
            <div className={style.imageList}>
                {this.props.images.map((img, index) =>
                    <img
                        key={index.toString()}
                        className={style.image}
                        src={img}
                        alt={index.toString()}
                        onClick={() => {
                            this.setState({
                                showPreview: true,
                                imageIndex: index
                            });
                        }}
                    />)}
            </div>
        </div>;
    }
}