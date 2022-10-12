import { registerEnumType } from '@nestjs/graphql';

export enum Contest_typesScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Contest_typesScalarFieldEnum, { name: 'Contest_typesScalarFieldEnum', description: undefined })
