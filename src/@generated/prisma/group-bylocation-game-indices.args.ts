import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_game_indicesWhereInput } from '../location-game-indices/location-game-indices-where.input';
import { Type } from 'class-transformer';
import { location_game_indicesOrderByWithAggregationInput } from '../location-game-indices/location-game-indices-order-by-with-aggregation.input';
import { Location_game_indicesScalarFieldEnum } from './location-game-indices-scalar-field.enum';
import { location_game_indicesScalarWhereWithAggregatesInput } from '../location-game-indices/location-game-indices-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBylocationGameIndicesArgs {

    @Field(() => location_game_indicesWhereInput, {nullable:true})
    @Type(() => location_game_indicesWhereInput)
    where?: location_game_indicesWhereInput;

    @Field(() => [location_game_indicesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<location_game_indicesOrderByWithAggregationInput>;

    @Field(() => [Location_game_indicesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Location_game_indicesScalarFieldEnum>;

    @Field(() => location_game_indicesScalarWhereWithAggregatesInput, {nullable:true})
    having?: location_game_indicesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
