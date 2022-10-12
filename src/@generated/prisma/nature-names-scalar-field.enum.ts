import { registerEnumType } from '@nestjs/graphql';

export enum Nature_namesScalarFieldEnum {
    nature_id = "nature_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Nature_namesScalarFieldEnum, { name: 'Nature_namesScalarFieldEnum', description: undefined })
