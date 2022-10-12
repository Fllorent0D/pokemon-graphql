import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesUpdateWithoutItemsInput } from './item-categories-update-without-items.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateWithoutItemsInput } from './item-categories-create-without-items.input';

@InputType()
export class item_categoriesUpsertWithoutItemsInput {

    @Field(() => item_categoriesUpdateWithoutItemsInput, {nullable:false})
    @Type(() => item_categoriesUpdateWithoutItemsInput)
    update!: item_categoriesUpdateWithoutItemsInput;

    @Field(() => item_categoriesCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_categoriesCreateWithoutItemsInput)
    create!: item_categoriesCreateWithoutItemsInput;
}
