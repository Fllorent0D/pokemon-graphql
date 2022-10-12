import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutContest_type_namesNestedInput } from '../languages/languages-update-one-required-without-contest-type-names-nested.input';
import { contest_typesUpdateOneRequiredWithoutContest_type_namesNestedInput } from '../contest-types/contest-types-update-one-required-without-contest-type-names-nested.input';

@InputType()
export class contest_type_namesUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flavor?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    color?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutContest_type_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutContest_type_namesNestedInput;

    @Field(() => contest_typesUpdateOneRequiredWithoutContest_type_namesNestedInput, {nullable:true})
    contest_types?: contest_typesUpdateOneRequiredWithoutContest_type_namesNestedInput;
}
