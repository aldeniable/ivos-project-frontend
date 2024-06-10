
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const TopStreamsFilter = (props) => {
    
    function onFilterChanged(event){
        props.filterSelected(event.target.value)
    }

    return (
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Artist</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange = {onFilterChanged}
                >
                    <MenuItem  value = "all">ALL</MenuItem >
                    <MenuItem  value = "IV OF SPADES">IV OF SPADES</MenuItem >
                    <MenuItem  value = "Unique Salonga">Unique Salonga</MenuItem >
                    <MenuItem  value = "Zild Benitez">Zild Benitez</MenuItem >
                    <MenuItem  value = "Blaster Silonga">Blaster Silonga</MenuItem >
                </Select>
            </FormControl>
        
    )
}

export default TopStreamsFilter;