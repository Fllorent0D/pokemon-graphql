import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textCreateWithoutVersion_groupsInput } from './item-flavor-text-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { item_flavor_textCreateOrConnectWithoutVersion_groupsInput } from './item-flavor-text-create-or-connect-without-version-groups.input';
import { item_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput } from './item-flavor-text-upsert-with-where-unique-without-version-groups.input';
import { item_flavor_textWhereUniqueInput } from './item-flavor-text-where-unique.input';
import { item_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput } from './item-flavor-text-update-with-where-unique-without-version-groups.input';
import { item_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput } from './item-flavor-text-update-many-with-where-without-version-groups.input';
import { item_flavor_textScalarWhereInput } from './item-flavor-text-scalar-where.input';

@InputType()
export class item_flavor_textUpdateManyWithoutVersion_groupsNestedInput {

    @Field(() => [item_flavor_textCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => item_flavor_textCreateWithoutVersion_groupsInput)
    create?: Array<item_flavor_textCreateWithoutVersion_groupsInput>;

    @Field(() => [item_flavor_textCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => item_flavor_textCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<item_flavor_textCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [item_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => item_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput)
    upsert?: Array<item_flavor_textUpsertWithWhereUniqueWithoutVersion_groupsInput>;

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

    @Field(() => [item_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput], {nullable:true})
    @Type(() => item_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput)
    update?: Array<item_flavor_textUpdateWithWhereUniqueWithoutVersion_groupsInput>;

    @Field(() => [item_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput], {nullable:true})
    @Type(() => item_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput)
    updateMany?: Array<item_flavor_textUpdateManyWithWhereWithoutVersion_groupsInput>;

    @Field(() => [item_flavor_textScalarWhereInput], {nullable:true})
    @Type(() => item_flavor_textScalarWhereInput)
    deleteMany?: Array<item_flavor_textScalarWhereInput>;
}
