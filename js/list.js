function List({btn, list, maxWidth}) {
    let _this = this;
    let _open = false;
    this.btn = btn === 'string' ? document.querySelector(btn) : btn;
    this.list = list === 'string' ? document.querySelector(list) : list;
    this.maxWidth = maxWidth || false;

    this.btn.addEventListener('click', openOrClose); 
    window.addEventListener('resize', () => {
        if (innerWidth >= maxWidth) _this.list.removeAttribute('style');
        if (innerWidth < maxWidth && !_this.list.getAttribute('style')) {
            _open = false;
            closeList();
        };
    });


    function openOrClose() {
        _open = !_open;
        _open ? openList() : closeList();
    }

    function openList() {
        _this.list.style.display = 'block';
    }

    function closeList() {
        _this.list.style.display = 'none';
    }

}