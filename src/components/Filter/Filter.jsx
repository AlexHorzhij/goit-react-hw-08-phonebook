import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectorsFilter';
import setFilter from 'redux/filter/actionsFilter';
import { TextField } from '@mui/material';

export function Filter() {
    const serchName = useSelector(selectFilter);
    const dispatch = useDispatch();

    const findContact = (e) => {
        const serchName = e.target.value;
        dispatch(setFilter(serchName));
    };

    return <>
            <TextField label='Find contacts by name' type='search' fullWidth value={serchName} onChange={findContact} sx={{mb:2}}/>
        </>
};



        // <Typography component="h3" variant="h5">Find contacts by name</Typography>
        // {/* <SelectTitle> Find contacts by name</SelectTitle>  */}
        // <FilterWrapper>
        //     <TextField label='Search' variant='standard' type='search' fullWidth value={serchName} onChange={findContact}/>
        //     {/* <SelectInput type="text" name="serch" value={serchName} onChange={findContact} ></SelectInput>
        //     <Button onClick={clearSearch}>X</Button> */}
        // </FilterWrapper>
