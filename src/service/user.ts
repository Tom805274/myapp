import {request} from "@/utils";

// 注册接口
export function registerUser(data: any) {
    return request('/api/addUser',{
        method: 'POST',
        data
    })
};

// 登陆接口
export function login(data: any) {
    return request('/api/login',{
        method: 'POST',
        data
    })
}