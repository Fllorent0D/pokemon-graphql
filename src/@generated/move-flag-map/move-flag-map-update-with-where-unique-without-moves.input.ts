import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { move_flag_mapUpdateWithoutMovesInput } from './move-flag-map-update-without-moves.input';

@InputType()
export class move_flag_mapUpdateWithWhereUniqueWithoutMovesInput {

    @Field(() => move_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_mapWhereUniqueInput)
    where!: move_flag_mapWhereUniqueInput;

    @Field(() => move_flag_mapUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_flag_mapUpdateWithoutMovesInput)
    data!: move_flag_mapUpdateWithoutMovesInput;
}
