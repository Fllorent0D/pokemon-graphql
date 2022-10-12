import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput } from './pokemon-move-methods-create-without-pokemon-move-method-prose.input';
import { Type } from 'class-transformer';
import { pokemon_move_methodsCreateOrConnectWithoutPokemon_move_method_proseInput } from './pokemon-move-methods-create-or-connect-without-pokemon-move-method-prose.input';
import { pokemon_move_methodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';

@InputType()
export class pokemon_move_methodsCreateNestedOneWithoutPokemon_move_method_proseInput {

    @Field(() => pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput, {nullable:true})
    @Type(() => pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput)
    create?: pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput;

    @Field(() => pokemon_move_methodsCreateOrConnectWithoutPokemon_move_method_proseInput, {nullable:true})
    @Type(() => pokemon_move_methodsCreateOrConnectWithoutPokemon_move_method_proseInput)
    connectOrCreate?: pokemon_move_methodsCreateOrConnectWithoutPokemon_move_method_proseInput;

    @Field(() => pokemon_move_methodsWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_move_methodsWhereUniqueInput)
    connect?: pokemon_move_methodsWhereUniqueInput;
}
