import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutItem_namesInput } from './items-update-without-item-names.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_namesInput } from './items-create-without-item-names.input';

@InputType()
export class itemsUpsertWithoutItem_namesInput {

    @Field(() => itemsUpdateWithoutItem_namesInput, {nullable:false})
    @Type(() => itemsUpdateWithoutItem_namesInput)
    update!: itemsUpdateWithoutItem_namesInput;

    @Field(() => itemsCreateWithoutItem_namesInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_namesInput)
    create!: itemsCreateWithoutItem_namesInput;
}
