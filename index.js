function calendar(
    year = new Date().getFullYear(),
    fontFamily = 'Courier',
) {

    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = new Array(12).fill().map((_, i) => new Date(2022, i, 1).toLocaleString('default', { month: 'long' }));
        

    document.body.style.fontFamily = fontFamily;

    const title = document.createElement('h1');
    title.innerHTML = year;
    title.style.textAlign = 'center';
    document.body.appendChild(title);

    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(320px, 1fr))';
    document.body.appendChild(container);

    months.forEach((name, month) => {
        const wrapper = document.createElement('div');
        wrapper.style.margin = '1em';
        container.appendChild(wrapper);

        const title = document.createElement('h2');
        title.innerHTML = name;
        title.style.textAlign = 'center';
        wrapper.appendChild(title);

        const content = document.createElement('ol');
        content.style.display = 'grid';
        content.style.gridTemplateColumns = 'repeat(7, 1fr)';
        content.style.listStyle = 'none';
        content.style.margin = 0;
        content.style.padding = 0;

        wrapper.appendChild(content);

        weekdays.forEach(day => {
            li = document.createElement('li');
            li.style.background = '#eee';
            li.innerHTML = day;
            content.appendChild(li);
        });

        for (i = 1; i <= new Date(year, month + 1, 0).getDate(); ++i) {
            li = document.createElement('li');
            if(i === 1) li.style.gridColumnStart = new Date(year, month, 0).getDay() + 1;
            li.innerHTML = i;
            li.addEventListener('mouseover', function() {
                this.style.background = 'lightyellow';
                this.style.fontWeight = 'bold';
                this.style.border = '1px solid #333';
            });
            li.addEventListener('mouseleave', function() {
                this.style.background = 'none';
                this.style.fontWeight = 'normal';
                this.style.border = '1px solid #eee';
            });
            content.appendChild(li);
        }
    });

    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
        li.style.padding = '7px';
        li.style.textAlign = 'center';
        li.style.border = '1px solid #eee';
        li.style.userSelect = 'none';
    });
}

module.exports.calendar = calendar
