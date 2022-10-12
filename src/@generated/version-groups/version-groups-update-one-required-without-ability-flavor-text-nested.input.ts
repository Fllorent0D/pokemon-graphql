import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateWithoutAbility_flavor_textInput } from './version-groups-create-without-ability-flavor-text.input';
import { Type } from 'class-transformer';
import { version_groupsCreateOrConnectWithoutAbility_flavor_textInput } from './version-groups-create-or-connect-without-ability-flavor-text.input';
import { version_groupsUpsertWithoutAbility_flavor_textInput } from './version-groups-upsert-without-ability-flavor-text.input';
import { version_groupsWhereUniqueInput } from './version-groups-where-unique.input';
import { version_groupsUpdateWithoutAbility_flavor_textInput } from './version-groups-update-without-ability-flavor-text.input';

@InputType()
export class version_groupsUpdateOneRequiredWithoutAbility_flavor_textNestedInput {

    @Field(() => version_groupsCreateWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => version_groupsCreateWithoutAbility_flavor_textInput)
    create?: version_groupsCreateWithoutAbility_flavor_textInput;

    @Field(() => version_groupsCreateOrConnectWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => version_groupsCreateOrConnectWithoutAbility_flavor_textInput)
    connectOrCreate?: version_groupsCreateOrConnectWithoutAbility_flavor_textInput;

    @Field(() => version_groupsUpsertWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => version_groupsUpsertWithoutAbility_flavor_textInput)
    upsert?: version_groupsUpsertWithoutAbility_flavor_textInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:true})
    @Type(() => version_groupsWhereUniqueInput)
    connect?: version_groupsWhereUniqueInput;

    @Field(() => version_groupsUpdateWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => version_groupsUpdateWithoutAbility_flavor_textInput)
    update?: version_groupsUpdateWithoutAbility_flavor_textInput;
}
