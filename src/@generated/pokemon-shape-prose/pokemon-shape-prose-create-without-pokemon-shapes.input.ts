import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_shape_proseInput } from '../languages/languages-create-nested-one-without-pokemon-shape-prose.input';

@InputType()
export class pokemon_shape_proseCreateWithoutPokemon_shapesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    awesome_name?: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_shape_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_shape_proseInput;
}
