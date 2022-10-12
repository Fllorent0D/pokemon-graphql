import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_colorsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Pokemon_colorsScalarFieldEnum, { name: 'Pokemon_colorsScalarFieldEnum', description: undefined })
