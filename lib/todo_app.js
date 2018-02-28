const updateTodo = (e) => {
  e.preventDefault();
  $k(e.target.parentNode);
  $k(e.target.parentNode).html(`${$k('.edit-input').nodeValues()}`);
  $k('.edit').on('click', showEditInput);
};
// add a cancel button later
const showEditInput = (e) => {
  e.preventDefault();
  $k('.edit').off('click');
  $k($k(e.target.parentNode).find('.real-title')[0])
  .append(`<input class="edit-input" />
  <button class='finish-edit'>Edit</button>`)
  $k('.finish-edit').on('click', updateTodo);
}

const deleteTodo = (e) => {
  e.preventDefault();
  $k(e.target.parentNode).remove();
};

const createTodo = (e) => {
  e.preventDefault();
  let title = $k('.title-input').nodeValues();
  $k('.todo-lists').append(`
    <div class="title-container">
      <h2 class="real-title">${title} </h2>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>

    </div>
    `);
  $k('.edit').on('click', showEditInput);
  $k('.delete').on('click', deleteTodo);

  $k('.title-input').htmlValue('');

};


$k('input').attr('type', 'text');

$k(() => $k('form').on('submit', createTodo));
