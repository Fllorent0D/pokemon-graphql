import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsUpdateWithoutMove_flag_proseInput } from './move-flags-update-without-move-flag-prose.input';
import { Type } from 'class-transformer';
import { move_flagsCreateWithoutMove_flag_proseInput } from './move-flags-create-without-move-flag-prose.input';

@InputType()
export class move_flagsUpsertWithoutMove_flag_proseInput {

    @Field(() => move_flagsUpdateWithoutMove_flag_proseInput, {nullable:false})
    @Type(() => move_flagsUpdateWithoutMove_flag_proseInput)
    update!: move_flagsUpdateWithoutMove_flag_proseInput;

    @Field(() => move_flagsCreateWithoutMove_flag_proseInput, {nullable:false})
    @Type(() => move_flagsCreateWithoutMove_flag_proseInput)
    create!: move_flagsCreateWithoutMove_flag_proseInput;
}
