import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_habitatsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Pokemon_habitatsScalarFieldEnum, { name: 'Pokemon_habitatsScalarFieldEnum', description: undefined })
