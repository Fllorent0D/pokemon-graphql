import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokemon_move_method_proseInput } from '../languages/languages-create-nested-one-without-pokemon-move-method-prose.input';
import { pokemon_move_methodsCreateNestedOneWithoutPokemon_move_method_proseInput } from '../pokemon-move-methods/pokemon-move-methods-create-nested-one-without-pokemon-move-method-prose.input';

@InputType()
export class pokemon_move_method_proseCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => languagesCreateNestedOneWithoutPokemon_move_method_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokemon_move_method_proseInput;

    @Field(() => pokemon_move_methodsCreateNestedOneWithoutPokemon_move_method_proseInput, {nullable:false})
    pokemon_move_methods!: pokemon_move_methodsCreateNestedOneWithoutPokemon_move_method_proseInput;
}
