import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_species_namesInput } from '../languages/languages-create-nested-one-without-pokemon-species-names.input';

@InputType()
export class pokemon_species_namesCreateWithoutPokemon_speciesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    genus?: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_species_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_species_namesInput;
}
