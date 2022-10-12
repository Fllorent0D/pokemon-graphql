import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsUpdateOneRequiredWithoutVersion_group_regionsNestedInput } from '../regions/regions-update-one-required-without-version-group-regions-nested.input';

@InputType()
export class version_group_regionsUpdateWithoutVersion_groupsInput {

    @Field(() => regionsUpdateOneRequiredWithoutVersion_group_regionsNestedInput, {nullable:true})
    regions?: regionsUpdateOneRequiredWithoutVersion_group_regionsNestedInput;
}
