import RenderPdf from "./renderPDF";
import RenderVideo from "./renderVideo";

export default function Controls({ content }) {
    const { control, file } = content

    return (
        <>
            {
                control.toLowerCase() === "pdf" 
                    ? <RenderPdf file={file} />
                    : <RenderVideo file={file} />
            }
        </>
    )
}
