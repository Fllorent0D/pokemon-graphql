import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutItem_flavor_textInput } from './items-update-without-item-flavor-text.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_flavor_textInput } from './items-create-without-item-flavor-text.input';

@InputType()
export class itemsUpsertWithoutItem_flavor_textInput {

    @Field(() => itemsUpdateWithoutItem_flavor_textInput, {nullable:false})
    @Type(() => itemsUpdateWithoutItem_flavor_textInput)
    update!: itemsUpdateWithoutItem_flavor_textInput;

    @Field(() => itemsCreateWithoutItem_flavor_textInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_flavor_textInput)
    create!: itemsCreateWithoutItem_flavor_textInput;
}
