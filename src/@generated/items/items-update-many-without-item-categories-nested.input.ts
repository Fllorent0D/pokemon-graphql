import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_categoriesInput } from './items-create-without-item-categories.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_categoriesInput } from './items-create-or-connect-without-item-categories.input';
import { itemsUpsertWithWhereUniqueWithoutItem_categoriesInput } from './items-upsert-with-where-unique-without-item-categories.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithWhereUniqueWithoutItem_categoriesInput } from './items-update-with-where-unique-without-item-categories.input';
import { itemsUpdateManyWithWhereWithoutItem_categoriesInput } from './items-update-many-with-where-without-item-categories.input';
import { itemsScalarWhereInput } from './items-scalar-where.input';

@InputType()
export class itemsUpdateManyWithoutItem_categoriesNestedInput {

    @Field(() => [itemsCreateWithoutItem_categoriesInput], {nullable:true})
    @Type(() => itemsCreateWithoutItem_categoriesInput)
    create?: Array<itemsCreateWithoutItem_categoriesInput>;

    @Field(() => [itemsCreateOrConnectWithoutItem_categoriesInput], {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_categoriesInput)
    connectOrCreate?: Array<itemsCreateOrConnectWithoutItem_categoriesInput>;

    @Field(() => [itemsUpsertWithWhereUniqueWithoutItem_categoriesInput], {nullable:true})
    @Type(() => itemsUpsertWithWhereUniqueWithoutItem_categoriesInput)
    upsert?: Array<itemsUpsertWithWhereUniqueWithoutItem_categoriesInput>;

    @Field(() => [itemsWhereUniqueInput], {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    set?: Array<itemsWhereUniqueInput>;

    @Field(() => [itemsWhereUniqueInput], {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    disconnect?: Array<itemsWhereUniqueInput>;

    @Field(() => [itemsWhereUniqueInput], {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    delete?: Array<itemsWhereUniqueInput>;

    @Field(() => [itemsWhereUniqueInput], {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: Array<itemsWhereUniqueInput>;

    @Field(() => [itemsUpdateWithWhereUniqueWithoutItem_categoriesInput], {nullable:true})
    @Type(() => itemsUpdateWithWhereUniqueWithoutItem_categoriesInput)
    update?: Array<itemsUpdateWithWhereUniqueWithoutItem_categoriesInput>;

    @Field(() => [itemsUpdateManyWithWhereWithoutItem_categoriesInput], {nullable:true})
    @Type(() => itemsUpdateManyWithWhereWithoutItem_categoriesInput)
    updateMany?: Array<itemsUpdateManyWithWhereWithoutItem_categoriesInput>;

    @Field(() => [itemsScalarWhereInput], {nullable:true})
    @Type(() => itemsScalarWhereInput)
    deleteMany?: Array<itemsScalarWhereInput>;
}
