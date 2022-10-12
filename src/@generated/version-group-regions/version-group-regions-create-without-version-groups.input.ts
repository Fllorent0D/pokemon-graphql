import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateNestedOneWithoutVersion_group_regionsInput } from '../regions/regions-create-nested-one-without-version-group-regions.input';

@InputType()
export class version_group_regionsCreateWithoutVersion_groupsInput {

    @Field(() => regionsCreateNestedOneWithoutVersion_group_regionsInput, {nullable:false})
    regions!: regionsCreateNestedOneWithoutVersion_group_regionsInput;
}
