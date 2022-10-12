import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_species_flavor_textInput } from '../languages/languages-create-nested-one-without-pokemon-species-flavor-text.input';
import { pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_textInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon-species-flavor-text.input';

@InputType()
export class pokemon_species_flavor_textCreateWithoutVersionsInput {

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_species_flavor_textInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_species_flavor_textInput;

    @Field(() => pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_textInput, {nullable:false})
    pokemon_species!: pokemon_speciesCreateNestedOneWithoutPokemon_species_flavor_textInput;
}
