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
/**
 * 
 * @export
 * @interface PendingWithdrawal
 */
export interface PendingWithdrawal {
    /**
     * 
     * @type {string}
     * @memberof PendingWithdrawal
     */
    txRef?: any;
    /**
     * 
     * @type {number}
     * @memberof PendingWithdrawal
     */
    amount?: any;
    /**
     * 
     * @type {number}
     * @memberof PendingWithdrawal
     */
    date?: any;
    /**
     * 
     * @type {string}
     * @memberof PendingWithdrawal
     */
    userId?: any;
    /**
     * 
     * @type {string}
     * @memberof PendingWithdrawal
     */
    fullName?: any | null;
    /**
     * 
     * @type {string}
     * @memberof PendingWithdrawal
     */
    accountName?: any | null;
    /**
     * 
     * @type {AccountType}
     * @memberof PendingWithdrawal
     */
    accountType?: any;
    /**
     * 
     * @type {number}
     * @memberof PendingWithdrawal
     */
    accountBalance?: any;
}
