import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_move_method_proseUncheckedCreateNestedManyWithoutPokemon_move_methodsInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-unchecked-create-nested-many-without-pokemon-move-methods.input';

@InputType()
export class pokemon_move_methodsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_move_method_proseUncheckedCreateNestedManyWithoutPokemon_move_methodsInput, {nullable:true})
    pokemon_move_method_prose?: pokemon_move_method_proseUncheckedCreateNestedManyWithoutPokemon_move_methodsInput;
}
