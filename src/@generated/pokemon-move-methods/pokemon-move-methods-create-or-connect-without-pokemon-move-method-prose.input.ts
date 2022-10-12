import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_methodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput } from './pokemon-move-methods-create-without-pokemon-move-method-prose.input';

@InputType()
export class pokemon_move_methodsCreateOrConnectWithoutPokemon_move_method_proseInput {

    @Field(() => pokemon_move_methodsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_methodsWhereUniqueInput)
    where!: pokemon_move_methodsWhereUniqueInput;

    @Field(() => pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput, {nullable:false})
    @Type(() => pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput)
    create!: pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput;
}
