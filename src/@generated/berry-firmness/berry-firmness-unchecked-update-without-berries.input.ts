import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { berry_firmness_namesUncheckedUpdateManyWithoutBerry_firmnessNestedInput } from '../berry-firmness-names/berry-firmness-names-unchecked-update-many-without-berry-firmness-nested.input';

@InputType()
export class berry_firmnessUncheckedUpdateWithoutBerriesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => berry_firmness_namesUncheckedUpdateManyWithoutBerry_firmnessNestedInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesUncheckedUpdateManyWithoutBerry_firmnessNestedInput;
}
