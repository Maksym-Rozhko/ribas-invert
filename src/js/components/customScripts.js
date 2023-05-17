const inputNumberElems = document.querySelectorAll('.form .input-number');

const onlyDigitsEnterInput = (inputElems) => {
    if (inputElems) {
        inputElems.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace (/\D/, '');
            });
        });
    }
};

onlyDigitsEnterInput(inputNumberElems);

const footerYearSpans = document.querySelectorAll('.footer .footer__copyright strong span');

if (footerYearSpans) {
    const date = new Date();
    const year = date.getFullYear();

    footerYearSpans.forEach(span => {
        span.textContent = year;
    });
}

setTimeout(() => {
    if (document.querySelector('.preloader')) {
        document.querySelector('.preloader').classList.add('preloader-hide');
    }
}, 3000);

setTimeout(() => {
    if (document.querySelector('.preloader')) {
        document.querySelector('.preloader').remove();
    }
}, 5000);


const footerYearSpan = document.querySelector('.footer strong span');

if (footerYearSpan) {
    const date = new Date();
    const year = date.getFullYear();

    footerYearSpan.textContent = year;
}
