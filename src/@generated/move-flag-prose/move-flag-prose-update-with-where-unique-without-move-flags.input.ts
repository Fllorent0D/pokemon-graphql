import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_proseWhereUniqueInput } from './move-flag-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_flag_proseUpdateWithoutMove_flagsInput } from './move-flag-prose-update-without-move-flags.input';

@InputType()
export class move_flag_proseUpdateWithWhereUniqueWithoutMove_flagsInput {

    @Field(() => move_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_proseWhereUniqueInput)
    where!: move_flag_proseWhereUniqueInput;

    @Field(() => move_flag_proseUpdateWithoutMove_flagsInput, {nullable:false})
    @Type(() => move_flag_proseUpdateWithoutMove_flagsInput)
    data!: move_flag_proseUpdateWithoutMove_flagsInput;
}
