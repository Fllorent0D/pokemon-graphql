import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_game_indicesWhereUniqueInput } from '../location-game-indices/location-game-indices-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquelocationGameIndicesArgs {

    @Field(() => location_game_indicesWhereUniqueInput, {nullable:false})
    @Type(() => location_game_indicesWhereUniqueInput)
    where!: location_game_indicesWhereUniqueInput;
}
