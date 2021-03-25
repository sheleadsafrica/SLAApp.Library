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
 * @interface ChallengeCreationRequest
 */
export interface ChallengeCreationRequest {
    /**
     * 
     * @type {string}
     * @memberof ChallengeCreationRequest
     */
    name: any;
    /**
     * 
     * @type {number}
     * @memberof ChallengeCreationRequest
     */
    start: any;
    /**
     * 
     * @type {Array&lt;ChallengeConfig&gt;}
     * @memberof ChallengeCreationRequest
     */
    configs: any;
    /**
     * 
     * @type {string}
     * @memberof ChallengeCreationRequest
     */
    fundsInvested?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ChallengeCreationRequest
     */
    description?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ChallengeCreationRequest
     */
    imageUrl?: any | null;
    /**
     * 
     * @type {number}
     * @memberof ChallengeCreationRequest
     */
    incomePercentage?: any;
}
