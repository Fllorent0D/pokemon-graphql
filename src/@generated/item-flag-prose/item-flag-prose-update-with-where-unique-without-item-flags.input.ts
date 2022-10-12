import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseWhereUniqueInput } from './item-flag-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_flag_proseUpdateWithoutItem_flagsInput } from './item-flag-prose-update-without-item-flags.input';

@InputType()
export class item_flag_proseUpdateWithWhereUniqueWithoutItem_flagsInput {

    @Field(() => item_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_proseWhereUniqueInput)
    where!: item_flag_proseWhereUniqueInput;

    @Field(() => item_flag_proseUpdateWithoutItem_flagsInput, {nullable:false})
    @Type(() => item_flag_proseUpdateWithoutItem_flagsInput)
    data!: item_flag_proseUpdateWithoutItem_flagsInput;
}
