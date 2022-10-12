import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_species_namesInput } from '../languages/languages-create-nested-one-without-pokemon-species-names.input';
import { pokemon_speciesCreateNestedOneWithoutPokemon_species_namesInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-species-names.input';

@InputType()
export class pokemon_species_namesCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    genus?: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_species_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_species_namesInput;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_species_namesInput, {nullable:false})
    pokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_species_namesInput;
}
