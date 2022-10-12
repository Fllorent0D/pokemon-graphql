import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsUpdateOneRequiredWithoutVersion_group_regionsNestedInput } from '../regions/regions-update-one-required-without-version-group-regions-nested.input';
import { version_groupsUpdateOneRequiredWithoutVersion_group_regionsNestedInput } from '../version-groups/version-groups-update-one-required-without-version-group-regions-nested.input';

@InputType()
export class version_group_regionsUpdateInput {

    @Field(() => regionsUpdateOneRequiredWithoutVersion_group_regionsNestedInput, {nullable:true})
    regions?: regionsUpdateOneRequiredWithoutVersion_group_regionsNestedInput;

    @Field(() => version_groupsUpdateOneRequiredWithoutVersion_group_regionsNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutVersion_group_regionsNestedInput;
}
