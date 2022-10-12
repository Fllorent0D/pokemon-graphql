import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_flavor_textInput } from './items-create-without-item-flavor-text.input';

@InputType()
export class itemsCreateOrConnectWithoutItem_flavor_textInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutItem_flavor_textInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_flavor_textInput)
    create!: itemsCreateWithoutItem_flavor_textInput;
}
