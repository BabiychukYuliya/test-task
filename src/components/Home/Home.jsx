import Twitter from '../../images/Twitter.jpg';
import { Wrapper, Img, Text } from './Home.styled';

const Home = () => {
    return (
        <>
            <Wrapper>
                <Text>Welcome!!!</Text>
                <Img src={Twitter} alt='twitter'/>
            </Wrapper>
        </>
)
}

export default Home;