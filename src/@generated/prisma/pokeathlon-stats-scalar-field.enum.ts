import { registerEnumType } from '@nestjs/graphql';

export enum Pokeathlon_statsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Pokeathlon_statsScalarFieldEnum, { name: 'Pokeathlon_statsScalarFieldEnum', description: undefined })
