import { Rings } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Loader = () => {
    return (
        <Rings
            height="80"
            width="80"
            radius="9"
            color='green'
            ariaLabel='three-dots-loading'
            wrapperStyle
            wrapperClass
        />
    )
}

export default Loader