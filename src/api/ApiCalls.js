export const getItem = (slug, setter) => {
    fetch('../data.json')
            .then(res => res.json())
            .then(data => setter(data.filter(item => item.slug === slug)))
}

export const getItems = async () => {
    const response = await fetch('../data.json')
    if (!response.ok) {
        throw new Error('Response not found')
    }
    return response.json();
}

