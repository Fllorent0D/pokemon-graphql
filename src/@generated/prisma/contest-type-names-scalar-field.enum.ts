import { registerEnumType } from '@nestjs/graphql';

export enum Contest_type_namesScalarFieldEnum {
    contest_type_id = "contest_type_id",
    local_language_id = "local_language_id",
    name = "name",
    flavor = "flavor",
    color = "color"
}


registerEnumType(Contest_type_namesScalarFieldEnum, { name: 'Contest_type_namesScalarFieldEnum', description: undefined })
