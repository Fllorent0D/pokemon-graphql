import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutMove_flavor_textInput } from './version-groups-create-without-move-flavor-text.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutMove_flavor_textInput } from './version-groups-create-or-connect-without-move-flavor-text.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class version_groupsCreateNestedOneWithoutMove_flavor_textInput {

    @Field(() => version_groupsCreateWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutMove_flavor_textInput)
    create?: version_groupsCreateWithoutMove_flavor_textInput;

    @Field(() => version_groupsCreateOrConnectWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutMove_flavor_textInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutMove_flavor_textInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;
}
