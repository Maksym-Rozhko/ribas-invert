const scrollAnimation = endElem => {
    const elem = document.querySelector(endElem);

    const observer = new IntersectionObserver(
        entries => {
            entries[0].isIntersecting ? elem.previousElementSibling.classList.add('animated') : elem.previousElementSibling.classList.remove('animated');
        },
        {
            rootMargin: '100px',
        },
    );

    try {
        observer.observe(elem);
    } catch (error) {}
};

// scrollAnimation('.elem .elem');

const scrollStepsAnimation = endElem => {
    const stepsContainer = document.querySelector('.steps .steps__container');
    const elem = document.querySelector(endElem);

    const observer = new IntersectionObserver(
        entries => {
            entries[0].isIntersecting ? elem.classList.add('step--active') : elem.classList.remove('step--active');
            if (elem.classList.contains('step--active')) {
                stepsContainer.classList.add(elem.classList[1]);
            } else {
                stepsContainer.classList.remove(elem.classList[1]);
            }
        },
        {
            rootMargin: '-200px',
        },
    );

    try {
        observer.observe(elem);
    } catch (error) {}
};

scrollStepsAnimation('.steps .step--one');
scrollStepsAnimation('.steps .step--two');
scrollStepsAnimation('.steps .step--three');
scrollStepsAnimation('.steps .step--four');

