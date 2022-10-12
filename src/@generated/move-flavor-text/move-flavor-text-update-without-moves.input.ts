import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_flavor_textNestedInput } from '../languages/languages-update-one-required-without-move-flavor-text-nested.input';
import { version_groupsUpdateOneRequiredWithoutMove_flavor_textNestedInput } from '../version-groups/version-groups-update-one-required-without-move-flavor-text-nested.input';

@InputType()
export class move_flavor_textUpdateWithoutMovesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_flavor_textNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_flavor_textNestedInput;

    @Field(() => version_groupsUpdateOneRequiredWithoutMove_flavor_textNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutMove_flavor_textNestedInput;
}
