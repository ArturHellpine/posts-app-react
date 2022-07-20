import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder={'Пошук...'}
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
            />
            <MySelect
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                value={filter.sort}
                defaultValue={'Сортувати по'}
                options={[
                    {value: 'title', name: 'По назві'},
                    {value: 'body', name: 'По опису'}
                ]}
            />
        </div>
    );
};

export default PostFilter;