function Carrossel({next, prev, width, container}) {
    this.next = next;
    this.prev = prev;
    this.width = width;

    document.addEventListener('click', e => {
        if (e.target === this.next) scroll(width);
        if (e.target === this.prev) scroll(width * -1);
    });

    function scroll(value) {
        container.scrollBy(value, 0);
    }
}