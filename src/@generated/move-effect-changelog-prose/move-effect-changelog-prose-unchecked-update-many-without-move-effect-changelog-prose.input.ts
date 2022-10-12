import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class move_effect_changelog_proseUncheckedUpdateManyWithoutMove_effect_changelog_proseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    move_effect_changelog_id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    effect?: StringFieldUpdateOperationsInput;
}
