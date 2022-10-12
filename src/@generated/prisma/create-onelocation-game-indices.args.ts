import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_game_indicesCreateInput } from '../location-game-indices/location-game-indices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelocationGameIndicesArgs {

    @Field(() => location_game_indicesCreateInput, {nullable:false})
    @Type(() => location_game_indicesCreateInput)
    data!: location_game_indicesCreateInput;
}
