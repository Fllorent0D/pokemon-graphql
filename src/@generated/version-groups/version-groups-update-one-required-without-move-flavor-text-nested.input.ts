import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutMove_flavor_textInput } from './version-groups-create-without-move-flavor-text.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutMove_flavor_textInput } from './version-groups-create-or-connect-without-move-flavor-text.input';
import { version_groupsUpsertWithoutMove_flavor_textInput } from './version-groups-upsert-without-move-flavor-text.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithoutMove_flavor_textInput } from './version-groups-update-without-move-flavor-text.input';

@InputType()
export class version_groupsUpdateOneRequiredWithoutMove_flavor_textNestedInput {

    @Field(() => version_groupsCreateWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutMove_flavor_textInput)
    create?: version_groupsCreateWithoutMove_flavor_textInput;

    @Field(() => version_groupsCreateOrConnectWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutMove_flavor_textInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutMove_flavor_textInput;

    @Field(() => version_groupsUpsertWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => version_groupsUpsertWithoutMove_flavor_textInput)
    upsert?: version_groupsUpsertWithoutMove_flavor_textInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => version_groupsUpdateWithoutMove_flavor_textInput)
    update?: version_groupsUpdateWithoutMove_flavor_textInput;
}
