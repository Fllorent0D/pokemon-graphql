import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput } from '../languages/languages-update-one-required-without-move-effect-changelog-prose-nested.input';

@InputType()
export class move_effect_changelog_proseUpdateWithoutMove_effect_changelogInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    effect?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_effect_changelog_proseNestedInput;
}
