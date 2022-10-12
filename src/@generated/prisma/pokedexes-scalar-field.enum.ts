import { registerEnumType } from '@nestjs/graphql';

export enum PokedexesScalarFieldEnum {
    id = "id",
    region_id = "region_id",
    identifier = "identifier"
}


registerEnumType(PokedexesScalarFieldEnum, { name: 'PokedexesScalarFieldEnum', description: undefined })
