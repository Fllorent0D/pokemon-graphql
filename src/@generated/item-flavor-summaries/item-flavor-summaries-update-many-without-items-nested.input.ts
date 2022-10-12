import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesCreateWithoutItemsInput } from './item-flavor-summaries-create-without-items.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesCreateOrConnectWithoutItemsInput } from './item-flavor-summaries-create-or-connect-without-items.input';
import { item_flavor_summariesUpsertWithWhereUniqueWithoutItemsInput } from './item-flavor-summaries-upsert-with-where-unique-without-items.input';
import { item_flavor_summariesWhereUniqueInput } from './item-flavor-summaries-where-unique.input';
import { item_flavor_summariesUpdateWithWhereUniqueWithoutItemsInput } from './item-flavor-summaries-update-with-where-unique-without-items.input';
import { item_flavor_summariesUpdateManyWithWhereWithoutItemsInput } from './item-flavor-summaries-update-many-with-where-without-items.input';
import { item_flavor_summariesScalarWhereInput } from './item-flavor-summaries-scalar-where.input';

@InputType()
export class item_flavor_summariesUpdateManyWithoutItemsNestedInput {

    @Field(() => [item_flavor_summariesCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_summariesCreateWithoutItemsInput)
    create?: Array<item_flavor_summariesCreateWithoutItemsInput>;

    @Field(() => [item_flavor_summariesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_summariesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_flavor_summariesCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_flavor_summariesUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_summariesUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<item_flavor_summariesUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    set?: Array<item_flavor_summariesWhereUniqueInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    disconnect?: Array<item_flavor_summariesWhereUniqueInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    delete?: Array<item_flavor_summariesWhereUniqueInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    connect?: Array<item_flavor_summariesWhereUniqueInput>;

    @Field(() => [item_flavor_summariesUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_summariesUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<item_flavor_summariesUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_flavor_summariesUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_summariesUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<item_flavor_summariesUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [item_flavor_summariesScalarWhereInput], {nullable:true})
    @Type(() => item_flavor_summariesScalarWhereInput)
    deleteMany?: Array<item_flavor_summariesScalarWhereInput>;
}
