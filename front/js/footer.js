// Custom language select logic
    const customSelect = document.querySelector('.custom-language-select');
    const arrow = customSelect.querySelector('.language-arrow svg');
    const options = customSelect.querySelector('.language-options');
    const selected = customSelect.querySelector('.selected-language');
    let open = false;

    customSelect.addEventListener('click', function(e) {
        open = !open;
        if (open) {
            options.classList.add('open');
            arrow.style.transform = 'rotate(180deg)';
        } else {
            options.classList.remove('open');
            arrow.style.transform = 'rotate(0deg)';
        }
    });
    options.querySelectorAll('li').forEach(function(li) {
        li.addEventListener('click', function(e) {
            selected.textContent = li.textContent;
            open = false;
            options.classList.remove('open');
            arrow.style.transform = 'rotate(0deg)';
        });
    });
    // Cierra el menú si se hace click fuera
    document.addEventListener('click', function(e) {
        if (!customSelect.contains(e.target)) {
            open = false;
            options.classList.remove('open');
            arrow.style.transform = 'rotate(0deg)';
        }
    });