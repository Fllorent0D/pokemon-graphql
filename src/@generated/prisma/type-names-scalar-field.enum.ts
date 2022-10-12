import { registerEnumType } from '@nestjs/graphql';

export enum Type_namesScalarFieldEnum {
    type_id = "type_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Type_namesScalarFieldEnum, { name: 'Type_namesScalarFieldEnum', description: undefined })
