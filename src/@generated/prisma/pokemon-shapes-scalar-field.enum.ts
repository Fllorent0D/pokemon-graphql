import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_shapesScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Pokemon_shapesScalarFieldEnum, { name: 'Pokemon_shapesScalarFieldEnum', description: undefined })
