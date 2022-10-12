import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsCreateWithoutItem_categoriesInput } from './item-pockets-create-without-item-categories.input';
import { Type } from 'class-transformer';
import { item_pocketsCreateOrConnectWithoutItem_categoriesInput } from './item-pockets-create-or-connect-without-item-categories.input';
import { item_pocketsUpsertWithoutItem_categoriesInput } from './item-pockets-upsert-without-item-categories.input';
import { item_pocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { item_pocketsUpdateWithoutItem_categoriesInput } from './item-pockets-update-without-item-categories.input';

@InputType()
export class item_pocketsUpdateOneRequiredWithoutItem_categoriesNestedInput {

    @Field(() => item_pocketsCreateWithoutItem_categoriesInput, {nullable:true})
    @Type(() => item_pocketsCreateWithoutItem_categoriesInput)
    create?: item_pocketsCreateWithoutItem_categoriesInput;

    @Field(() => item_pocketsCreateOrConnectWithoutItem_categoriesInput, {nullable:true})
    @Type(() => item_pocketsCreateOrConnectWithoutItem_categoriesInput)
    connectOrCreate?: item_pocketsCreateOrConnectWithoutItem_categoriesInput;

    @Field(() => item_pocketsUpsertWithoutItem_categoriesInput, {nullable:true})
    @Type(() => item_pocketsUpsertWithoutItem_categoriesInput)
    upsert?: item_pocketsUpsertWithoutItem_categoriesInput;

    @Field(() => item_pocketsWhereUniqueInput, {nullable:true})
    @Type(() => item_pocketsWhereUniqueInput)
    connect?: item_pocketsWhereUniqueInput;

    @Field(() => item_pocketsUpdateWithoutItem_categoriesInput, {nullable:true})
    @Type(() => item_pocketsUpdateWithoutItem_categoriesInput)
    update?: item_pocketsUpdateWithoutItem_categoriesInput;
}
