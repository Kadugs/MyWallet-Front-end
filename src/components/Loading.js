import ReactLoading from 'react-loading';

const ButtonLoading = () => (
    <ReactLoading 
        type="spinningBubbles" 
        color="white" 
        height="40px" 
        width="40px" 
        className="button-loading"
    />
)

const MainScreenLoading = () => (
    <ReactLoading 
        type="spinningBubbles" 
        color="gray" 
        height="60px" 
        width="60px" 
        className="main-screen-loading"
    />
)

export {
    ButtonLoading,
    MainScreenLoading,
}