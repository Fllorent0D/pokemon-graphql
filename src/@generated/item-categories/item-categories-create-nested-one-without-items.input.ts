import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesCreateWithoutItemsInput } from './item-categories-create-without-items.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateOrConnectWithoutItemsInput } from './item-categories-create-or-connect-without-items.input';
import { item_categoriesWhereUniqueInput } from './item-categories-where-unique.input';

@InputType()
export class item_categoriesCreateNestedOneWithoutItemsInput {

    @Field(() => item_categoriesCreateWithoutItemsInput, {nullable:true})
    @Type(() => item_categoriesCreateWithoutItemsInput)
    create?: item_categoriesCreateWithoutItemsInput;

    @Field(() => item_categoriesCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => item_categoriesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: item_categoriesCreateOrConnectWithoutItemsInput;

    @Field(() => item_categoriesWhereUniqueInput, {nullable:true})
    @Type(() => item_categoriesWhereUniqueInput)
    connect?: item_categoriesWhereUniqueInput;
}
