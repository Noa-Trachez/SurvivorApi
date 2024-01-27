async function request(id) {
    await fetch('http://localhost:3000/api/employees/' + id + '/image');
}

function createImage() {
    let id = 1;
    setInterval(() => {
        console.log('here');
        request(id);
        if (id === 50)
            throw new Error('Error');
        id++;
    }, 1000);
}

createImage();
