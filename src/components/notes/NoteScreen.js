import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
        />
        <textarea
          placeholder='What happened today?'
          className='notes__textarea'
        ></textarea>
        <div className='notes__image'>
          <img
            src='http://vertigomag.co.uk/wp-content/uploads/2017/11/anna_knyazeva.jpg'
            alt='imagen'
          />
        </div>
      </div>
    </div>
  );
};
