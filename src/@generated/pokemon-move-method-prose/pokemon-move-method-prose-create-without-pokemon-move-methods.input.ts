import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_move_method_proseInput } from '../languages/languages-create-nested-one-without-pokemon-move-method-prose.input';

@InputType()
export class pokemon_move_method_proseCreateWithoutPokemon_move_methodsInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_move_method_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_move_method_proseInput;
}
