import axios from 'axios';

const http  = axios.create({
    baseURL: 'http://localhost:5001/api'
});

export const api = {
    getAllNotes:  async () => {
        const res = await http.get('/listar/tarefas');
        return res.data;
    },
    insertNote: async (titulo: string) => {
        const formData = new URLSearchParams();
        formData.append("titulo", titulo);
        
        const req = await fetch("http://localhost:5001/api/tarefa", {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        });

        const json = await req.json();
        return json.item;
    },
}