new Swiper('.options', {
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 2,
    mousewheel: {
        sensitivity: 2,
    },
});
document.addEventListener('DOMContentLoaded',()=>{
    const name = document.getElementById('office__name')
    const nameInner = document.querySelector('.enter-office__name')
    const nameBtn = document.querySelector('.enter-office__name button')
    name.addEventListener('input', (i)=>{
        const value = i.target.value
        localStorage.setItem('name', value)
    })
    name.value = localStorage.getItem('name')
    nameBtn.addEventListener('click', ()=>{
        name.setAttribute('readonly', true)
        const editNameBtn = document.createElement('button')
        editNameBtn.classList.add('edit-name__btn')
        editNameBtn.textContent = 'Изменить'
        nameInner.replaceChild(editNameBtn, nameBtn)
        editNameBtn.addEventListener('click', ()=>{
            name.removeAttribute('readonly', true)
            nameInner.replaceChild(nameBtn, editNameBtn)
            name.focus()
        })
    })
    if (name.value) {
        name.setAttribute('readonly', true)
        const editNameBtn = document.createElement('button')
        editNameBtn.classList.add('edit-name__btn')
        editNameBtn.textContent = 'Изменить'
        nameInner.replaceChild(editNameBtn, nameBtn)
        editNameBtn.addEventListener('click', ()=>{
            name.removeAttribute('readonly', true)
            nameInner.replaceChild(nameBtn, editNameBtn)
            name.focus()
        })
    }

    const phone = document.getElementById('office__phone')
    phone.value = localStorage.getItem('mainPhone')
    const phoneBtn = document.querySelector('.enter-office__phone button')
    phoneBtn.addEventListener('click', ()=>{
        localStorage.setItem('phoneActive', 'active')
        window.location.href = 'index.html'
    })

    const dateInputs = document.querySelectorAll('.enter-office__date input')
    const saveButton = document.getElementById('office__date-btn');
    const dateInner = document.querySelector('.enter-office__date')
    // const areInputsFilled = () => {
    //     return Array.from(dateInputs).every(input => input.value.length === 2);
    // };
    let allInputsFilled = true;
    dateInputs.forEach((input, index) => {
        const savedValue = localStorage.getItem(`dateInput${index}`);
        if (savedValue) {
            input.value = savedValue;
            input.setAttribute('readonly', true);
        } else {
            allInputsFilled = false;
        }
    });
    if (allInputsFilled) {
        const editDateBtn = document.createElement('button');
        editDateBtn.textContent = 'Изменить';
        editDateBtn.classList.add('edit-date__btn');
        dateInner.replaceChild(editDateBtn, saveButton);

        editDateBtn.addEventListener('click', (e) => {
            e.preventDefault();
            dateInputs.forEach(input => {
                input.removeAttribute('readonly');
            });
            dateInner.replaceChild(saveButton, editDateBtn);
            dateInputs[0].focus();
        });
    }
    const validInput = (input)=>{ return input.value.length === 2 }
    dateInputs.forEach((input, index)=>{
        input.addEventListener('input', (i)=>{
            const value = i.target.value
            i.target.value = value.replace(/\D/g, '')
            localStorage.setItem(`dateInput${index}`, value);
        })
    })
    saveButton.addEventListener('click', ()=>{
        let allValid = true
        dateInputs.forEach(input => {
            if (!validInput(input)) {
                allValid = false
                input.style.border = '1.5px solid rgb(109, 109, 109);'
            } else {
                input.style.border = '2px solid rgba(227, 236, 245, 1);'
            }
        })
        if (allValid) {
            dateInputs.forEach(input => {
                input.setAttribute('readonly', true)
            })
            const editDateBtn = document.createElement('button')
            editDateBtn.textContent = 'Изменить'
            editDateBtn.classList.add('edit-date__btn')
            dateInner.replaceChild(editDateBtn, saveButton)
            editDateBtn.addEventListener('click', (i)=>{
                i.preventDefault()
                dateInputs.forEach(input => {
                    input.removeAttribute('readonly')
                })
                dateInner.replaceChild(saveButton, editDateBtn)
                dateInputs[0].focus()
            })
        } else {
            alert('Неправильно введены данные, введите по 2 цифры в каждое поле.')
        }

    })  
    const code = document.getElementById('office__code')
    code.value = localStorage.getItem('code')
    const codeBtn = document.querySelector('.enter-office__code button')
    codeBtn.addEventListener('click', ()=>{
        localStorage.setItem('codeActive', 'active')
        window.location.href = 'index.html'
    })
})
