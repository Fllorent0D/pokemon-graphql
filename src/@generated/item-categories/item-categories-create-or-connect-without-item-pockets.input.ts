import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateWithoutItem_pocketsInput } from './item-categories-create-without-item-pockets.input';

@InputType()
export class item_categoriesCreateOrConnectWithoutItem_pocketsInput {

    @Field(() => item_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => item_categoriesWhereUniqueInput)
    where!: item_categoriesWhereUniqueInput;

    @Field(() => item_categoriesCreateWithoutItem_pocketsInput, {nullable:false})
    @Type(() => item_categoriesCreateWithoutItem_pocketsInput)
    create!: item_categoriesCreateWithoutItem_pocketsInput;
}
