import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseWhereUniqueInput } from './pokemon-move-method-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseUpdateWithoutPokemon_move_methodsInput } from './pokemon-move-method-prose-update-without-pokemon-move-methods.input';

@InputType()
export class pokemon_move_method_proseUpdateWithWhereUniqueWithoutPokemon_move_methodsInput {

    @Field(() => pokemon_move_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    where!: pokemon_move_method_proseWhereUniqueInput;

    @Field(() => pokemon_move_method_proseUpdateWithoutPokemon_move_methodsInput, {nullable:false})
    @Type(() => pokemon_move_method_proseUpdateWithoutPokemon_move_methodsInput)
    data!: pokemon_move_method_proseUpdateWithoutPokemon_move_methodsInput;
}
