import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsUpdateWithoutItem_categoriesInput } from './items-update-without-item-categories.input';
import { itemsCreateWithoutItem_categoriesInput } from './items-create-without-item-categories.input';

@InputType()
export class itemsUpsertWithWhereUniqueWithoutItem_categoriesInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutItem_categoriesInput, {nullable:false})
    @Type(() => itemsUpdateWithoutItem_categoriesInput)
    update!: itemsUpdateWithoutItem_categoriesInput;

    @Field(() => itemsCreateWithoutItem_categoriesInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_categoriesInput)
    create!: itemsCreateWithoutItem_categoriesInput;
}
