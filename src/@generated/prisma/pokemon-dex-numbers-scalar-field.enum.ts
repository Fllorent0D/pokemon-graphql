import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_dex_numbersScalarFieldEnum {
    species_id = "species_id",
    pokedex_id = "pokedex_id",
    pokedex_number = "pokedex_number"
}


registerEnumType(Pokemon_dex_numbersScalarFieldEnum, { name: 'Pokemon_dex_numbersScalarFieldEnum', description: undefined })
