import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedOneWithoutPokemon_species_proseInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-species-prose.input';

@InputType()
export class pokemon_species_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    form_description?: string;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_species_proseInput, {nullable:false})
    pokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_species_proseInput;
}
