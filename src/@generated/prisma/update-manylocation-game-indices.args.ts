import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_game_indicesUpdateManyMutationInput } from '../location-game-indices/location-game-indices-update-many-mutation.input';
import { Type } from 'class-transformer';
import { location_game_indicesWhereInput } from '../location-game-indices/location-game-indices-where.input';

@ArgsType()
export class UpdateManylocationGameIndicesArgs {

    @Field(() => location_game_indicesUpdateManyMutationInput, {nullable:false})
    @Type(() => location_game_indicesUpdateManyMutationInput)
    data!: location_game_indicesUpdateManyMutationInput;

    @Field(() => location_game_indicesWhereInput, {nullable:true})
    @Type(() => location_game_indicesWhereInput)
    where?: location_game_indicesWhereInput;
}
