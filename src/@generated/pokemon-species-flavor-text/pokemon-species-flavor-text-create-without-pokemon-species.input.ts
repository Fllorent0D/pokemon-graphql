import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_species_flavor_textInput } from '../languages/languages-create-nested-one-without-pokemon-species-flavor-text.input';
import { versionsCreateNestedOneWithoutPokemon_species_flavor_textInput } from '../versions/versions-create-nested-one-without-pokemon-species-flavor-text.input';

@InputType()
export class pokemon_species_flavor_textCreateWithoutPokemon_speciesInput {

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_species_flavor_textInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_species_flavor_textInput;

    @Field(() => versionsCreateNestedOneWithoutPokemon_species_flavor_textInput, {nullable:false})
    versions!: versionsCreateNestedOneWithoutPokemon_species_flavor_textInput;
}
