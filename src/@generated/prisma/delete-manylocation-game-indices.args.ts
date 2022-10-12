import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_game_indicesWhereInput } from '../location-game-indices/location-game-indices-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManylocationGameIndicesArgs {

    @Field(() => location_game_indicesWhereInput, {nullable:true})
    @Type(() => location_game_indicesWhereInput)
    where?: location_game_indicesWhereInput;
}
