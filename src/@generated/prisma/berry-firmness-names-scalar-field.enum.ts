import { registerEnumType } from '@nestjs/graphql';

export enum Berry_firmness_namesScalarFieldEnum {
    berry_firmness_id = "berry_firmness_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Berry_firmness_namesScalarFieldEnum, { name: 'Berry_firmness_namesScalarFieldEnum', description: undefined })
