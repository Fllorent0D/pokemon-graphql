import { registerEnumType } from '@nestjs/graphql';

export enum Version_group_regionsScalarFieldEnum {
    version_group_id = "version_group_id",
    region_id = "region_id"
}


registerEnumType(Version_group_regionsScalarFieldEnum, { name: 'Version_group_regionsScalarFieldEnum', description: undefined })
