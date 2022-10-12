import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { move_flag_mapUpdateWithoutMovesInput } from './move-flag-map-update-without-moves.input';
import { move_flag_mapCreateWithoutMovesInput } from './move-flag-map-create-without-moves.input';

@InputType()
export class move_flag_mapUpsertWithWhereUniqueWithoutMovesInput {

    @Field(() => move_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_mapWhereUniqueInput)
    where!: move_flag_mapWhereUniqueInput;

    @Field(() => move_flag_mapUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_flag_mapUpdateWithoutMovesInput)
    update!: move_flag_mapUpdateWithoutMovesInput;

    @Field(() => move_flag_mapCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_flag_mapCreateWithoutMovesInput)
    create!: move_flag_mapCreateWithoutMovesInput;
}
