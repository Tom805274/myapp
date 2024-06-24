import { message } from 'antd';
import {extend} from 'umi-request';

interface DataType {
    code: number;
    status: number;
    success: boolean;
    data: any;
}

// 配置request请求时的默认参数
const extendRequest = extend({
    credentials: 'include'
})
extendRequest.interceptors.request.use((url: string, options: any) =>{
    return{
        url,
        options
    }
})

// 运行时配置
export default function request(url: string, options?:any) {
    return extendRequest<DataType>(url,options).then((data: any) =>{
        if(data?.code === 200){
            return data.data
        }else{
            message.error(data?.msg)
        }
        return false
    })
    
}