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

export default interface IBlobHandler {
  download(options: Models.BlobDownloadOptionalParams, context: Context): Promise<Models.BlobDownloadResponse>;
  getProperties(options: Models.BlobGetPropertiesOptionalParams, context: Context): Promise<Models.BlobGetPropertiesResponse>;
  delete(options: Models.BlobDeleteMethodOptionalParams, context: Context): Promise<Models.BlobDeleteResponse>;
  undelete(options: Models.BlobUndeleteOptionalParams, context: Context): Promise<Models.BlobUndeleteResponse>;
  setExpiry(expiryOptions: Models.BlobExpiryOptions, options: Models.BlobSetExpiryOptionalParams, context: Context): Promise<Models.BlobSetExpiryResponse>;
  setHTTPHeaders(options: Models.BlobSetHTTPHeadersOptionalParams, context: Context): Promise<Models.BlobSetHTTPHeadersResponse>;
  setImmutabilityPolicy(options: Models.BlobSetImmutabilityPolicyOptionalParams, context: Context): Promise<Models.BlobSetImmutabilityPolicyResponse>;
  deleteImmutabilityPolicy(options: Models.BlobDeleteImmutabilityPolicyOptionalParams, context: Context): Promise<Models.BlobDeleteImmutabilityPolicyResponse>;
  setLegalHold(legalHold: boolean, options: Models.BlobSetLegalHoldOptionalParams, context: Context): Promise<Models.BlobSetLegalHoldResponse>;
  setMetadata(options: Models.BlobSetMetadataOptionalParams, context: Context): Promise<Models.BlobSetMetadataResponse>;
  acquireLease(options: Models.BlobAcquireLeaseOptionalParams, context: Context): Promise<Models.BlobAcquireLeaseResponse>;
  releaseLease(leaseId: string, options: Models.BlobReleaseLeaseOptionalParams, context: Context): Promise<Models.BlobReleaseLeaseResponse>;
  renewLease(leaseId: string, options: Models.BlobRenewLeaseOptionalParams, context: Context): Promise<Models.BlobRenewLeaseResponse>;
  changeLease(leaseId: string, proposedLeaseId: string, options: Models.BlobChangeLeaseOptionalParams, context: Context): Promise<Models.BlobChangeLeaseResponse>;
  breakLease(options: Models.BlobBreakLeaseOptionalParams, context: Context): Promise<Models.BlobBreakLeaseResponse>;
  createSnapshot(options: Models.BlobCreateSnapshotOptionalParams, context: Context): Promise<Models.BlobCreateSnapshotResponse>;
  startCopyFromURL(copySource: string, options: Models.BlobStartCopyFromURLOptionalParams, context: Context): Promise<Models.BlobStartCopyFromURLResponse>;
  copyFromURL(copySource: string, options: Models.BlobCopyFromURLOptionalParams, context: Context): Promise<Models.BlobCopyFromURLResponse>;
  abortCopyFromURL(copyId: string, options: Models.BlobAbortCopyFromURLOptionalParams, context: Context): Promise<Models.BlobAbortCopyFromURLResponse>;
  setTier(tier: Models.AccessTier, options: Models.BlobSetTierOptionalParams, context: Context): Promise<Models.BlobSetTierResponse>;
  getAccountInfo(context: Context): Promise<Models.BlobGetAccountInfoResponse>;
  query(options: Models.BlobQueryOptionalParams, context: Context): Promise<Models.BlobQueryResponse>;
  getTags(options: Models.BlobGetTagsOptionalParams, context: Context): Promise<Models.BlobGetTagsResponse>;
  setTags(options: Models.BlobSetTagsOptionalParams, context: Context): Promise<Models.BlobSetTagsResponse>;
}
