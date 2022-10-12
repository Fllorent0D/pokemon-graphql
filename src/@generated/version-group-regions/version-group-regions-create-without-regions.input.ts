import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateNestedOneWithoutVersion_group_regionsInput } from '../version-groups/version-groups-create-nested-one-without-version-group-regions.input';

@InputType()
export class version_group_regionsCreateWithoutRegionsInput {

    @Field(() => version_groupsCreateNestedOneWithoutVersion_group_regionsInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutVersion_group_regionsInput;
}
