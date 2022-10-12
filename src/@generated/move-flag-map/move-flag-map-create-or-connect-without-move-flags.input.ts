import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { move_flag_mapCreateWithoutMove_flagsInput } from './move-flag-map-create-without-move-flags.input';

@InputType()
export class move_flag_mapCreateOrConnectWithoutMove_flagsInput {

    @Field(() => move_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_mapWhereUniqueInput)
    where!: move_flag_mapWhereUniqueInput;

    @Field(() => move_flag_mapCreateWithoutMove_flagsInput, {nullable:false})
    @Type(() => move_flag_mapCreateWithoutMove_flagsInput)
    create!: move_flag_mapCreateWithoutMove_flagsInput;
}
