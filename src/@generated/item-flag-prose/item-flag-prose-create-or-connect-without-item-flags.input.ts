import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseWhereUniqueInput } from './item-flag-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_flag_proseCreateWithoutItem_flagsInput } from './item-flag-prose-create-without-item-flags.input';

@InputType()
export class item_flag_proseCreateOrConnectWithoutItem_flagsInput {

    @Field(() => item_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_proseWhereUniqueInput)
    where!: item_flag_proseWhereUniqueInput;

    @Field(() => item_flag_proseCreateWithoutItem_flagsInput, {nullable:false})
    @Type(() => item_flag_proseCreateWithoutItem_flagsInput)
    create!: item_flag_proseCreateWithoutItem_flagsInput;
}
