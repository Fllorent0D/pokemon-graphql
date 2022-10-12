import { registerEnumType } from '@nestjs/graphql';

export enum Region_namesScalarFieldEnum {
    region_id = "region_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Region_namesScalarFieldEnum, { name: 'Region_namesScalarFieldEnum', description: undefined })
