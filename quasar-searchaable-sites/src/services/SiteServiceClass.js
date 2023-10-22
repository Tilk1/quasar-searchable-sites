import axios from "axios";

class SiteService{
    constructor(){
        let service = axios.create({baseURL:'http://localhost:3000'})
        this.service = service
    }

    getsites() {
        return new Promise((resolve, reject) => {
            this.service.get('/sitios')
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    get(id){
        return new Promise((resolve,reject) => {
            this.service.get(`/sitios/${id}`).then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject) => {
            this.service.delete('/sites/${id}').then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    create(payload){
        return new Promise((resolve,reject) => {
            this.service.post('/sites',payload).then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

}


export default SiteService;
