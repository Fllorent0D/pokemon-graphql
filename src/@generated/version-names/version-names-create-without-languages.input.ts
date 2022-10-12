import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateNestedOneWithoutVersion_namesInput } from '../versions/versions-create-nested-one-without-version-names.input';

@InputType()
export class version_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => versionsCreateNestedOneWithoutVersion_namesInput, {nullable:false})
    versions!: versionsCreateNestedOneWithoutVersion_namesInput;
}
