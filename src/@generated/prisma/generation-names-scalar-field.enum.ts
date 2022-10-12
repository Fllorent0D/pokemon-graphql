import { registerEnumType } from '@nestjs/graphql';

export enum Generation_namesScalarFieldEnum {
    generation_id = "generation_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Generation_namesScalarFieldEnum, { name: 'Generation_namesScalarFieldEnum', description: undefined })
