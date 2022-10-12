import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesPokemon_species_idLocal_language_idCompoundUniqueInput } from './pokemon-species-flavor-summaries-pokemon-species-id-local-language-id-compound-unique.input';

@InputType()
export class pokemon_species_flavor_summariesWhereUniqueInput {

    @Field(() => pokemon_species_flavor_summariesPokemon_species_idLocal_language_idCompoundUniqueInput, {nullable:true})
    pokemon_species_id_local_language_id?: pokemon_species_flavor_summariesPokemon_species_idLocal_language_idCompoundUniqueInput;
}
