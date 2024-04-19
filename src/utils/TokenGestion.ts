export const base_url = "https://tradinggame-api.oups.net";
export let token = "";



export async function fetchWithToken(url: string, options: any) {

    options.headers.Authorization = `Bearer ${token}`; 
    const response = await fetch(url, options);
    return response

}

export function setToken(newToken: string) {
    token = newToken;
}