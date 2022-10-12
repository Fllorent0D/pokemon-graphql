import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutAbility_changelog_proseNestedInput } from '../languages/languages-update-one-required-without-ability-changelog-prose-nested.input';

@InputType()
export class ability_changelog_proseUpdateWithoutAbility_changelogInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    effect?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutAbility_changelog_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutAbility_changelog_proseNestedInput;
}
