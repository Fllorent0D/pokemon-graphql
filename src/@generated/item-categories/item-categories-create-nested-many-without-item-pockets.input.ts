import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesCreateWithoutItem_pocketsInput } from './item-categories-create-without-item-pockets.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateOrConnectWithoutItem_pocketsInput } from './item-categories-create-or-connect-without-item-pockets.input';
import { item_categoriesWhereUniqueInput } from './item-categories-where-unique.input';

@InputType()
export class item_categoriesCreateNestedManyWithoutItem_pocketsInput {

    @Field(() => [item_categoriesCreateWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_categoriesCreateWithoutItem_pocketsInput)
    create?: Array<item_categoriesCreateWithoutItem_pocketsInput>;

    @Field(() => [item_categoriesCreateOrConnectWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_categoriesCreateOrConnectWithoutItem_pocketsInput)
    connectOrCreate?: Array<item_categoriesCreateOrConnectWithoutItem_pocketsInput>;

    @Field(() => [item_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => item_categoriesWhereUniqueInput)
    connect?: Array<item_categoriesWhereUniqueInput>;
}
