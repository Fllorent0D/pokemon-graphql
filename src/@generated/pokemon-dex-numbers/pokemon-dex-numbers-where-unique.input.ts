import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersSpecies_idPokedex_idCompoundUniqueInput } from './pokemon-dex-numbers-species-id-pokedex-id-compound-unique.input';

@InputType()
export class pokemon_dex_numbersWhereUniqueInput {

    @Field(() => pokemon_dex_numbersSpecies_idPokedex_idCompoundUniqueInput, {nullable:true})
    species_id_pokedex_id?: pokemon_dex_numbersSpecies_idPokedex_idCompoundUniqueInput;
}
