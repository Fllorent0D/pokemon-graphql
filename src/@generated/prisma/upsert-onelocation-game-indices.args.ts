import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_game_indicesWhereUniqueInput } from '../location-game-indices/location-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { location_game_indicesCreateInput } from '../location-game-indices/location-game-indices-create.input';
import { location_game_indicesUpdateInput } from '../location-game-indices/location-game-indices-update.input';

@ArgsType()
export class UpsertOnelocationGameIndicesArgs {

    @Field(() => location_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => location_game_indicesWhereUniqueInput)
    where!: location_game_indicesWhereUniqueInput;

    @Field(() => location_game_indicesCreateInput, {nullable:false})
    @Type(() => location_game_indicesCreateInput)
    create!: location_game_indicesCreateInput;

    @Field(() => location_game_indicesUpdateInput, {nullable:false})
    @Type(() => location_game_indicesUpdateInput)
    update!: location_game_indicesUpdateInput;
}
