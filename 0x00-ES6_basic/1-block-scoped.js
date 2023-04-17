/**
 * modify the variables inside the function taskBlock so that the variables aren’t 
 * overwritten inside the conditional block.
 */
export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    //using conditional statement if
    if (trueOrFalse) {
        return [task, task2];
    }
    
    return [task, task2];
}

