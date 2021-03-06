import Api from "./Api";


class CategoriaService {
    async index(param) {
        try {
            const response = await Api.get(`/api/categorias?&${param}`);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }

    async getAll() {
        try {
            const response = await Api.get("/api/categorias/listAllCategories/1");
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }

    async show(id) {
        try {
            const response = await Api.get(`/api/categorias/${id}`);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }

    async create(data) {
        try {
            const response = await Api.post("/api/categorias", data);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }

    async update(id, data) {
        try {
            const response = await Api.put(`api/categorias/${id}`, data);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }

    async destroy(id) {
        try {
            const response = await Api.delete(`/api/categorias/${id}`);
            return [response.data, false];
        } catch (error) {
            return [null, error];
        }
    }
}

export default new CategoriaService;