import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsCreateWithoutItem_categoriesInput } from './item-pockets-create-without-item-categories.input';
import { Type } from 'class-transformer';
import { item_pocketsCreateOrConnectWithoutItem_categoriesInput } from './item-pockets-create-or-connect-without-item-categories.input';
import { item_pocketsWhereUniqueInput } from './item-pockets-where-unique.input';

@InputType()
export class item_pocketsCreateNestedOneWithoutItem_categoriesInput {

    @Field(() => item_pocketsCreateWithoutItem_categoriesInput, {nullable:true})
    @Type(() => item_pocketsCreateWithoutItem_categoriesInput)
    create?: item_pocketsCreateWithoutItem_categoriesInput;

    @Field(() => item_pocketsCreateOrConnectWithoutItem_categoriesInput, {nullable:true})
    @Type(() => item_pocketsCreateOrConnectWithoutItem_categoriesInput)
    connectOrCreate?: item_pocketsCreateOrConnectWithoutItem_categoriesInput;

    @Field(() => item_pocketsWhereUniqueInput, {nullable:true})
    @Type(() => item_pocketsWhereUniqueInput)
    connect?: item_pocketsWhereUniqueInput;
}
