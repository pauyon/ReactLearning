import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if (enteredTitle.trim() === '' || 
            enteredDescription.trim() === '' || 
            enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
        <Modal ref={modal} buttonLabel="OK">
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
            <p className='text-stone-600 mb-4'>Please provide value for all fields.</p>
        </Modal>
        <div className='w-[35rem] mt-16'>
            <div>
                <Input type="text" ref={titleRef} label="Title" />
                <Input ref={descriptionRef} label="Description" textArea />
                <Input type="date" ref={dueDateRef} label="Due Date" />
            </div>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li>
                    <button 
                        className='text-stone-800 hover:text-stone-950' 
                        onClick={onCancel}>
                        Cancel
                    </button>
                </li>
                <li>
                    <button 
                        className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
                        onClick={handleSave}>
                        Save
                    </button>
                </li>
            </menu>
        </div>
        </>
    );
}