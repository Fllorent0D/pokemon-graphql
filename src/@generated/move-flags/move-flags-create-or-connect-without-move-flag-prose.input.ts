import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsWhereUniqueInput } from './move-flags-where-unique.input';
import { Type } from 'class-transformer';
import { move_flagsCreateWithoutMove_flag_proseInput } from './move-flags-create-without-move-flag-prose.input';

@InputType()
export class move_flagsCreateOrConnectWithoutMove_flag_proseInput {

    @Field(() => move_flagsWhereUniqueInput, {nullable:false})
    @Type(() => move_flagsWhereUniqueInput)
    where!: move_flagsWhereUniqueInput;

    @Field(() => move_flagsCreateWithoutMove_flag_proseInput, {nullable:false})
    @Type(() => move_flagsCreateWithoutMove_flag_proseInput)
    create!: move_flagsCreateWithoutMove_flag_proseInput;
}
