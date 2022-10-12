import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_habitat_namesInput } from '../languages/languages-create-nested-one-without-pokemon-habitat-names.input';

@InputType()
export class pokemon_habitat_namesCreateWithoutPokemon_habitatsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_habitat_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_habitat_namesInput;
}
