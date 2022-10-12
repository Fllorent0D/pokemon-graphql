import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_game_indicesUpdateInput } from '../location-game-indices/location-game-indices-update.input';
import { Type } from 'class-transformer';
import { location_game_indicesWhereUniqueInput } from '../location-game-indices/location-game-indices-where-unique.input';

@ArgsType()
export class UpdateOnelocationGameIndicesArgs {

    @Field(() => location_game_indicesUpdateInput, {nullable:false})
    @Type(() => location_game_indicesUpdateInput)
    data!: location_game_indicesUpdateInput;

    @Field(() => location_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => location_game_indicesWhereUniqueInput)
    where!: location_game_indicesWhereUniqueInput;
}
