/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
// tslint:disable:max-line-length

import * as Models from '../artifacts/models';
import Context from '../Context';

export default interface IAppendBlobHandler {
  create(contentLength: number, options: Models.AppendBlobCreateOptionalParams, context: Context): Promise<Models.AppendBlobCreateResponse>;
  appendBlock(body: NodeJS.ReadableStream, contentLength: number, options: Models.AppendBlobAppendBlockOptionalParams, context: Context): Promise<Models.AppendBlobAppendBlockResponse>;
  appendBlockFromUrl(sourceUrl: string, contentLength: number, options: Models.AppendBlobAppendBlockFromUrlOptionalParams, context: Context): Promise<Models.AppendBlobAppendBlockFromUrlResponse>;
  seal(options: Models.AppendBlobSealOptionalParams, context: Context): Promise<Models.AppendBlobSealResponse>;
}
