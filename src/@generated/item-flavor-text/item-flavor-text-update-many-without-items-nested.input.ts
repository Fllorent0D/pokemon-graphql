import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textCreateWithoutItemsInput } from './item-flavor-text-create-without-items.input';
import { Type } from 'class-transformer';
import { item_flavor_textCreateOrConnectWithoutItemsInput } from './item-flavor-text-create-or-connect-without-items.input';
import { item_flavor_textUpsertWithWhereUniqueWithoutItemsInput } from './item-flavor-text-upsert-with-where-unique-without-items.input';
import { item_flavor_textWhereUniqueInput } from './item-flavor-text-where-unique.input';
import { item_flavor_textUpdateWithWhereUniqueWithoutItemsInput } from './item-flavor-text-update-with-where-unique-without-items.input';
import { item_flavor_textUpdateManyWithWhereWithoutItemsInput } from './item-flavor-text-update-many-with-where-without-items.input';
import { item_flavor_textScalarWhereInput } from './item-flavor-text-scalar-where.input';

@InputType()
export class item_flavor_textUpdateManyWithoutItemsNestedInput {

    @Field(() => [item_flavor_textCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_textCreateWithoutItemsInput)
    create?: Array<item_flavor_textCreateWithoutItemsInput>;

    @Field(() => [item_flavor_textCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_textCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_flavor_textCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_flavor_textUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_textUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<item_flavor_textUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    set?: Array<item_flavor_textWhereUniqueInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    disconnect?: Array<item_flavor_textWhereUniqueInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    delete?: Array<item_flavor_textWhereUniqueInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    connect?: Array<item_flavor_textWhereUniqueInput>;

    @Field(() => [item_flavor_textUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_textUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<item_flavor_textUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_flavor_textUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_textUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<item_flavor_textUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [item_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => item_flavor_textScalarWhereInput)
    deleteMany?: Array<item_flavor_textScalarWhereInput>;
}
