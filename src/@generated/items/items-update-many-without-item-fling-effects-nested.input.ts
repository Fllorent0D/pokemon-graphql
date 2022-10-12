import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_fling_effectsInput } from './items-create-without-item-fling-effects.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_fling_effectsInput } from './items-create-or-connect-without-item-fling-effects.input';
import { itemsUpsertWithWhereUniqueWithoutItem_fling_effectsInput } from './items-upsert-with-where-unique-without-item-fling-effects.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithWhereUniqueWithoutItem_fling_effectsInput } from './items-update-with-where-unique-without-item-fling-effects.input';
import { itemsUpdateManyWithWhereWithoutItem_fling_effectsInput } from './items-update-many-with-where-without-item-fling-effects.input';
import { itemsScalarWhereInput } from './items-scalar-where.input';

@InputType()
export class itemsUpdateManyWithoutItem_fling_effectsNestedInput {

    @Field(() => [itemsCreateWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => itemsCreateWithoutItem_fling_effectsInput)
    create?: Array<itemsCreateWithoutItem_fling_effectsInput>;

    @Field(() => [itemsCreateOrConnectWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_fling_effectsInput)
    connectOrCreate?: Array<itemsCreateOrConnectWithoutItem_fling_effectsInput>;

    @Field(() => [itemsUpsertWithWhereUniqueWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => itemsUpsertWithWhereUniqueWithoutItem_fling_effectsInput)
    upsert?: Array<itemsUpsertWithWhereUniqueWithoutItem_fling_effectsInput>;

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

    @Field(() => [itemsUpdateWithWhereUniqueWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => itemsUpdateWithWhereUniqueWithoutItem_fling_effectsInput)
    update?: Array<itemsUpdateWithWhereUniqueWithoutItem_fling_effectsInput>;

    @Field(() => [itemsUpdateManyWithWhereWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => itemsUpdateManyWithWhereWithoutItem_fling_effectsInput)
    updateMany?: Array<itemsUpdateManyWithWhereWithoutItem_fling_effectsInput>;

    @Field(() => [itemsScalarWhereInput], {nullable:true})
    @Type(() => itemsScalarWhereInput)
    deleteMany?: Array<itemsScalarWhereInput>;
}
