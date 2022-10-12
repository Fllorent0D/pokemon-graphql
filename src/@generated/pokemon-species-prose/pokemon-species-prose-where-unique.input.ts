import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_prosePokemon_species_idLocal_language_idCompoundUniqueInput } from './pokemon-species-prose-pokemon-species-id-local-language-id-compound-unique.input';

@InputType()
export class pokemon_species_proseWhereUniqueInput {

    @Field(() => pokemon_species_prosePokemon_species_idLocal_language_idCompoundUniqueInput, {nullable:true})
    pokemon_species_id_local_language_id?: pokemon_species_prosePokemon_species_idLocal_language_idCompoundUniqueInput;
}
