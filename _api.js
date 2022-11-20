const apiURL = 'http://localhost:5000/tasks';

export const fetchTasks = async () => {
    return fetch(apiURL).then(res => res.json());
}

export const postTask = async ({title, description, date}) => {
    const request = await fetch(apiURL, {
        method: 'post',
        headers: {
            "Content-Type" : "application/json;charset=utf-8"
        },
        body: JSON.stringify({title, description, date})
    })

    console.log(request)
}