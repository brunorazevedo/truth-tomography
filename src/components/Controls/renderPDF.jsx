import { WrapperIMG} from './stylesIMG'

export default function RenderPdf({ file }) {
    return (
        <WrapperIMG>
            {file.images.map((image) => (
                <>
                    <img src={image.path} alt="" />
                </>
            ))}
        </WrapperIMG>
    )
}
