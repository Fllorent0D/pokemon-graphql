import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutVersion_namesInput } from '../languages/languages-create-nested-one-without-version-names.input';
import { versionsCreateNestedOneWithoutVersion_namesInput } from '../versions/versions-create-nested-one-without-version-names.input';

@InputType()
export class version_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutVersion_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutVersion_namesInput;

    @Field(() => versionsCreateNestedOneWithoutVersion_namesInput, {nullable:false})
    versions!: versionsCreateNestedOneWithoutVersion_namesInput;
}
