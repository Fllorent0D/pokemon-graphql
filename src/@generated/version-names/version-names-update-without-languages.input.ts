import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { versionsUpdateOneRequiredWithoutVersion_namesNestedInput } from '../versions/versions-update-one-required-without-version-names-nested.input';

@InputType()
export class version_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => versionsUpdateOneRequiredWithoutVersion_namesNestedInput, {nullable:true})
    versions?: versionsUpdateOneRequiredWithoutVersion_namesNestedInput;
}
