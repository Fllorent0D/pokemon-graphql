import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_game_indicesWhereInput } from '../location-game-indices/location-game-indices-where.input';

@InputType()
export class Location_game_indicesListRelationFilter {

    @Field(() => location_game_indicesWhereInput, {nullable:true})
    every?: location_game_indicesWhereInput;

    @Field(() => location_game_indicesWhereInput, {nullable:true})
    some?: location_game_indicesWhereInput;

    @Field(() => location_game_indicesWhereInput, {nullable:true})
    none?: location_game_indicesWhereInput;
}
