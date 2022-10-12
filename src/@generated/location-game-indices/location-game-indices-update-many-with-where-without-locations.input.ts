import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesScalarWhereInput } from './location-game-indices-scalar-where.input';
import { Type } from 'class-transformer';
import { location_game_indicesUpdateManyMutationInput } from './location-game-indices-update-many-mutation.input';

@InputType()
export class location_game_indicesUpdateManyWithWhereWithoutLocationsInput {

    @Field(() => location_game_indicesScalarWhereInput, {nullable:false})
    @Type(() => location_game_indicesScalarWhereInput)
    where!: location_game_indicesScalarWhereInput;

    @Field(() => location_game_indicesUpdateManyMutationInput, {nullable:false})
    @Type(() => location_game_indicesUpdateManyMutationInput)
    data!: location_game_indicesUpdateManyMutationInput;
}
