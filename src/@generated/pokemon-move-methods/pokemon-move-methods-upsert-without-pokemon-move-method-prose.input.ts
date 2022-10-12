import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_methodsUpdateWithoutPokemon_move_method_proseInput } from './pokemon-move-methods-update-without-pokemon-move-method-prose.input';
import { Type } from 'class-transformer';
import { pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput } from './pokemon-move-methods-create-without-pokemon-move-method-prose.input';

@InputType()
export class pokemon_move_methodsUpsertWithoutPokemon_move_method_proseInput {

    @Field(() => pokemon_move_methodsUpdateWithoutPokemon_move_method_proseInput, {nullable:false})
    @Type(() => pokemon_move_methodsUpdateWithoutPokemon_move_method_proseInput)
    update!: pokemon_move_methodsUpdateWithoutPokemon_move_method_proseInput;

    @Field(() => pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput, {nullable:false})
    @Type(() => pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput)
    create!: pokemon_move_methodsCreateWithoutPokemon_move_method_proseInput;
}
