import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_namesInput } from './items-create-without-item-names.input';

@InputType()
export class itemsCreateOrConnectWithoutItem_namesInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutItem_namesInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_namesInput)
    create!: itemsCreateWithoutItem_namesInput;
}
