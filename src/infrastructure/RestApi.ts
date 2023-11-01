import axios, { AxiosRequestConfig, Method, ResponseType, AxiosResponse } from 'axios';
import { HttpMethods, HttpStatus } from '../common/Http';

export class RestRequest {
    method: HttpMethods;
    endpoint: string;
    body?: any;
    headers?: any;
    responseType?: string;
    responseEncoding?: string;
    auth?: string;
    data?: string;

    constructor(init: RestRequest) {
        Object.assign(this, init);
    }
}

export interface RestResponse {
    error: boolean;
    errorClient?: boolean;
    errorServer?: boolean;
    errorNetwork?: boolean;
    errorMessage?: string;
    status: HttpStatus;
    body: any;
}

export class RestApi {
    private readonly baseUrl: string;
    private readonly headers: any;

    constructor(baseUrl: string, headers?: any) {
        this.baseUrl = baseUrl;
        if (headers) this.headers = headers;
    }

    public async ExecuteRequest(request: RestRequest): Promise<RestResponse> {
        let headers: any = this.headers ?? {};

        if (!!request.auth) headers.authorization = request.auth;

        if (!!request.headers) headers = { ...headers, ...request.headers };

        const _request: AxiosRequestConfig = {
            baseURL: this.baseUrl,
            url: request.endpoint,
            method: request.method as Method,
            headers: headers,
            data: request.body,
            responseType: (request.responseType as ResponseType) ?? 'json',
        };

        try {
            const response = await axios(_request);
            return this.handleSuccess(response);
        } catch (err) {
            return this.handleError(err);
        }
    }

    private handleSuccess(response: AxiosResponse): RestResponse {
        const { status, data } = response;

        const _response: RestResponse = {
            error: false,
            errorClient: false,
            errorServer: false,
            errorNetwork: false,
            status,
            body: data,
        };

        return _response;
    }

    private handleError(error: any): RestResponse {
        const _response: RestResponse = { error: true, status: HttpStatus.None, body: null };

        if (error && error.response) {
            const { status, data } = error.response;

            _response.errorClient = status >= 400 && status <= 499;
            _response.errorServer = status >= 500;
            _response.status = status;
            _response.body = data;
        } else {
            _response.errorNetwork = true;
        }

        return _response;
    }
}
