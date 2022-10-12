import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesCreateWithoutItemsInput } from './item-names-create-without-items.input';
import { Type } from 'class-transformer';
import { item_namesCreateOrConnectWithoutItemsInput } from './item-names-create-or-connect-without-items.input';
import { item_namesUpsertWithWhereUniqueWithoutItemsInput } from './item-names-upsert-with-where-unique-without-items.input';
import { item_namesWhereUniqueInput } from './item-names-where-unique.input';
import { item_namesUpdateWithWhereUniqueWithoutItemsInput } from './item-names-update-with-where-unique-without-items.input';
import { item_namesUpdateManyWithWhereWithoutItemsInput } from './item-names-update-many-with-where-without-items.input';
import { item_namesScalarWhereInput } from './item-names-scalar-where.input';

@InputType()
export class item_namesUpdateManyWithoutItemsNestedInput {

    @Field(() => [item_namesCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_namesCreateWithoutItemsInput)
    create?: Array<item_namesCreateWithoutItemsInput>;

    @Field(() => [item_namesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_namesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_namesCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_namesUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_namesUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<item_namesUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    set?: Array<item_namesWhereUniqueInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    disconnect?: Array<item_namesWhereUniqueInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    delete?: Array<item_namesWhereUniqueInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    connect?: Array<item_namesWhereUniqueInput>;

    @Field(() => [item_namesUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_namesUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<item_namesUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_namesUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => item_namesUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<item_namesUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [item_namesScalarWhereInput], {nullable:true})
    @Type(() => item_namesScalarWhereInput)
    deleteMany?: Array<item_namesScalarWhereInput>;
}
