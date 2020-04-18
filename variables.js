let inputs = document.querySelectorAll('input');

function handleUpdate() {
    let index = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + index);

}

inputs.forEach(input => input.addEventListener('input', handleUpdate));