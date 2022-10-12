import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsUpdateWithoutItem_flag_proseInput } from './item-flags-update-without-item-flag-prose.input';
import { Type } from 'class-transformer';
import { item_flagsCreateWithoutItem_flag_proseInput } from './item-flags-create-without-item-flag-prose.input';

@InputType()
export class item_flagsUpsertWithoutItem_flag_proseInput {

    @Field(() => item_flagsUpdateWithoutItem_flag_proseInput, {nullable:false})
    @Type(() => item_flagsUpdateWithoutItem_flag_proseInput)
    update!: item_flagsUpdateWithoutItem_flag_proseInput;

    @Field(() => item_flagsCreateWithoutItem_flag_proseInput, {nullable:false})
    @Type(() => item_flagsCreateWithoutItem_flag_proseInput)
    create!: item_flagsCreateWithoutItem_flag_proseInput;
}
