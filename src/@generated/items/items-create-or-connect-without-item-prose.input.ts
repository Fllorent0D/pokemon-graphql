import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_proseInput } from './items-create-without-item-prose.input';

@InputType()
export class itemsCreateOrConnectWithoutItem_proseInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutItem_proseInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_proseInput)
    create!: itemsCreateWithoutItem_proseInput;
}
