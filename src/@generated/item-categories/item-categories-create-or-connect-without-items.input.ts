import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateWithoutItemsInput } from './item-categories-create-without-items.input';

@InputType()
export class item_categoriesCreateOrConnectWithoutItemsInput {

    @Field(() => item_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => item_categoriesWhereUniqueInput)
    where!: item_categoriesWhereUniqueInput;

    @Field(() => item_categoriesCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_categoriesCreateWithoutItemsInput)
    create!: item_categoriesCreateWithoutItemsInput;
}
