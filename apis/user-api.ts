/* tslint:disable */
/* eslint-disable */
/**
 * She Leads Africa API
 * She Leads Africa API. Combined endpoint of all services provided.
 *
 * OpenAPI spec version: v0
 * Contact: olpie101@github.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ChangePIN } from '../models';
import { ChangePINResponse } from '../models';
import { FinanceDetailsByIdResponse } from '../models';
import { GetUserProfilesFromListResponse } from '../models';
import { PinByIdResponse } from '../models';
import { ProblemDetails } from '../models';
import { UpdateFinance } from '../models';
import { UpdateFinanceResponse } from '../models';
import { UpdatePassword } from '../models';
import { UpdatePasswordResponse } from '../models';
import { UpdateProfile } from '../models';
import { UpdateProfilePictureResponse } from '../models';
import { UpdateProfileResponse } from '../models';
import { UpdateSecurityQuestion } from '../models';
import { UpdateSecurityQuestionResponse } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFinanceProfile: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/finance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPinHash: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/pin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [ids] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserProfiles: async (ids?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/directory`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateFinance} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFinanceProfile: async (body?: UpdateFinance, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/finance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ChangePIN} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePIN: async (body?: ChangePIN, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/pin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdatePassword} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePassword: async (body?: UpdatePassword, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateProfile} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile: async (body?: UpdateProfile, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/profile`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateSecurityQuestion} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSecurityQuestion: async (body?: UpdateSecurityQuestion, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/security-question`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadProfilePicture: async (file?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFinanceProfile(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FinanceDetailsByIdResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).getFinanceProfile(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPinHash(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PinByIdResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).getPinHash(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [ids] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserProfiles(ids?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserProfilesFromListResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).getUserProfiles(ids, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateFinance} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFinanceProfile(body?: UpdateFinance, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateFinanceResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).updateFinanceProfile(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ChangePIN} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePIN(body?: ChangePIN, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChangePINResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).updatePIN(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdatePassword} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePassword(body?: UpdatePassword, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdatePasswordResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).updatePassword(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateProfile} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProfile(body?: UpdateProfile, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateProfileResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).updateProfile(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateSecurityQuestion} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSecurityQuestion(body?: UpdateSecurityQuestion, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateSecurityQuestionResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).updateSecurityQuestion(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadProfilePicture(file?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateProfilePictureResponse>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).uploadProfilePicture(file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFinanceProfile(options?: any): AxiosPromise<FinanceDetailsByIdResponse> {
            return UserApiFp(configuration).getFinanceProfile(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPinHash(options?: any): AxiosPromise<PinByIdResponse> {
            return UserApiFp(configuration).getPinHash(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [ids] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserProfiles(ids?: string, options?: any): AxiosPromise<GetUserProfilesFromListResponse> {
            return UserApiFp(configuration).getUserProfiles(ids, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateFinance} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFinanceProfile(body?: UpdateFinance, options?: any): AxiosPromise<UpdateFinanceResponse> {
            return UserApiFp(configuration).updateFinanceProfile(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ChangePIN} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePIN(body?: ChangePIN, options?: any): AxiosPromise<ChangePINResponse> {
            return UserApiFp(configuration).updatePIN(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdatePassword} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePassword(body?: UpdatePassword, options?: any): AxiosPromise<UpdatePasswordResponse> {
            return UserApiFp(configuration).updatePassword(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateProfile} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile(body?: UpdateProfile, options?: any): AxiosPromise<UpdateProfileResponse> {
            return UserApiFp(configuration).updateProfile(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateSecurityQuestion} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSecurityQuestion(body?: UpdateSecurityQuestion, options?: any): AxiosPromise<UpdateSecurityQuestionResponse> {
            return UserApiFp(configuration).updateSecurityQuestion(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadProfilePicture(file?: string, options?: any): AxiosPromise<UpdateProfilePictureResponse> {
            return UserApiFp(configuration).uploadProfilePicture(file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getFinanceProfile(options?: any) {
        return UserApiFp(this.configuration).getFinanceProfile(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getPinHash(options?: any) {
        return UserApiFp(this.configuration).getPinHash(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [ids] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserProfiles(ids?: string, options?: any) {
        return UserApiFp(this.configuration).getUserProfiles(ids, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateFinance} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updateFinanceProfile(body?: UpdateFinance, options?: any) {
        return UserApiFp(this.configuration).updateFinanceProfile(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ChangePIN} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updatePIN(body?: ChangePIN, options?: any) {
        return UserApiFp(this.configuration).updatePIN(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdatePassword} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updatePassword(body?: UpdatePassword, options?: any) {
        return UserApiFp(this.configuration).updatePassword(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateProfile} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updateProfile(body?: UpdateProfile, options?: any) {
        return UserApiFp(this.configuration).updateProfile(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateSecurityQuestion} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updateSecurityQuestion(body?: UpdateSecurityQuestion, options?: any) {
        return UserApiFp(this.configuration).updateSecurityQuestion(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public uploadProfilePicture(file?: string, options?: any) {
        return UserApiFp(this.configuration).uploadProfilePicture(file, options).then((request) => request(this.axios, this.basePath));
    }
}
