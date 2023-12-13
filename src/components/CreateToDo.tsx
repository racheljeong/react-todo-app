import { useForm } from "react-hook-form";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import { IToDo } from "../atoms"

interface IDataForm {
    toDo : string;
}


function CreateToDo() {

    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {register, handleSubmit, setValue} = useForm<IDataForm>();

    const validFn = ({toDo} : IDataForm) => {
        setToDos(oldToDos => [{ text: toDo, id: Date.now(), category },
            ...oldToDos,
          ]); //spread연산으로 배열안 요소를 리턴
        setValue("toDo", ""); 
    }

    return (
        <form onSubmit={handleSubmit(validFn)}>
            <input {...register("toDo",{required : "Plz add to Do"})}
                placeholder="Write what to do"/> 
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;