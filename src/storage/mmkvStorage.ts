import { MMKV } from 'react-native-mmkv';


export const storage = new MMKV();


//get All Tasks
export const getTasks = (): string[] => {
    const json = storage.getString('tasks');
    return json ? JSON.parse(json) : [];
};



export const setTasks = (tasks : string[]) => {
    storage.set('tasks', JSON.stringify(tasks));
};
