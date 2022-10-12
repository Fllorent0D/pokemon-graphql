import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textCreateWithoutVersion_groupsInput } from './item-flavor-text-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { item_flavor_textCreateOrConnectWithoutVersion_groupsInput } from './item-flavor-text-create-or-connect-without-version-groups.input';
import { item_flavor_textWhereUniqueInput } from './item-flavor-text-where-unique.input';

@InputType()
export class item_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [item_flavor_textCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => item_flavor_textCreateWithoutVersion_groupsInput)
    create?: Array<item_flavor_textCreateWithoutVersion_groupsInput>;

    @Field(() => [item_flavor_textCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => item_flavor_textCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<item_flavor_textCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    connect?: Array<item_flavor_textWhereUniqueInput>;
}
