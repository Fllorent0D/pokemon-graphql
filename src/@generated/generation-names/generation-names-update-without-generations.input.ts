import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutGeneration_namesNestedInput } from '../languages/languages-update-one-required-without-generation-names-nested.input';

@InputType()
export class generation_namesUpdateWithoutGenerationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutGeneration_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutGeneration_namesNestedInput;
}
