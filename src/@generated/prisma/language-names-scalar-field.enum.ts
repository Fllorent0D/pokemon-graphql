import { registerEnumType } from '@nestjs/graphql';

export enum Language_namesScalarFieldEnum {
    language_id = "language_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Language_namesScalarFieldEnum, { name: 'Language_namesScalarFieldEnum', description: undefined })
