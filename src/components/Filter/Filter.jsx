import { SelectTitle, SelectInput, FilterWrapper, Button } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectorsFilter';
import setFilter from 'redux/filter/actionsFilter';

export function Filter() {
    const serchName = useSelector(selectFilter);
    const dispatch = useDispatch();

    const findContact = (e) => {
        const serchName = e.target.value;
        dispatch(setFilter(serchName));
    };

    const clearSearch = () => {
        dispatch(setFilter(""));
    };


    return <><SelectTitle> Find contacts by name</SelectTitle> 
        <FilterWrapper>
            <SelectInput type="text" name="serch" value={serchName} onChange={findContact} ></SelectInput>
            <Button onClick={clearSearch}>X</Button>
        </FilterWrapper>
        </>
};