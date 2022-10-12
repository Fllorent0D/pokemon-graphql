import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesCreateWithoutItem_pocketsInput } from './item-pocket-names-create-without-item-pockets.input';
import { Type } from 'class-transformer';
import { item_pocket_namesCreateOrConnectWithoutItem_pocketsInput } from './item-pocket-names-create-or-connect-without-item-pockets.input';
import { item_pocket_namesUpsertWithWhereUniqueWithoutItem_pocketsInput } from './item-pocket-names-upsert-with-where-unique-without-item-pockets.input';
import { item_pocket_namesWhereUniqueInput } from './item-pocket-names-where-unique.input';
import { item_pocket_namesUpdateWithWhereUniqueWithoutItem_pocketsInput } from './item-pocket-names-update-with-where-unique-without-item-pockets.input';
import { item_pocket_namesUpdateManyWithWhereWithoutItem_pocketsInput } from './item-pocket-names-update-many-with-where-without-item-pockets.input';
import { item_pocket_namesScalarWhereInput } from './item-pocket-names-scalar-where.input';

@InputType()
export class item_pocket_namesUncheckedUpdateManyWithoutItem_pocketsNestedInput {

    @Field(() => [item_pocket_namesCreateWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_pocket_namesCreateWithoutItem_pocketsInput)
    create?: Array<item_pocket_namesCreateWithoutItem_pocketsInput>;

    @Field(() => [item_pocket_namesCreateOrConnectWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_pocket_namesCreateOrConnectWithoutItem_pocketsInput)
    connectOrCreate?: Array<item_pocket_namesCreateOrConnectWithoutItem_pocketsInput>;

    @Field(() => [item_pocket_namesUpsertWithWhereUniqueWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_pocket_namesUpsertWithWhereUniqueWithoutItem_pocketsInput)
    upsert?: Array<item_pocket_namesUpsertWithWhereUniqueWithoutItem_pocketsInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    set?: Array<item_pocket_namesWhereUniqueInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    disconnect?: Array<item_pocket_namesWhereUniqueInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    delete?: Array<item_pocket_namesWhereUniqueInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    connect?: Array<item_pocket_namesWhereUniqueInput>;

    @Field(() => [item_pocket_namesUpdateWithWhereUniqueWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_pocket_namesUpdateWithWhereUniqueWithoutItem_pocketsInput)
    update?: Array<item_pocket_namesUpdateWithWhereUniqueWithoutItem_pocketsInput>;

    @Field(() => [item_pocket_namesUpdateManyWithWhereWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_pocket_namesUpdateManyWithWhereWithoutItem_pocketsInput)
    updateMany?: Array<item_pocket_namesUpdateManyWithWhereWithoutItem_pocketsInput>;

    @Field(() => [item_pocket_namesScalarWhereInput], {nullable:true})
    @Type(() => item_pocket_namesScalarWhereInput)
    deleteMany?: Array<item_pocket_namesScalarWhereInput>;
}
