import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsUpdateWithoutItem_categoriesInput } from './item-pockets-update-without-item-categories.input';
import { Type } from 'class-transformer';
import { item_pocketsCreateWithoutItem_categoriesInput } from './item-pockets-create-without-item-categories.input';

@InputType()
export class item_pocketsUpsertWithoutItem_categoriesInput {

    @Field(() => item_pocketsUpdateWithoutItem_categoriesInput, {nullable:false})
    @Type(() => item_pocketsUpdateWithoutItem_categoriesInput)
    update!: item_pocketsUpdateWithoutItem_categoriesInput;

    @Field(() => item_pocketsCreateWithoutItem_categoriesInput, {nullable:false})
    @Type(() => item_pocketsCreateWithoutItem_categoriesInput)
    create!: item_pocketsCreateWithoutItem_categoriesInput;
}
