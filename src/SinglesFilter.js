
import { SinglesFilterContainer} from './styles/SinglesFilter.styled';

const SinglesFilter = (props) => {

    function onFilterChanged(event){
        props.filterSelected(event.target.value)
    }

    return (
        <SinglesFilterContainer>
            <select onChange = {onFilterChanged}>
                <option value = "all">ALL</option>
                <option value = "IV OF SPADES">IV OF SPADES</option>
                <option value = "Unique Salonga">Unique Salonga</option>
                <option value = "Zild Benitez">Zild Benitez</option>
                <option value = "Blaster Silonga">Blaster Silonga</option>
            </select>
        </SinglesFilterContainer>
    )
}

export default SinglesFilter;