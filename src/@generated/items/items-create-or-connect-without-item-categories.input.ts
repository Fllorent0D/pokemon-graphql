import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_categoriesInput } from './items-create-without-item-categories.input';

@InputType()
export class itemsCreateOrConnectWithoutItem_categoriesInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutItem_categoriesInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_categoriesInput)
    create!: itemsCreateWithoutItem_categoriesInput;
}
