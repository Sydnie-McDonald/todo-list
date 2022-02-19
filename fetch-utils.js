const SUPABASE_URL = 'https://gmpyleofggphhfqygglb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcHlsZW9mZ2dwaGhmcXlnZ2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NTEsImV4cCI6MTk1OTkxNzQ1MX0.aAoG-W_B2pk78Kdb54K8sM3SQbO0g1kbGUOtqvvQhXA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createTodo(todo) {
    // create a single incomplete todo with the correct 'todo' property for this user in supabase
    const response = await client
        .from('todos')
        .insert({
            todo: todo,
            complete: false,
            user_id: client.auth.user().id,
        })
        .single();
    return checkError(response);
}

export async function deleteAllTodos() {
    // delete all todos for this user in supabase
    const response = await client
        .from('todos')
        .delete()
        .match({ user_id: client.auth.user().id, });
    return checkError(response);
}

export async function getTodos() {
    // get all todos for this user from supabase
    const response = await client
        .from('todos')
        .select()
        .order('complete')
        .match({ user_id: client.auth.user().id, });

    return checkError(response);
}

export async function completeTodo(id) {
    // find the and update (set complete to true), the todo that matches the correct id
    const response = await client
        .from('todos')
        .update({ complete: true })
        .match({
            user_id: client.auth.user().id,
            id: id,
        });
    return checkError(response);
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./todos');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
