import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapCreateWithoutItemsInput } from './item-flag-map-create-without-items.input';
import { Type } from 'class-transformer';
import { item_flag_mapCreateOrConnectWithoutItemsInput } from './item-flag-map-create-or-connect-without-items.input';
import { item_flag_mapUpsertWithWhereUniqueWithoutItemsInput } from './item-flag-map-upsert-with-where-unique-without-items.input';
import { item_flag_mapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { item_flag_mapUpdateWithWhereUniqueWithoutItemsInput } from './item-flag-map-update-with-where-unique-without-items.input';
import { item_flag_mapUpdateManyWithWhereWithoutItemsInput } from './item-flag-map-update-many-with-where-without-items.input';
import { item_flag_mapScalarWhereInput } from './item-flag-map-scalar-where.input';

@InputType()
export class item_flag_mapUpdateManyWithoutItemsNestedInput {

    @Field(() => [item_flag_mapCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_flag_mapCreateWithoutItemsInput)
    create?: Array<item_flag_mapCreateWithoutItemsInput>;

    @Field(() => [item_flag_mapCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_flag_mapCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_flag_mapCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_flag_mapUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_flag_mapUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<item_flag_mapUpsertWithWhereUniqueWithoutItemsInput>;

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

    @Field(() => [item_flag_mapUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_flag_mapUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<item_flag_mapUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_flag_mapUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => item_flag_mapUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<item_flag_mapUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [item_flag_mapScalarWhereInput], {nullable:true})
    @Type(() => item_flag_mapScalarWhereInput)
    deleteMany?: Array<item_flag_mapScalarWhereInput>;
}
