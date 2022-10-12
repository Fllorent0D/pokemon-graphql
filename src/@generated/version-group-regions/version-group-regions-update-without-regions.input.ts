import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsUpdateOneRequiredWithoutVersion_group_regionsNestedInput } from '../version-groups/version-groups-update-one-required-without-version-group-regions-nested.input';

@InputType()
export class version_group_regionsUpdateWithoutRegionsInput {

    @Field(() => version_groupsUpdateOneRequiredWithoutVersion_group_regionsNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutVersion_group_regionsNestedInput;
}
