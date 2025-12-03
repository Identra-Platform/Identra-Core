type Nullable<T> = T | null | undefined
export declare namespace id.walt.permissions {
    class FlowPermissionSet {
        constructor(id: string, permissions: any/* kotlinx.coroutines.flow.Flow<id.walt.permissions.Permission> */);
        get id(): string;
        get permissions(): any/* kotlinx.coroutines.flow.Flow<id.walt.permissions.Permission> */;
        copy(id?: string, permissions?: any/* kotlinx.coroutines.flow.Flow<id.walt.permissions.Permission> */): id.walt.permissions.FlowPermissionSet;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            fromPermissionStringsFlow(id: string, permissionStrings: any/* kotlinx.coroutines.flow.Flow<string> */): id.walt.permissions.FlowPermissionSet;
            fromPermissionStringFlow(id: string, permissionStrings: string): id.walt.permissions.FlowPermissionSet;
        };
    }
}
export declare namespace id.walt.permissions {
    class PermissionChecker {
        constructor();
        get allowTrie(): any/* id.walt.permissions.PermissionTrie */;
        get denyTrie(): any/* id.walt.permissions.PermissionTrie */;
        checkPermission(target: string, operation: string): boolean;
        checkPermissionInsights(target: any/* id.walt.permissions.PermissionedResourceTarget */, operation: string): any/* id.walt.permissions.PermissionChecker.PermissionInsights */;
    }
}
export as namespace id_walt_permissions_waltid_permissions;