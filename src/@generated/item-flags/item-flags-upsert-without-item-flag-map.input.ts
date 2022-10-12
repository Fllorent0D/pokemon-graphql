import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flagsUpdateWithoutItem_flag_mapInput } from './item-flags-update-without-item-flag-map.input';
import { Type } from 'class-transformer';
import { item_flagsCreateWithoutItem_flag_mapInput } from './item-flags-create-without-item-flag-map.input';

@InputType()
export class item_flagsUpsertWithoutItem_flag_mapInput {

    @Field(() => item_flagsUpdateWithoutItem_flag_mapInput, {nullable:false})
    @Type(() => item_flagsUpdateWithoutItem_flag_mapInput)
    update!: item_flagsUpdateWithoutItem_flag_mapInput;

    @Field(() => item_flagsCreateWithoutItem_flag_mapInput, {nullable:false})
    @Type(() => item_flagsCreateWithoutItem_flag_mapInput)
    create!: item_flagsCreateWithoutItem_flag_mapInput;
}
