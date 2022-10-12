import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutItem_proseInput } from './items-update-without-item-prose.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_proseInput } from './items-create-without-item-prose.input';

@InputType()
export class itemsUpsertWithoutItem_proseInput {

    @Field(() => itemsUpdateWithoutItem_proseInput, {nullable:false})
    @Type(() => itemsUpdateWithoutItem_proseInput)
    update!: itemsUpdateWithoutItem_proseInput;

    @Field(() => itemsCreateWithoutItem_proseInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_proseInput)
    create!: itemsCreateWithoutItem_proseInput;
}
