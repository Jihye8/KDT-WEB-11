import React from 'react'

import { useForm } from 'react-hook-form';

export default function FormEx() {
    const {register, handleSubmit, formState : {errors} }= useForm();
    const onValid = (data) =>{
        console.log('onValid', data)
    }
    const onInvalid = (err) =>{
        console.log('onValid',err)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
                <input type="text" placeholder='이름' {...register('name', {required:'이름을 입력해주세요'})}/>
                <br />
                {errors.name?.message}
                <br />
                <input type="number" placeholder='나이' {...register('age', {required:'나이를 입력해주세요'})}/>
                <br />
                {errors.age?.message}
                <br />
                <button type='submit'>제출</button>
            </form>
        </div>
    )
}
