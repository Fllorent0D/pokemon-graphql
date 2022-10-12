import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapCreateWithoutItem_flagsInput } from './item-flag-map-create-without-item-flags.input';
import { Type } from 'class-transformer';
import { item_flag_mapCreateOrConnectWithoutItem_flagsInput } from './item-flag-map-create-or-connect-without-item-flags.input';
import { item_flag_mapUpsertWithWhereUniqueWithoutItem_flagsInput } from './item-flag-map-upsert-with-where-unique-without-item-flags.input';
import { item_flag_mapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { item_flag_mapUpdateWithWhereUniqueWithoutItem_flagsInput } from './item-flag-map-update-with-where-unique-without-item-flags.input';
import { item_flag_mapUpdateManyWithWhereWithoutItem_flagsInput } from './item-flag-map-update-many-with-where-without-item-flags.input';
import { item_flag_mapScalarWhereInput } from './item-flag-map-scalar-where.input';

@InputType()
export class item_flag_mapUncheckedUpdateManyWithoutItem_flagsNestedInput {

    @Field(() => [item_flag_mapCreateWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_mapCreateWithoutItem_flagsInput)
    create?: Array<item_flag_mapCreateWithoutItem_flagsInput>;

    @Field(() => [item_flag_mapCreateOrConnectWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_mapCreateOrConnectWithoutItem_flagsInput)
    connectOrCreate?: Array<item_flag_mapCreateOrConnectWithoutItem_flagsInput>;

    @Field(() => [item_flag_mapUpsertWithWhereUniqueWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_mapUpsertWithWhereUniqueWithoutItem_flagsInput)
    upsert?: Array<item_flag_mapUpsertWithWhereUniqueWithoutItem_flagsInput>;

    @Field(() => [item_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_mapWhereUniqueInput)
    set?: Array<item_flag_mapWhereUniqueInput>;

    @Field(() => [item_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_mapWhereUniqueInput)
    disconnect?: Array<item_flag_mapWhereUniqueInput>;

    @Field(() => [item_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_mapWhereUniqueInput)
    delete?: Array<item_flag_mapWhereUniqueInput>;

    @Field(() => [item_flag_mapWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_mapWhereUniqueInput)
    connect?: Array<item_flag_mapWhereUniqueInput>;

    @Field(() => [item_flag_mapUpdateWithWhereUniqueWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_mapUpdateWithWhereUniqueWithoutItem_flagsInput)
    update?: Array<item_flag_mapUpdateWithWhereUniqueWithoutItem_flagsInput>;

    @Field(() => [item_flag_mapUpdateManyWithWhereWithoutItem_flagsInput], {nullable:true})
    @Type(() => item_flag_mapUpdateManyWithWhereWithoutItem_flagsInput)
    updateMany?: Array<item_flag_mapUpdateManyWithWhereWithoutItem_flagsInput>;

    @Field(() => [item_flag_mapScalarWhereInput], {nullable:true})
    @Type(() => item_flag_mapScalarWhereInput)
    deleteMany?: Array<item_flag_mapScalarWhereInput>;
}
