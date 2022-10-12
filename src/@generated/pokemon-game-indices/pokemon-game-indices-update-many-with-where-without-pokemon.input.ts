import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_game_indicesScalarWhereInput } from './pokemon-game-indices-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_game_indicesUpdateManyMutationInput } from './pokemon-game-indices-update-many-mutation.input';

@InputType()
export class pokemon_game_indicesUpdateManyWithWhereWithoutPokemonInput {

    @Field(() => pokemon_game_indicesScalarWhereInput, {nullable:false})
    @Type(() => pokemon_game_indicesScalarWhereInput)
    where!: pokemon_game_indicesScalarWhereInput;

    @Field(() => pokemon_game_indicesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_game_indicesUpdateManyMutationInput)
    data!: pokemon_game_indicesUpdateManyMutationInput;
}
