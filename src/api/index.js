import axios from "axios";

const baseUrl = "/api";

// axios二次封装的核心逻辑

class HttpRequest{
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            header: {}
        };
        return config;
    }
    request(options){
        options = {...this.getInsideConfig(),...options}
        //  创建axios的实例
        const instance =axios.create()
        // 实例拦截器的绑定
        this.interceptions(instance)
        return instance(options)
    }

    interceptions(instance){
        //  请求拦截
        instance.interceptors.request.use(config=>{
            return config
        },error=>{
            return Promise.reject(error)
        })
        //  响应拦截
        instance.interceptors.response.use(res=>{
            return res
        },error=>{
            return Promise.reject(error)
        })
    }
}

export default new HttpRequest(baseUrl);