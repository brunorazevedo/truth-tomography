import { WrapperVideo } from "./stylesVideo";

export default function RenderVideo({ file }) {
    return (
        <WrapperVideo>
            <iframe src={file.video}></iframe>
        </WrapperVideo>
    )
}
