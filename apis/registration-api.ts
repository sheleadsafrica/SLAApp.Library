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
import { BeginVerification } from '../models';
import { BeginVerificationResponse } from '../models';
import { CompleteVerification } from '../models';
import { CompleteVerificationResponse } from '../models';
import { ProblemDetails } from '../models';
/**
 * RegistrationApi - axios parameter creator
 * @export
 */
export const RegistrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {BeginVerification} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        beginPhoneVerification: async (body?: BeginVerification, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/registration/verification/begin`;
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
         * @param {CompleteVerification} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completePhoneVerification: async (body?: CompleteVerification, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/registration/verification/confirm`;
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
    }
};

/**
 * RegistrationApi - functional programming interface
 * @export
 */
export const RegistrationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {BeginVerification} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async beginPhoneVerification(body?: BeginVerification, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BeginVerificationResponse>> {
            const localVarAxiosArgs = await RegistrationApiAxiosParamCreator(configuration).beginPhoneVerification(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CompleteVerification} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async completePhoneVerification(body?: CompleteVerification, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompleteVerificationResponse>> {
            const localVarAxiosArgs = await RegistrationApiAxiosParamCreator(configuration).completePhoneVerification(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RegistrationApi - factory interface
 * @export
 */
export const RegistrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {BeginVerification} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        beginPhoneVerification(body?: BeginVerification, options?: any): AxiosPromise<BeginVerificationResponse> {
            return RegistrationApiFp(configuration).beginPhoneVerification(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CompleteVerification} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completePhoneVerification(body?: CompleteVerification, options?: any): AxiosPromise<CompleteVerificationResponse> {
            return RegistrationApiFp(configuration).completePhoneVerification(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RegistrationApi - object-oriented interface
 * @export
 * @class RegistrationApi
 * @extends {BaseAPI}
 */
export class RegistrationApi extends BaseAPI {
    /**
     * 
     * @param {BeginVerification} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistrationApi
     */
    public beginPhoneVerification(body?: BeginVerification, options?: any) {
        return RegistrationApiFp(this.configuration).beginPhoneVerification(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CompleteVerification} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistrationApi
     */
    public completePhoneVerification(body?: CompleteVerification, options?: any) {
        return RegistrationApiFp(this.configuration).completePhoneVerification(body, options).then((request) => request(this.axios, this.basePath));
    }
}
