import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesCreateWithoutItemsInput } from './item-flavor-summaries-create-without-items.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesCreateOrConnectWithoutItemsInput } from './item-flavor-summaries-create-or-connect-without-items.input';
import { item_flavor_summariesWhereUniqueInput } from './item-flavor-summaries-where-unique.input';

@InputType()
export class item_flavor_summariesUncheckedCreateNestedManyWithoutItemsInput {

    @Field(() => [item_flavor_summariesCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_summariesCreateWithoutItemsInput)
    create?: Array<item_flavor_summariesCreateWithoutItemsInput>;

    @Field(() => [item_flavor_summariesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_summariesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_flavor_summariesCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    connect?: Array<item_flavor_summariesWhereUniqueInput>;
}
