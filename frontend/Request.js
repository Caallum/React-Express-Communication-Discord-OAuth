export default async function Request(route) {
    let data = await fetch(route);
    data = await data.json();
    
    return data;
}
