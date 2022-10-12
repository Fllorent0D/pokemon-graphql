import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseCreateNestedManyWithoutPokemon_move_methodsInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-create-nested-many-without-pokemon-move-methods.input';

@InputType()
export class pokemon_move_methodsCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_move_method_proseCreateNestedManyWithoutPokemon_move_methodsInput, {nullable:true})
    pokemon_move_method_prose?: pokemon_move_method_proseCreateNestedManyWithoutPokemon_move_methodsInput;
}
