import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_species_proseInput } from '../languages/languages-create-nested-one-without-pokemon-species-prose.input';

@InputType()
export class pokemon_species_proseCreateWithoutPokemon_speciesInput {

    @Field(() => String, {nullable:true})
    form_description?: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_species_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_species_proseInput;
}
