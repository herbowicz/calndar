function calendar(year = new Date().getFullYear()) {

    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const title = document.createElement('h1');
    title.innerHTML = year;
    document.body.appendChild(title);

    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    months.forEach((name, month) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        container.appendChild(wrapper);

        const title = document.createElement('h2');
        title.innerHTML = `${name}`;
        wrapper.appendChild(title);

        const content = document.createElement('ol');
        wrapper.appendChild(content);

        weekdays.forEach(day => {
            li = document.createElement('li');
            li.classList.add('day-name');
            li.innerHTML = day;
            content.appendChild(li);
        });

        for (i = 1; i <= new Date(year, month + 1, 0).getDate(); ++i) {
            li = document.createElement('li');
            if(i === 1) li.classList.add('first-day');
            li.innerHTML = i;
            content.appendChild(li);
        }

        const firstDay = document.querySelectorAll('.first-day')[month];
        firstDay.style.setProperty('--start', new Date(year, month, 0).getDay() + 1);
    });
}

module.exports.calendar = calendar