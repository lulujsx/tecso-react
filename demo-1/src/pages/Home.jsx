import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    const navigate = useNavigate();

    function goToCards() {
        navigate('/cards');
    }

    return(
        <div>
            <button onClick={goToCards}>Go to cards</button>
        </div>
    )
}