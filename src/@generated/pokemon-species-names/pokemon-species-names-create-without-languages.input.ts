import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedOneWithoutPokemon_species_namesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-species-names.input';

@InputType()
export class pokemon_species_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    genus?: string;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_species_namesInput, {nullable:false})
    pokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_species_namesInput;
}
