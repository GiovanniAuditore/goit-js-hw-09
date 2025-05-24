const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Начальное значение объекта с данными формы
let formData = {
  email: '',
  message: '',
};

// 1. Проверка: если в localStorage уже есть сохранённые данные — восстановить их
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

// 2. Обработчик ввода — обновляем formData и сохраняем в localStorage
form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3. Обработчик отправки формы
form.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Отправка данных:', formData);

  // Очистка
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
});