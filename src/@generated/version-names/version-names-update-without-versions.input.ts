import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutVersion_namesNestedInput } from '../languages/languages-update-one-required-without-version-names-nested.input';

@InputType()
export class version_namesUpdateWithoutVersionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutVersion_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutVersion_namesNestedInput;
}
