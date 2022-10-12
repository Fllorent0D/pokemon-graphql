import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { move_flag_mapUpdateWithoutMove_flagsInput } from './move-flag-map-update-without-move-flags.input';

@InputType()
export class move_flag_mapUpdateWithWhereUniqueWithoutMove_flagsInput {

    @Field(() => move_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_mapWhereUniqueInput)
    where!: move_flag_mapWhereUniqueInput;

    @Field(() => move_flag_mapUpdateWithoutMove_flagsInput, {nullable:false})
    @Type(() => move_flag_mapUpdateWithoutMove_flagsInput)
    data!: move_flag_mapUpdateWithoutMove_flagsInput;
}
