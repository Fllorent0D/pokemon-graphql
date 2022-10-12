import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutItem_flag_mapInput } from './items-update-without-item-flag-map.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_flag_mapInput } from './items-create-without-item-flag-map.input';

@InputType()
export class itemsUpsertWithoutItem_flag_mapInput {

    @Field(() => itemsUpdateWithoutItem_flag_mapInput, {nullable:false})
    @Type(() => itemsUpdateWithoutItem_flag_mapInput)
    update!: itemsUpdateWithoutItem_flag_mapInput;

    @Field(() => itemsCreateWithoutItem_flag_mapInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_flag_mapInput)
    create!: itemsCreateWithoutItem_flag_mapInput;
}
