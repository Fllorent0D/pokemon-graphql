import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_game_indicesWhereInput } from '../location-game-indices/location-game-indices-where.input';
import { Type } from 'class-transformer';
import { location_game_indicesOrderByWithRelationInput } from '../location-game-indices/location-game-indices-order-by-with-relation.input';
import { location_game_indicesWhereUniqueInput } from '../location-game-indices/location-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Location_game_indicesScalarFieldEnum } from './location-game-indices-scalar-field.enum';

@ArgsType()
export class FindManylocationGameIndicesArgs {

    @Field(() => location_game_indicesWhereInput, {nullable:true})
    @Type(() => location_game_indicesWhereInput)
    where?: location_game_indicesWhereInput;

    @Field(() => [location_game_indicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<location_game_indicesOrderByWithRelationInput>;

    @Field(() => location_game_indicesWhereUniqueInput, {nullable:true})
    cursor?: location_game_indicesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Location_game_indicesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Location_game_indicesScalarFieldEnum>;
}
