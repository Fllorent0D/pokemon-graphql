import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { version_groupsUpdateOneRequiredWithoutMove_flavor_textNestedInput } from '../version-groups/version-groups-update-one-required-without-move-flavor-text-nested.input';
import { movesUpdateOneRequiredWithoutMove_flavor_textNestedInput } from '../moves/moves-update-one-required-without-move-flavor-text-nested.input';

@InputType()
export class move_flavor_textUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    flavor_text?: StringFieldUpdateOperationsInput;

    @Field(() => version_groupsUpdateOneRequiredWithoutMove_flavor_textNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateOneRequiredWithoutMove_flavor_textNestedInput;

    @Field(() => movesUpdateOneRequiredWithoutMove_flavor_textNestedInput, {nullable:true})
    moves?: movesUpdateOneRequiredWithoutMove_flavor_textNestedInput;
}
