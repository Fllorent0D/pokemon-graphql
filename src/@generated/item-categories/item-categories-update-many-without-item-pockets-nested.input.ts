import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesCreateWithoutItem_pocketsInput } from './item-categories-create-without-item-pockets.input';
import { Type } from 'class-transformer';
import { item_categoriesCreateOrConnectWithoutItem_pocketsInput } from './item-categories-create-or-connect-without-item-pockets.input';
import { item_categoriesUpsertWithWhereUniqueWithoutItem_pocketsInput } from './item-categories-upsert-with-where-unique-without-item-pockets.input';
import { item_categoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { item_categoriesUpdateWithWhereUniqueWithoutItem_pocketsInput } from './item-categories-update-with-where-unique-without-item-pockets.input';
import { item_categoriesUpdateManyWithWhereWithoutItem_pocketsInput } from './item-categories-update-many-with-where-without-item-pockets.input';
import { item_categoriesScalarWhereInput } from './item-categories-scalar-where.input';

@InputType()
export class item_categoriesUpdateManyWithoutItem_pocketsNestedInput {

    @Field(() => [item_categoriesCreateWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_categoriesCreateWithoutItem_pocketsInput)
    create?: Array<item_categoriesCreateWithoutItem_pocketsInput>;

    @Field(() => [item_categoriesCreateOrConnectWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_categoriesCreateOrConnectWithoutItem_pocketsInput)
    connectOrCreate?: Array<item_categoriesCreateOrConnectWithoutItem_pocketsInput>;

    @Field(() => [item_categoriesUpsertWithWhereUniqueWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_categoriesUpsertWithWhereUniqueWithoutItem_pocketsInput)
    upsert?: Array<item_categoriesUpsertWithWhereUniqueWithoutItem_pocketsInput>;

    @Field(() => [item_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => item_categoriesWhereUniqueInput)
    set?: Array<item_categoriesWhereUniqueInput>;

    @Field(() => [item_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => item_categoriesWhereUniqueInput)
    disconnect?: Array<item_categoriesWhereUniqueInput>;

    @Field(() => [item_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => item_categoriesWhereUniqueInput)
    delete?: Array<item_categoriesWhereUniqueInput>;

    @Field(() => [item_categoriesWhereUniqueInput], {nullable:true})
    @Type(() => item_categoriesWhereUniqueInput)
    connect?: Array<item_categoriesWhereUniqueInput>;

    @Field(() => [item_categoriesUpdateWithWhereUniqueWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_categoriesUpdateWithWhereUniqueWithoutItem_pocketsInput)
    update?: Array<item_categoriesUpdateWithWhereUniqueWithoutItem_pocketsInput>;

    @Field(() => [item_categoriesUpdateManyWithWhereWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_categoriesUpdateManyWithWhereWithoutItem_pocketsInput)
    updateMany?: Array<item_categoriesUpdateManyWithWhereWithoutItem_pocketsInput>;

    @Field(() => [item_categoriesScalarWhereInput], {nullable:true})
    @Type(() => item_categoriesScalarWhereInput)
    deleteMany?: Array<item_categoriesScalarWhereInput>;
}
