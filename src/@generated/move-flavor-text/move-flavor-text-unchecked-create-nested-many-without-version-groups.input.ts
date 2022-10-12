import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textCreateWithoutVersion_groupsInput } from './move-flavor-text-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { move_flavor_textCreateOrConnectWithoutVersion_groupsInput } from './move-flavor-text-create-or-connect-without-version-groups.input';
import { move_flavor_textWhereUniqueInput } from './move-flavor-text-where-unique.input';

@InputType()
export class move_flavor_textUncheckedCreateNestedManyWithoutVersion_groupsInput {

    @Field(() => [move_flavor_textCreateWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_flavor_textCreateWithoutVersion_groupsInput)
    create?: Array<move_flavor_textCreateWithoutVersion_groupsInput>;

    @Field(() => [move_flavor_textCreateOrConnectWithoutVersion_groupsInput], {nullable:true})
    @Type(() => move_flavor_textCreateOrConnectWithoutVersion_groupsInput)
    connectOrCreate?: Array<move_flavor_textCreateOrConnectWithoutVersion_groupsInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    connect?: Array<move_flavor_textWhereUniqueInput>;
}
