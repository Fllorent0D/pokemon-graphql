import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ability_changelogUpdateOneRequiredWithoutAbility_changelog_proseNestedInput } from '../ability-changelog/ability-changelog-update-one-required-without-ability-changelog-prose-nested.input';

@InputType()
export class ability_changelog_proseUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    effect?: StringFieldUpdateOperationsInput;

    @Field(() => ability_changelogUpdateOneRequiredWithoutAbility_changelog_proseNestedInput, {nullable:true})
    ability_changelog?: ability_changelogUpdateOneRequiredWithoutAbility_changelog_proseNestedInput;
}
