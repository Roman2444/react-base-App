import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                placeholder="Поиск..."
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={(e) => setFilter({...filter, sort: e})}
                defaultValue="сортировка"
                options={[
                    { name: "по названию", value: "title" },
                    { name: "по описанию", value: "body" },
                ]}
            />
        </div>
    );
};

export default PostFilter;